
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

```js
import showdown from "showdown";
import showdownPrism from "showdown-prism";
// Add extension to showdown options
const converter = new showdown.Converter({
  extensions: [showdownPrism],
});
// Convert to HTML
const convertedContent = converter.makeHtml(/*your markdown content*/)

```
---

### Theme

Themes are available at : 
- My repo , pre minified by jsDelivr - https://github.com/phothinmg/prism-themes

- Prism Themes on Github by Prism JS - https://github.com/PrismJS/prism-themes

- Prism Themes on jsDelivr - https://www.jsdelivr.com/package/npm/prism-themes

- Prism-themes on cdnjs - https://cdnjs.com/libraries/prism-themes

```html
<!DOCTYPE html>
<html>
    <head>
        ...
        <link href="your_css_link_here" rel="stylesheet" />
    </head>
    <body>
        ...
        <script src="prism.js"></script>
    </body>
</html>
```

