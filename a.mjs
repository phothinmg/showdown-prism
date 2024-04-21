import fs from "fs";
import showdown from "showdown";
import loadLanguages from "prismjs/components/index.js";
import Prism from "prismjs";
import showdownPrism from "./dist/index.mjs"
import pkg from "he";
const { decode } = pkg;
loadLanguages();
loadLanguages.silent = true;


const c = fs.readFileSync("./hero.md", "utf-8");
// Usage
const converter = new showdown.Converter({
  extensions: [showdownPrism],
});
converter.addExtension

const cc = converter.makeHtml(c);

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/phothinmg/showdown-prism@main/prismjs/prism.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/phothinmg/showdown-prism@main/prismjs/theme/holi-theme.css"/>
    <title>Document</title>
</head>
<body>
<div style="margin: auto; width: 50%;">
<h3 style="text-align: center;">TeX</h3>
    ${cc}
</div>
<script src="https://cdn.jsdelivr.net/gh/phothinmg/showdown-prism@main/prismjs/prism.js"></script>

</body>
</html>

`;

fs.writeFileSync("./ind.html", html);
