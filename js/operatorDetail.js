let installTemplate = `npm install `
let initTemplate = `npm init`
let webpackOperator = {
    webpack: [`${initTemplate} `, `${installTemplate} webpack`],
    css: `${installTemplate} css-loader style-loader`,
    file: `${installTemplate} file-loader`,
}
module.exports = {
    webpackOperator,
}