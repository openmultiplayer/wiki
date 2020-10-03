const fs = require("fs");
const path = require("path");

const SIDE_BAR_NAME = "Sidebar";
const CATEGORY_NAME_CAPITALIZATION = true;

function parseDir(filename) {
  const stats = fs.lstatSync(filename);
  const info = {};

  // check if it's a directory
  if (stats.isDirectory()) {
    // if it's `docs` directory, set it as main and first key
    if (path.basename(filename) === "docs") {
      info[SIDE_BAR_NAME] = fs.readdirSync(filename).map(function (child) {
        return parseDir(filename + "/" + child);
      });
    }
    // it's a directory inside `docs` folder
    else {
      info.type = "category";
      const catName = path.basename(filename);

      if (CATEGORY_NAME_CAPITALIZATION) {
        info.label = catName.charAt(0).toUpperCase() + catName.substring(1);
      } else {
        info.label = catName;
      }

      // sort files and directories alphabetical and files first
      const sortedFilesAndDirs = fs
        .readdirSync(filename, "utf8")
        .map((child) => {
          const path = filename + "/" + child;
          return {
            name: child,
            isDir: fs.lstatSync(path).isDirectory(),
          };
        })
        .sort((a, b) => (b.isDir - a.isDir || a.name > b.name ? 1 : -1));

      info.items = sortedFilesAndDirs.map(function (item) {
        return parseDir(filename + "/" + item.name);
      });

      // ignore `index.md` files in directories placed in `docs`
      let index = info.items.length;
      while (index--) {
        if (
          typeof info.items[index] === "string" &&
          info.items[index].includes("index")
        ) {
          info.items.splice(index, 1);
        }
      }
    }
  }
  // it's a file, so it should be path/to/file starting in `docs` directory as root
  else {
    // remove `filename.md` and `docs/`
    const tmpPath = filename.split("/");
    tmpPath.pop();
    tmpPath.splice(0, 1);
    let docPath = "";
    tmpPath.map((name) => (docPath = docPath + name + "/"));
    return docPath + path.basename(filename).replace(".md", "");
  }
  return info;
}

module.exports = parseDir("docs");
