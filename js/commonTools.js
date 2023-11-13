const consoleConfirm = (info,color) => {
    console.log(`${color}%c${info}\u001b[0m`, `font-weight:bold;`)
}
module.exports = {
    consoleConfirm
}