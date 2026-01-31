/**
 * HTML to Markdown Converter for OpenJAUS Documentation
 * 
 * This script converts the legacy HTML documentation to VitePress-compatible Markdown.
 * It handles three types of content:
 * - Service Sets (ss/*.html)
 * - Services (service/*.html)
 * - Messages/Triggers (triggers/*.html)
 */

import * as cheerio from 'cheerio';
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, basename } from 'path';

// Configuration
const ROOT_DIR = process.cwd();
const DOCS_DIR = join(ROOT_DIR, 'docs');
const SOURCE_DIRS = {
  serviceSets: join(ROOT_DIR, 'ss'),
  services: join(ROOT_DIR, 'service'),
  triggers: join(ROOT_DIR, 'triggers')
};

// Output directories
const OUTPUT_DIRS = {
  serviceSets: join(DOCS_DIR, 'service-sets'),
  services: join(DOCS_DIR, 'services'),
  messages: join(DOCS_DIR, 'messages')
};

// Navigation data - will be populated during conversion
const navData = {
  serviceSets: [],
  services: [],
  messages: []
};

/**
 * Convert a string to kebab-case for URL slugs
 */
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase();
}

/**
 * Extract the service set name from filename
 * e.g., "core_v1_1ServiceSet.html" -> "core-v1-1"
 */
function serviceSetSlug(filename) {
  const name = basename(filename, '.html');
  return name
    .replace('ServiceSet', '')
    .replace(/_/g, '-')
    .toLowerCase();
}

/**
 * Convert trigger filename to slug
 * e.g., "ConfirmControl-000F.html" -> "confirm-control-000f"
 */
function triggerSlug(filename) {
  const name = basename(filename, '.html');
  return toKebabCase(name);
}

/**
 * Rewrite internal links to new format
 */
function rewriteLinks(text) {
  // Rewrite service links: ../service/ServiceName.html -> /services/service-name
  text = text.replace(/\.\.\/service\/([^"]+)\.html/g, (match, name) => {
    return `/services/${toKebabCase(name)}`;
  });
  
  // Rewrite trigger links: ../triggers/Name-ID.html -> /messages/name-id
  text = text.replace(/\.\.\/triggers\/([^"]+)\.html/g, (match, name) => {
    return `/messages/${toKebabCase(name)}`;
  });
  
  // Rewrite service set links: ../ss/name.html -> /service-sets/slug
  text = text.replace(/\.\.\/ss\/([^"]+)\.html/g, (match, name) => {
    return `/service-sets/${serviceSetSlug(name)}`;
  });
  
  // Rewrite state machine diagram paths
  text = text.replace(/\.\.\/smDiagrams\//g, '/smDiagrams/');
  
  // Remove newlines in link URLs that were in the original HTML
  text = text.replace(/\n" target="mainFrame"/g, '');
  
  return text;
}

/**
 * Convert HTML table to Markdown table
 */
function htmlTableToMarkdown($, table) {
  const rows = [];
  const $table = $(table);
  
  // Get header row
  const headerCells = [];
  $table.find('tr').first().find('th, td').each((i, cell) => {
    const text = $(cell).text().trim().replace(/\n/g, ' ');
    headerCells.push(text);
  });
  
  if (headerCells.length === 0) return '';
  
  rows.push('| ' + headerCells.join(' | ') + ' |');
  rows.push('| ' + headerCells.map(() => '---').join(' | ') + ' |');
  
  // Get data rows
  $table.find('tr').slice(1).each((i, row) => {
    const cells = [];
    $(row).find('td').each((j, cell) => {
      let text = $(cell).text().trim().replace(/\n/g, ' ').replace(/\|/g, '\\|');
      // Truncate very long cells
      if (text.length > 100) {
        text = text.substring(0, 97) + '...';
      }
      cells.push(text);
    });
    if (cells.length > 0) {
      rows.push('| ' + cells.join(' | ') + ' |');
    }
  });
  
  return rows.join('\n');
}

/**
 * Convert complex HTML table to raw HTML for Markdown
 * Used for tables with rowspan/colspan that don't convert well to Markdown
 */
function cleanHtmlTable($, table) {
  const $table = $(table);
  
  // Remove classes and inline styles, keep structure
  $table.find('*').removeAttr('class').removeAttr('bgcolor').removeAttr('width');
  $table.removeAttr('class').removeAttr('bgcolor').removeAttr('width').removeAttr('cellpadding').removeAttr('cellspacing').removeAttr('summary');
  
  // Add some basic styling classes
  $table.attr('class', 'jaus-table');
  
  // Clean up link targets
  $table.find('a').removeAttr('target');
  
  let html = $.html($table);
  
  // Rewrite links in the HTML
  html = rewriteLinks(html);
  
  // Clean up whitespace
  html = html.replace(/\n\s*\n/g, '\n');
  
  return html;
}

/**
 * Convert a Service Set HTML file to Markdown
 */
function convertServiceSet(filePath) {
  const html = readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);
  
  // Extract title
  const title = $('h2').first().text().trim().replace(' SERVICE SET', '');
  const slug = serviceSetSlug(basename(filePath));
  
  // Extract services list
  const services = [];
  $('h3:contains("Services")').next('ul').find('li').each((i, li) => {
    const $li = $(li);
    const $link = $li.find('a').first();
    const name = $link.text().split(' (')[0].trim();
    const urn = $link.text().match(/\((.*?)\)/)?.[1] || '';
    const description = $li.text().replace($link.text(), '').replace(/<br>/g, ' ').trim();
    const href = $link.attr('href') || '';
    
    services.push({ name, urn, description, href });
  });
  
  // Extract internal events
  const internalEvents = [];
  $('h3:contains("Internal Events")').next('ul').find('li').each((i, li) => {
    const $li = $(li);
    const $link = $li.find('a').first();
    const name = $link.text().split(' [')[0].trim();
    // Extract ID without the trailing 'h' - match hex digits only
    const id = $link.text().match(/\[([0-9A-Fa-f]+)h?\]/)?.[1] || '';
    const href = $link.attr('href') || '';
    
    internalEvents.push({ name, id, href });
  });
  
  // Extract messages
  const messages = [];
  $('h3:contains("Messages")').next('ul').find('li').each((i, li) => {
    const $li = $(li);
    const $link = $li.find('a').first();
    const name = $link.text().split(' [')[0].trim();
    // Extract ID without the trailing 'h' - match hex digits only
    const id = $link.text().match(/\[([0-9A-Fa-f]+)h?\]/)?.[1] || '';
    const href = $link.attr('href') || '';
    
    messages.push({ name, id, href });
  });
  
  // Build Markdown content
  let md = `---
title: ${title}
---

# ${title} Service Set

`;

  if (services.length > 0) {
    md += `## Services

| Service | URN |
| --- | --- |
`;
    services.forEach(s => {
      const serviceSlug = toKebabCase(s.name);
      md += `| [${s.name}](/services/${serviceSlug}) | ${s.urn} |\n`;
    });
    md += '\n';
    
    // Add service descriptions
    md += '### Service Descriptions\n\n';
    services.forEach(s => {
      const serviceSlug = toKebabCase(s.name);
      md += `#### [${s.name}](/services/${serviceSlug})\n\n`;
      if (s.description) {
        md += `${s.description}\n\n`;
      }
    });
  }
  
  if (internalEvents.length > 0) {
    md += `## Internal Events

| Event | ID |
| --- | --- |
`;
    internalEvents.forEach(e => {
      const eventSlug = triggerSlug(`${e.name}-${e.id}.html`);
      md += `| [${e.name}](/messages/${eventSlug}) | ${e.id}h |\n`;
    });
    md += '\n';
  }
  
  if (messages.length > 0) {
    md += `## Messages

| Message | ID |
| --- | --- |
`;
    messages.forEach(m => {
      const msgSlug = triggerSlug(`${m.name}-${m.id}.html`);
      md += `| [${m.name}](/messages/${msgSlug}) | ${m.id}h |\n`;
    });
    md += '\n';
  }
  
  // Add to navigation data
  navData.serviceSets.push({
    text: title,
    link: `/service-sets/${slug}`
  });
  
  return { slug, content: md, title };
}

/**
 * Check if a state machine diagram exists
 */
function diagramExists(diagramName) {
  const diagramPath = join(ROOT_DIR, 'smDiagrams', diagramName);
  return existsSync(diagramPath);
}

/**
 * Convert a Service HTML file to Markdown
 */
function convertService(filePath) {
  const html = readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);
  
  // Extract title (service name)
  const title = $('h2').first().text().trim();
  const slug = toKebabCase(title);
  
  // Extract version and ID
  const bodyText = $('body').text();
  const version = $('b:contains("Version:")').parent().text().match(/Version:\s*(\S+)/)?.[1] || '';
  const urn = $('b:contains("ID:")').parent().text().match(/ID:\s*(\S+)/)?.[1] || '';
  
  // Extract description
  let description = '';
  const descLabel = $('b:contains("Description:")');
  if (descLabel.length > 0) {
    // Get the text after the description label until the next major element
    let node = descLabel[0].nextSibling;
    while (node && node.tagName !== 'TABLE' && node.tagName !== 'H2') {
      if (node.type === 'text') {
        description += node.data;
      } else if (node.tagName === 'BR') {
        description += '\n';
      }
      node = node.nextSibling;
    }
    description = description.trim();
  }
  
  // Extract inheritance hierarchy
  const inheritsFrom = [];
  $('b:contains("Inherits From:")').parent().find('a').each((i, a) => {
    const $a = $(a);
    const text = $a.text().trim();
    const href = $a.attr('href') || '';
    inheritsFrom.push({ text, href });
  });
  
  // Extract internal events
  const internalEvents = [];
  $('th:contains("Internal Event Set")').closest('table').find('tr').each((i, row) => {
    if (i === 0 || i === 1) return; // Skip header rows
    const $row = $(row);
    const id = $row.find('td').first().text().trim();
    const $link = $row.find('a').first();
    const name = $link.text().trim();
    if (name) {
      internalEvents.push({ id, name });
    }
  });
  
  // Extract message set
  const messageSet = [];
  $('th:contains("Message Set")').closest('table').find('tr').each((i, row) => {
    if (i === 0 || i === 1) return; // Skip header rows
    const $row = $(row);
    const id = $row.find('td').first().text().trim();
    const $link = $row.find('a').first();
    const name = $link.text().trim();
    if (name) {
      messageSet.push({ id, name });
    }
  });
  
  // Check for state machine diagram
  const smDiagram = $('img[src*="smDiagrams"]').attr('src');
  
  // Extract state transitions table
  let stateTransitionsHtml = '';
  const stTable = $('th:contains("State Transitions")').closest('table');
  if (stTable.length > 0) {
    stateTransitionsHtml = cleanHtmlTable($, stTable);
  }
  
  // Extract actions table
  let actionsHtml = '';
  const actionsTable = $('th:contains("Actions")').closest('table');
  if (actionsTable.length > 0) {
    actionsHtml = cleanHtmlTable($, actionsTable);
  }
  
  // Build Markdown content
  let md = `---
title: ${title}
---

# ${title}

| Property | Value |
| --- | --- |
| **Version** | ${version} |
| **URN** | \`${urn}\` |

`;

  if (inheritsFrom.length > 0) {
    md += `## Inheritance

This service inherits from:

`;
    inheritsFrom.forEach(i => {
      const parentSlug = toKebabCase(i.text.split(':').pop().split(' ')[0]);
      md += `- [${i.text}](/services/${parentSlug})\n`;
    });
    md += '\n';
  }
  
  if (description) {
    md += `## Description

${description}

`;
  }
  
  if (internalEvents.length > 0) {
    md += `## Internal Events

| ID | Event |
| --- | --- |
`;
    internalEvents.forEach(e => {
      const eventSlug = triggerSlug(`${e.name}-${e.id.replace('h', '')}.html`);
      md += `| \`${e.id}\` | [${e.name}](/messages/${eventSlug}) |\n`;
    });
    md += '\n';
  }
  
  if (messageSet.length > 0) {
    md += `## Message Set

| ID | Message |
| --- | --- |
`;
    messageSet.forEach(m => {
      const msgSlug = triggerSlug(`${m.name}-${m.id.replace('h', '')}.html`);
      md += `| \`${m.id}\` | [${m.name}](/messages/${msgSlug}) |\n`;
    });
    md += '\n';
  }
  
  if (smDiagram) {
    // Extract just the filename from the path
    const diagramFilename = smDiagram.replace('../smDiagrams/', '');
    // Only include the diagram if the file actually exists
    if (diagramExists(diagramFilename)) {
      const diagramPath = `/smDiagrams/${diagramFilename}`;
      md += `## State Machine Diagram

![${title} State Machine Diagram](${diagramPath})

`;
    }
  }
  
  if (stateTransitionsHtml) {
    md += `## State Transitions

${stateTransitionsHtml}

`;
  }
  
  if (actionsHtml) {
    md += `## Actions

${actionsHtml}

`;
  }
  
  // Add to navigation data
  navData.services.push({
    text: title,
    link: `/services/${slug}`
  });
  
  return { slug, content: md, title };
}

/**
 * Convert a Trigger/Message HTML file to Markdown
 */
function convertTrigger(filePath) {
  const html = readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);
  
  const filename = basename(filePath);
  const slug = triggerSlug(filename);
  
  // Extract title
  const h2Text = $('h2').first().text().trim();
  const isInternalEvent = h2Text.includes('Internal Event');
  const title = h2Text.replace('Message ', '').replace('Internal Event ', '');
  
  // Extract message ID
  const messageId = $('h3').first().text().replace('Message ID:', '').trim();
  
  // Extract description
  let description = '';
  const descLabel = $('b:contains("Description:")');
  if (descLabel.length > 0) {
    let node = descLabel[0].nextSibling;
    while (node && node.tagName !== 'TABLE') {
      if (node.type === 'text') {
        description += node.data;
      } else if (node.tagName === 'BR') {
        description += '\n';
      }
      node = node.nextSibling;
    }
    description = description.trim();
  }
  
  // Extract message format table
  let messageFormatHtml = '';
  const formatTable = $('th:contains("Message Format")').closest('table');
  if (formatTable.length > 0) {
    messageFormatHtml = cleanHtmlTable($, formatTable);
  }
  
  // Build Markdown content
  const typeLabel = isInternalEvent ? 'Internal Event' : 'Message';
  
  let md = `---
title: ${title}
---

# ${typeLabel}: ${title}

| Property | Value |
| --- | --- |
| **Type** | ${typeLabel} |
| **Message ID** | \`${messageId}\` |

`;

  if (description) {
    md += `## Description

${description}

`;
  }
  
  if (messageFormatHtml) {
    md += `## Message Format

${messageFormatHtml}

`;
  }
  
  // Add to navigation data
  navData.messages.push({
    text: `${title} [${messageId}]`,
    link: `/messages/${slug}`
  });
  
  return { slug, content: md, title, messageId };
}

/**
 * Ensure a directory exists
 */
function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

/**
 * Generate VitePress sidebar configuration
 */
function generateSidebarConfig() {
  // Sort navigation items
  navData.serviceSets.sort((a, b) => a.text.localeCompare(b.text));
  navData.services.sort((a, b) => a.text.localeCompare(b.text));
  navData.messages.sort((a, b) => a.text.localeCompare(b.text));
  
  const config = `import { defineConfig } from 'vitepress'

// VitePress configuration for OpenJAUS Documentation
// Auto-generated sidebar from HTML conversion
export default defineConfig({
  // Site metadata
  title: 'OpenJAUS Documentation',
  description: 'JAUS Service Set Reference Documentation',
  
  // Base URL for GitHub Pages deployment
  base: '/openjaus.htmlDoc/',
  
  // Theme configuration
  themeConfig: {
    // Site logo
    logo: '/images/ojLogo_small.png',
    
    // Navigation bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Service Sets', link: '/service-sets/' },
      { text: 'Services', link: '/services/' },
      { text: 'Messages', link: '/messages/' }
    ],
    
    // Sidebar navigation
    sidebar: {
      '/service-sets/': [
        {
          text: 'Service Sets',
          items: ${JSON.stringify(navData.serviceSets, null, 12).replace(/\n/g, '\n          ')}
        }
      ],
      '/services/': [
        {
          text: 'All Services',
          collapsed: false,
          items: ${JSON.stringify(navData.services, null, 12).replace(/\n/g, '\n          ')}
        }
      ],
      '/messages/': [
        {
          text: 'All Messages',
          collapsed: false,
          items: ${JSON.stringify(navData.messages, null, 12).replace(/\n/g, '\n          ')}
        }
      ]
    },
    
    // Enable local search
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    
    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/openjaus' }
    ],
    
    // Footer
    footer: {
      message: 'OpenJAUS Service Set Documentation',
      copyright: 'Copyright © OpenJAUS. JAUS content © SAE International.'
    },
    
    // Enable outline (table of contents) on the right
    outline: {
      level: [2, 3]
    }
  },
  
  // Markdown configuration
  markdown: {
    lineNumbers: false,
    anchor: {
      permalink: true
    }
  },
  
  // Build options
  vite: {
    build: {
      chunkSizeWarningLimit: 1000
    }
  }
})
`;

  return config;
}

/**
 * Main conversion function
 */
async function main() {
  console.log('OpenJAUS HTML to Markdown Converter');
  console.log('====================================\n');
  
  // Ensure output directories exist
  Object.values(OUTPUT_DIRS).forEach(ensureDir);
  
  // Convert Service Sets
  console.log('Converting Service Sets...');
  const ssFiles = readdirSync(SOURCE_DIRS.serviceSets).filter(f => f.endsWith('.html'));
  let ssCount = 0;
  for (const file of ssFiles) {
    try {
      const result = convertServiceSet(join(SOURCE_DIRS.serviceSets, file));
      const outputPath = join(OUTPUT_DIRS.serviceSets, `${result.slug}.md`);
      writeFileSync(outputPath, result.content);
      ssCount++;
      console.log(`  ✓ ${file} -> ${result.slug}.md`);
    } catch (err) {
      console.error(`  ✗ Error converting ${file}: ${err.message}`);
    }
  }
  console.log(`  Converted ${ssCount} service sets\n`);
  
  // Convert Services
  console.log('Converting Services...');
  const serviceFiles = readdirSync(SOURCE_DIRS.services).filter(f => f.endsWith('.html'));
  let serviceCount = 0;
  for (const file of serviceFiles) {
    try {
      const result = convertService(join(SOURCE_DIRS.services, file));
      const outputPath = join(OUTPUT_DIRS.services, `${result.slug}.md`);
      writeFileSync(outputPath, result.content);
      serviceCount++;
      if (serviceCount % 20 === 0) {
        console.log(`  Converted ${serviceCount}/${serviceFiles.length} services...`);
      }
    } catch (err) {
      console.error(`  ✗ Error converting ${file}: ${err.message}`);
    }
  }
  console.log(`  ✓ Converted ${serviceCount} services\n`);
  
  // Convert Triggers/Messages
  console.log('Converting Messages/Triggers...');
  const triggerFiles = readdirSync(SOURCE_DIRS.triggers).filter(f => f.endsWith('.html'));
  let triggerCount = 0;
  for (const file of triggerFiles) {
    try {
      const result = convertTrigger(join(SOURCE_DIRS.triggers, file));
      const outputPath = join(OUTPUT_DIRS.messages, `${result.slug}.md`);
      writeFileSync(outputPath, result.content);
      triggerCount++;
      if (triggerCount % 50 === 0) {
        console.log(`  Converted ${triggerCount}/${triggerFiles.length} messages...`);
      }
    } catch (err) {
      console.error(`  ✗ Error converting ${file}: ${err.message}`);
    }
  }
  console.log(`  ✓ Converted ${triggerCount} messages\n`);
  
  // Generate updated VitePress config with navigation
  console.log('Generating VitePress configuration...');
  const configContent = generateSidebarConfig();
  writeFileSync(join(DOCS_DIR, '.vitepress', 'config.js'), configContent);
  console.log('  ✓ Generated .vitepress/config.js\n');
  
  // Summary
  console.log('Conversion Complete!');
  console.log('====================');
  console.log(`  Service Sets: ${ssCount}`);
  console.log(`  Services: ${serviceCount}`);
  console.log(`  Messages: ${triggerCount}`);
  console.log(`  Total: ${ssCount + serviceCount + triggerCount} files`);
  console.log('\nNext steps:');
  console.log('  1. Run: npm install');
  console.log('  2. Run: npm run docs:dev');
  console.log('  3. Open: http://localhost:5173');
}

main().catch(console.error);
