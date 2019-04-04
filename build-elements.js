const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const jsFiles = [
    './dist/orange-ui-dynamic-table/runtime.js',
    './dist/orange-ui-dynamic-table/polyfills.js',
    './dist/orange-ui-dynamic-table/scripts.js',
    './dist/orange-ui-dynamic-table/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(jsFiles, 'elements/bundle.js');
})();
