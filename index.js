
module.exports = (opts = {}) => {
  const pluginName = 'postcss-absolute-root-url';
  const { ROOT_URL } = process.env;
  if (ROOT_URL===undefined) throw new Error(`${pluginName} requires ROOT_URL environment variable.`);

  if (opts===null || typeof opts!=='object' || opts.constructor.name!=='Object') throw new Error(`Expected opts to be an object, but it was type:'${typeof opts}', value:${opts}.`);

  const verbose = typeof opts.verbose==='number' ? opts.verbose : 0;

  const replaceImagesUrl = (decl, postcss) => {
    if (decl.value.indexOf('images/') > -1 && decl.value.indexOf('//')===-1) {
      const oldValue = decl.value;
      decl.value = oldValue.replace(/\.*?images\//, `${ROOT_URL}/images/`);
      if (verbose >= 1) console.log(`${pluginName} replaceImagesUrl '${oldValue}' > '${decl.value}'`);
    } else if (verbose >= 2) {
      console.log(`${pluginName} replaceImagesUrl didn't match: ${decl.value}`);
    }
  };

  const replaceFontsUrl = (decl, postcss) => {
    if (decl.value.indexOf('fonts/') > -1 && decl.value.indexOf('//')===-1) {
      const oldValue = decl.value;
      decl.value = oldValue.replace(/\.*?fonts\//, `${ROOT_URL}/fonts/`);
      if (verbose >= 1) console.log(`${pluginName} replaceFontsUrl '${oldValue}' > '${decl.value}'`);
    } else if (verbose >= 2) {
      console.log(`${pluginName} replaceFontsUrl didn't match: ${decl.value}`);
    }
  };

  const declarationsA = [];
  if (opts['background-image'   ]) declarationsA.push(['background-image'   , replaceImagesUrl]);
  if (opts['list-style-image'   ]) declarationsA.push(['list-style-image'   , replaceImagesUrl]);
  if (opts['content'            ]) declarationsA.push(['content'            , replaceImagesUrl]);
  if (opts['cursor'             ]) declarationsA.push(['cursor'             , replaceImagesUrl]);
  if (opts['border-image-source']) declarationsA.push(['border-image-source', replaceImagesUrl]);
  if (opts['src'                ]) declarationsA.push(['src'                , replaceFontsUrl ]);
  return {
    postcssPlugin: pluginName,
    Declaration: Object.fromEntries(declarationsA),
  };
};

module.exports.postcss = true;
