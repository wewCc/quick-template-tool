const {exec} = require("child_process")
const {webpackOperator,validArg} = require("./operatorDetail")
const {consoleConfirm} = require("./commonTools")
const {infoStatus}=require("./commonInfo")
let switchToolName = null
/**
 *
 * @param toolName switch Tool Name[cnpm,npm]
 * @param down the argument for download
 */
const switchTools = async (toolName, down) => {
    checkExistsPackage(toolName, down)
}
const checkExistsPackage = (toolName, down) => {
    exec(`npm list ${toolName} -g`, (error, stdout) => {
        if (error) {
            consoleConfirm(toolName + "not existed!!", infoStatus.ERROR)
            return;
        }
        consoleConfirm("switch to cnpm", infoStatus.INFO)
        switchToolName = toolName
        if (switchToolName != null) {
            downloadWebpackLoader(down)
        }
    })
}
/***
 *
 * @param downloadSource To get the download json array(传入下载选项的json数组)
 * @return {Promise<void>} 无返回值
 */
const downloadWebpackLoader = (downloadSource) => {
    let args = downloadSource["download"]?.split(",")
    args?.filter(item => {
        if (validArg.indexOf(item) === -1) {
            consoleConfirm(`invalid arg for -d:  ${item}`, infoStatus.ERROR)
            return false
        }
        return validArg.indexOf(item) !== -1
    }).map(index => {
        matchEvent(index)
    })
}

/***
 *
 * @param eventName  the name for operate arguments(需要操作的选项名称)
 */
const matchEvent = (eventName) => {
    let webpackOperatorElement = webpackOperator[eventName]
    if (typeof webpackOperatorElement === "string") {
        Promise.all([execFunc(webpackOperatorElement, eventName)]).then(res => {
            consoleConfirm(eventName+"download Start!", infoStatus.INFO)
        })
    } else if (typeof webpackOperatorElement === "object") {
        let eventBuckets = []
        if (Array.isArray(webpackOperatorElement)) {
            webpackOperatorElement.forEach(command => {
                eventBuckets.push(execFunc(command, eventName))
            })
            Promise.all(eventBuckets).then(res => {
                consoleConfirm(eventName+"download Start!", infoStatus.INFO)
            })
        }
    }
}
/***
 *
 * @param command  exec command.such as `npm install... `(需要操作的命令)
 * @param name     the name for download source(需要下载的资源名称)
 * @return void
 */
const execFunc = (command, name) => {
    exec(command, (error, stdout) => {
        if (error) {
            consoleConfirm(`Exception:${name} download Failed.Caused by ${error}`, infoStatus.ERROR)
            return;
        }
        consoleConfirm(`${name} download Success!`, infoStatus.SUCCESS)
    })
}

module.exports = {
    switchTools,
    downloadWebpackLoader
}