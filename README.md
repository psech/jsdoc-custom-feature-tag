# JSDoc Custom Feature Tag

This project demonstrates how to add and use a custom `@feature` tag in JSDoc documentation. It works with JavaScript and TypeScript thanks to `better-docs`.

## Content
- Plugin `plugins/custom-tags.js`
  - Plugin definition `exports.defineTags`
  - Handler - injects feature doclet at the bottom of a section
- Template - `templates/feature-tag-template.html` shapes the look of features
- Config `jsdoc-conf.json`

## Run
Generate HTML documentation in `./out`
```
npx jsdoc -c jsdoc-conf.json
```
<br /><br />
Generate `JSON` output
```
npx jsdoc -c jsdoc-conf.json --explain > assets/explain.json
```
It generated detailed output
> Dump all found doclet internals to console and quit.

It can be further parsed to extract relevant info, like function names
```javascript
const functionNames = jsdocExplain.flatMap((item) =>
  item.kind === "function" ? item.name : []
)

console.log(functionNames);
```
Output
```bash
➤ node assets/explain.js
[ 'NameJs', 'importantFunction', 'createUser' ]
```
