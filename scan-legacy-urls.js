const raw = require('./data/generated/contentful-blog.json');
const articles = raw.articles || [];
const legacyUrls = [
  '/services/drone-survey',
  '/services/thermal-imaging',
  '/services/topographic-survey',
  '/services/building-inspection',
  '/services/volumetric-analysis',
  '/services/construction-progress-monitoring',
  '/services/aerial-photography'
];

function findHyperlinks(node, results) {
  if (!node) return results;
  if (node.nodeType === 'hyperlink' && node.data && node.data.uri) {
    const uri = node.data.uri;
    for (const legacy of legacyUrls) {
      if (uri === legacy || uri.startsWith(legacy + '/') || uri.startsWith(legacy + '?')) {
        results.push({ uri: node.data.uri, legacy });
        break;
      }
    }
  }
  if (node.content && Array.isArray(node.content)) {
    for (const child of node.content) {
      findHyperlinks(child, results);
    }
  }
  return results;
}

// Also scan for ALL hyperlinks to see what service URLs exist
function findAllServiceHyperlinks(node, results) {
  if (!node) return results;
  if (node.nodeType === 'hyperlink' && node.data && node.data.uri) {
    const uri = node.data.uri;
    if (uri.includes('/services/')) {
      results.push(uri);
    }
  }
  if (node.content && Array.isArray(node.content)) {
    for (const child of node.content) {
      findAllServiceHyperlinks(child, results);
    }
  }
  return results;
}

const affected = [];
const allServiceUrls = new Set();
for (const post of articles) {
  const slug = post.slug;
  const title = post.title || 'unknown';
  const content = post.contentfulContent;
  if (content && content.nodeType === 'document') {
    const links = findHyperlinks(content, []);
    if (links.length > 0) {
      affected.push({ slug, title, links });
    }
    // Also collect all service URLs
    const serviceLinks = findAllServiceHyperlinks(content, []);
    serviceLinks.forEach(u => allServiceUrls.add(u));
  }
}

console.log('=== AFFECTED ENTRIES (legacy URLs) ===');
console.log(JSON.stringify(affected, null, 2));
console.log('Total affected entries:', affected.length);
console.log('\n=== ALL SERVICE URLs FOUND IN BLOG POSTS ===');
console.log([...allServiceUrls].sort().join('\n'));
