/**
 * 公共类
 * @type {{author: string, description: string, version: string}}
 */
let commonInfo = {
    version: "1.0.0",
    author: "cc",
    description: "generate some dependencies or some templates quickly",
}
/***
 * 提示的状态值
 * @type {{SUCCESS: string, ERROR: string, INFO: string}}
 */
let infoStatus = {
    ERROR: "\u001b[31m",
    SUCCESS: "\u001b[32m",
    INFO: "\u001b[36m"
}
/***
 * 支持的文件生成选项
 * @type {{webpack: string}}
 */
let supportFileName = {
    webpack: "webpack.config.js"
}

module.exports = {
    commonInfo,
    infoStatus,
    supportFileName
}