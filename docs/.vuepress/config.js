module.exports = {
    markdown: {
        config: md => {
            md.use(require("markdown-it-katex"))
        }
    }
};