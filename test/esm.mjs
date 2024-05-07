import showdown from "showdown";
import fs from "fs";
import showdownPrism from "../src/index.mjs";

const content = fs.readFileSync("./aa.md", "utf-8");

const converter = new showdown.Converter({
    parseImgDimensions: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tables: false,
    tasklists: true,
    openLinksInNewWindow: true,
    emoji: true,
    moreStyling: true,
    extensions: [
        showdownPrism({
            langs: ["bash"],
            theme: "holi-theme",
            copyToClipboard: true,
        }),
    ],
});
converter.setFlavor("github");
const html = converter.makeHtml(content);

const temp = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://classless.de/classless.css">

    
    
    
  </head>
  <body>
 ${html}

  </body>
</html>
`;

fs.writeFileSync("index.html", temp);

