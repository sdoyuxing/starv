const markdownIt = require("markdown-it")
const highlight = require("highlight.js")
const loaderUtils = require("loader-utils")
const Token = require("markdown-it/lib/token")
const cheerio = require("cheerio");
let demoCach = []
let styleList = []
let script = ""

function analysisDemo(markdown) {
    demoCach = []
    styleList = []
    script = ""
    markdown.trim().replace(/:::demo([^.]*).(((?!:::)[^&])*):::/g, function (a, b, c) {
        let html = c.replace("```html", "").replace("```", "").replace("<template>", "").replace("</template>", "")
        html = html.replace(/<style>([^<]*)<\/style>/g, function (a, b) {
            styleList.push(b)
            return ""
        })
        html = html.replace(/<script>([^<]*)<\/script>/g, "")
        const md = markdownIt()
        b = md.render(b)
        demoCach.push(`<api-item>${b}<div slot="source">${html}</div><div  class="html hljs xml" slot="highlight"></div></api-item>`)
        return a
    })
    return markdown.trim().replace(/:::script(((?!:::)[^#])*):::/g, function (a, b, c) {
        script = b
        return ""
    })
}

function renderVueTemplate(html) {
    var $ = cheerio.load(html, {
        decodeEntities: false,
        lowerCaseAttributeNames: false,
        lowerCaseTags: false,
        xmlMode: true
    });
    let index = 0;
    let style = $("<style></style>")
    $("p").each((i, o) => {
        o = $(o)
        if (o.text().includes(":::demo")) {
            let code = o.next()
            let item = $(demoCach[index])
            let end = code.next()
            if (code[0].name === "pre") {
                item.find("div[slot='highlight']").append(code)
            }
            o.replaceWith(item)
            if (end.text() === ":::") {
                end.remove()
            }
            index++
        }

    })
    styleList.forEach(o => {
        style.append(o)
    })
    result = `<template><div>` + $.html() + `</div></template>\n`
    // result += script.html() + "\n" + style.html()
    result += `${script}
<style>${style.html()}</style>`
    return result
}

module.exports = function (markdown) {
    this.cacheable();
    const options = loaderUtils.getOptions(this);
    const md = markdownIt("default", {
        highlight: function (str, lang) {
            return lang && highlight.getLanguage(lang) ? highlight.highlight(lang, str, true).value : ""
        },
        html: true,
        ...options
    });
    markdown = analysisDemo(markdown)
    return renderVueTemplate(md.render(markdown));
}