const contentful = require('contentful');
const fs = require('fs');
const path = require('path');

const URL_MAP = {
  '/services/drone-survey': '/services/drone-surveys',
  '/services/thermal-imaging': '/services/drone-thermal-imaging',
  '/services/topographic-survey': '/services/drone-topographical-survey',
  '/services/building-inspection': '/services/drone-roof-inspection',
  '/services/volumetric-analysis': '/services/drone-volumetric-survey',
  '/services/construction-progress-monitoring': '/services/drone-construction-monitoring',
  '/services/aerial-photography': '/services/drone-photography',
};

const AFFECTED_IDS = [
  '2GvAGacXGuX8YCVKalCjdU',
  '52roYh2jrn1C6F7loIiWYJ',
  '5UELCamOUZuBsySWgpTmt',
  '13ADZdJEVCLhRp6WiY37lF',
  '4zQsG7cx1rlIBuRUVewoqS',
];

function replaceUrls(node) {
  if (!node) return node;
  if (node.nodeType === 'hyperlink' && node.data && node.data.uri) {
    const uri = node.data.uri;
    if (URL_MAP[uri]) {
      node.data.uri = URL_MAP[uri];
    }
  }
  if (node.content && Array.isArray(node.content)) {
    node.content = node.content.map(child => replaceUrls(child));
  }
  return node;
}

async function main() {
  const client = contentful.createClient({
    space: 'mi01fklde62c',
    accessToken: 'd4i6XHxoHZ8y35D-4Iz8mwOz8811WQ1I7XLTBJGx3Gc',
    environment: 'master',
  });

  const outDir = path.join(__dirname, 'tmp-url-fixes');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  for (const id of AFFECTED_IDS) {
    const entry = await client.getEntry(id);
    const content = entry.fields.content;
    const title = entry.fields.title;

    // Deep clone the content
    const modified = JSON.parse(JSON.stringify(content));
    replaceUrls(modified);

    const outFile = path.join(outDir, `${id}.json`);
    fs.writeFileSync(outFile, JSON.stringify(modified, null, 2));
    console.log(`Processed: ${title} (${id}) -> ${outFile}`);
  }

  console.log('\nDone. Modified Rich Text documents saved to', outDir);
}

main().catch(console.error);
