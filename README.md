# postcss-absolute-root-url

## What is postcss-absolute-root-url
This is an unofficial plugin for [postcss](https://www.npmjs.com/package/postcss) that transforms relative `url`'s for images and fonts into absolute URL's.

The `ROOT_URL` environment variable is used so that you don't need to hard-code a root url into the .scss ... because the root url needed depends upon which developer's computer (for dev/test locally) or server that the .scss is being compiled on/for.

## Compatible frameworks
It could **probably** be used in
* Any Node.JS project
* Webpack
* Gulp
* ... etc

But thus far **it has only been tested with a ReactJS project with [MeteorJS Fullstack framework](https://www.meteor.com/).**

## Usage in Meteor
Meteor package [standard-minifier-css](https://docs.meteor.com/packages/standard-minifier-css.html) runs [postcss](https://www.npmjs.com/package/postcss). If `standard-minifier-css` is not already listed in .meteor/packages, run `meteor add standard-minifier-css`.

## What postcss-absolute-root-url does
It replaces relative images and fonts URL paths in SCSS with an absolute URL from ROOT_URL environment variable. Example where `ROOT_URL` environment variable is `https://example.com`

before:
```
.foo { background-image: url(images/foo.jpg); }
.bar { background-image: url(images/icons/bar.svg); }
```
after:
```
.foo { background-image: url(https://example.com/images/foo.jpg); }
.bar { background-image: url(https://example.com/images/icons/bar.svg); }
```

## Installation
```
npm i --save-dev autoprefixer postcss postcss-easy-import postcss-load-config postcss-absolute-root-url
```

Add a `postcss` object to the root of your `package.json` configuration file as a sibling to `dependencies`, `license`, `author`, etc object properties, as below.

Enable it for whatever CSS properties that you want. (in the example below, `postcss-absolute-root-url` is only enabled for `background-image`)
```
"postcss": {
  "plugins": {
    "postcss-easy-import": {},
    "postcss-absolute-root-url": { "background-image":1, "list-style-image":0, "content":0, "cursor":0, "border-image-source":0, "src":0 },
    "autoprefixer": {}
  }
},
```

As per [standard-minifier-css](https://docs.meteor.com/packages/standard-minifier-css.html) docs, the order of the plugins is important, they say `postcss-easy-import` must be first and `autoprefixer` must be last. So probably `postcss-absolute-root-url` should be 2nd last, but you can try whatever.

### Relevant CSS docs:
[MDN CSS url](https://developer.mozilla.org/en-US/docs/Web/CSS/url)

### Say thanks
Star the repo
https://github.com/softwarecreations/postcss-absolute-root-url

### Get notified of significant project changes
Subscribe to this issue https://github.com/softwarecreations/postcss-absolute-root-url/issues/1

### PR's or issues
Welcome

### License
MIT
