module.exports = (opts = {}) => {
  const declarationsA = [];
  if (opts['background-image'   ]) declarationsA.push(['background-image'   , replaceImagesUrl]);
  if (opts['list-style-image'   ]) declarationsA.push(['list-style-image'   , replaceImagesUrl]);
  if (opts['content'            ]) declarationsA.push(['content'            , replaceImagesUrl]);
  if (opts['cursor'             ]) declarationsA.push(['cursor'             , replaceImagesUrl]);
  if (opts['border-image-source']) declarationsA.push(['border-image-source', replaceImagesUrl]);
  if (opts['src'                ]) declarationsA.push(['src'                , replaceFontsUrl ]);
  return {
    postcssPlugin: 'postcss-meteor-root-url',
    Declaration: Object.fromEntries(declarationsA),
  };
};
module.exports.postcss = true;

const replaceImagesUrl = (decl, postcss) => {
  console.log(`replaceImagesUrl`, decl.value)
  if (decl.value.indexOf('images/') > -1 && decl.value.indexOf('//')===-1) {
    const { ROOT_URL } = process.env;
    decl.value = decl.value.replace(/\.*?images\//, `${ROOT_URL}/images/`);
  }
};

const replaceFontsUrl = (decl, postcss) => {
  console.log(`replaceFontsUrl`, decl.value)
  if (decl.value.indexOf('fonts/') > -1 && decl.value.indexOf('//')===-1) {
    const { ROOT_URL } = process.env;
    decl.value = decl.value.replace(/\.*?fonts\//, `${ROOT_URL}/fonts/`);
  }
};
