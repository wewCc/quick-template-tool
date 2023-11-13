/**
 * 用于快速输出信息的函数
 * @param info 信息
 * @param color 颜色
 */
const consoleConfirm = (info, color) => {
    console.log(`${color}%c${info}\u001b[0m`, `font-weight:bold;`)
}
module.exports = {
    consoleConfirm
}