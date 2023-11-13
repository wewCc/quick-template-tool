/**
 * 用于下载的枚举
 * @type {string}
 */
let installTemplate = `npm install `
let initTemplate = `npm init`
//you can update there to add new validArg and dependencies
//添加这里可以拓展可下载的快速选项
let validArg = ["webpack", "css", "file"]

let webpackOperator = {
    webpack: [`${initTemplate} `, `${installTemplate} webpack`],
    css: `${installTemplate} css-loader style-loader`,
    file: `${installTemplate} file-loader`,
}
module.exports = {
    webpackOperator,
    validArg
}