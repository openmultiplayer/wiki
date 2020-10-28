import markdown from "remark-parse";
import html from "remark-html";
import admonitions from "remark-admonitions";
import parseHtml from "html-react-parser";
import unified from "unified";

export default () => {
  let result = unified()
    .use(markdown)
    .use(admonitions, {})
    .use(html)
    .processSync(`:::tip \n\nThis callback can also be called by NPC.\n\n:::`);
  return parseHtml(result.contents);
};
