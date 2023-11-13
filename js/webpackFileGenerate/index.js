const fs = require("fs")
const {infoStatus, supportFileName} = require("../commonInfo")
const {consoleConfirm} = require("../commonTools")
/**
 *
 * @param webpackConfig Object对象类型,接受一个对象
 *  {
        entryPath,
        outputPath,
        outputFileName,
        generatePath
    }
 * @return {string}
 */
const contentTemplate = (webpackConfig) => {
    return `const path = require("path")
module.exports = {
    entry: ${webpackConfig["entryPath"]},
    output: {
        filename: ${webpackConfig["outputFileName"]},
        path: ${webpackConfig["outputPath"]}
        //if you input a relative path,you can use it.
        // path: path.join(__dirname, ${webpackConfig["outputPath"]})
    },
    mode:"none",
    module:{
        rules:[]
    },
    plugins:[]
}
`
}
/**
 * 处理传入数据并将其写入文件
 * @param data 传入的数组,用于获取数据
 */
const generateTemplateForWebPack = (data) => {
    if (data.length <= 0) {
        consoleConfirm("Exception:generate failure cause by data length.", infoStatus.ERROR)
        return
    }
    let template = contentTemplate({
        entryPath: data[0],
        outputPath: data[1],
        outputFileName: data[2]
    })
    let generatePath = data[3]
    //判断generatePath是否是/结尾,不是就补上
    generatePath = generatePath[generatePath.length - 1] !== "/"
        ? generatePath + "/"
        : generatePath
    writeToFile(generatePath + supportFileName.webpack, template)
}
/***
 * 将数据写入文件的函数
 * @param filename  文件
 * @param content   写入文件的内容
 */
const writeToFile = (filename, content) => {
    fs.writeFileSync(filename, content)
}
module.exports = {generateTemplateForWebPack}