# postcss-absolute-root-url

## What is postcss-absolute-root-url
This is an unofficial plugin for [postcss](https://www.npmjs.com/package/postcss) that transforms `url`'s for images and fonts into absolute URL's.

The ROOT_URL environment variable is used so that you don't need to hard-code a root url into the .scss ... because the root url depends upon which developer's computer (or server) the .scss is being compiled on/for.

## Where it can be used
It could probably be used in any Node.JS project, or with Webpack or Gulp, etc.

But thus far it has only been tested with [https://www.meteor.com/](MeteorJS Fullstack framework).

[postcss](https://www.npmjs.com/package/postcss) and is included into a Meteor project by adding [standard-minifier-css](https://docs.meteor.com/packages/standard-minifier-css.html) to the Meteor project. So if it's not already in .meteor/packages, run `meteor add standard-minifier-css`

## What postcss-absolute-root-url does
Replaces relative images and fonts URL paths in SCSS with an absolute URL from ROOT_URL environment variable.

before:
```
.foo { background-image: url(images/foo.jpg); }
.bar { background-image: url(images/icons/bar.svg); }
```
Assuming `ROOT_URL` environment variable is `https://example.com`
after:
```
.foo { background-image: url(https://example.com/images/foo.jpg); }
.bar { background-image: url(https://example.com/images/icons/bar.svg); }
```

etc

## Installation
```
npm i --save-dev autoprefixer postcss postcss-easy-import postcss-load-config postcss-absolute-root-url
```

Add a `postcss` object to the root of your `package.json` file as a sibling to `dependencies`, `license`, `author`, etc object properties.

Enable it for whatever CSS properties that you want. In the example below, it's only enabled for `background-image`.
```
"postcss": {
  "plugins": {
    "postcss-easy-import": {},
    "postcss-absolute-root-url": { "background-image":1, "list-style-image":0, "content":0, "cursor":0, "border-image-source":0, "src":0 },
    "autoprefixer": {}
  }
},
```

### Docs
I've only tested with `background-image`. Further reading:
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
