
## Showdown Prism

***Showdown extension for Prism.Js***

Highlight the code block with Prism.JS.
---

![Showdown](https://raw.githubusercontent.com/showdownjs/logo/master/dist/logo.readme.png)

![Prism](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjWKYf_38hFwIwCIsKaqoUrbVIm6UaNw1Ww&s)   

---
## Documentation

### Getting Started

**Install**

`npm package`

```bash
npm i showdown showdown-prism
```

```bash
pnpm i showdown showdown-prism
```

```bash
yarn add showdown showdown-prism
```


**Set Up**

esm

```js
import showdown from "showdown";
import showdownprism from "showdown-prism";
// Add extension to showdown options
const converter = new showdown.Converter({
  extensions: [showdownPrism({
            langs: ["bash"],
            theme: "holi-theme",
            copyToClipboard: true,
        }),],
});
// Convert to HTML
const convertedContent = converter.makeHtml(/*your markdown content*/)

```

common js

```js
const showdown = require("showdown");
const showdownPrism = require("showdown-prism");
// Add extension to showdown options
const converter = new showdown.Converter({
  extensions: [showdownPrism({
            langs: ["bash"],
            theme: "holi-theme",
            copyToClipboard: true,
        }),],
});
// Convert to HTML
const convertedContent = converter.makeHtml(/*your markdown content*/)

```

---


## Params

**1.bundler : boolean**
- Default false
- If you use Webpack or another bundler set to true, as this will cause Webpack to include all languages and plugins.
- If true , next parameter langs will disable.

**2.langs :  string | string[ ]**
- Prismjs will load the default languages: markup, css, clike and javascript.
- You can load more languages with the options.langs.
- Only available bundler was false.
 
**3.theme : string**
- Available themes 
  
    `actom-dark`
    `cb`
    `coldark-dark`
    `dark`
    `holi-theme`
    `duotone-earth`
    `duotone-forest`
    `duotone-light`
    `duotone-sea`
    `duotone-space`
    `funky`
    `ghcolors`
    `gruvbox-light`
    `laserwave`
    `lucario`
    `night-owl`
    `okaidia`
    `one-dark`
    `one-light`
    `solarized-dark-atom`
    `synthwave84`
    `tomorrow`
    `twilight`
    `vs`
    `vsc-dark-plus`
    `z-touch`

- This create  link tag of available themes in your html head element.

**4.copyToClipboard :  boolean**
- Default false
- Do not confuse with Prism Js plugin , copy-to-clipboard

---




