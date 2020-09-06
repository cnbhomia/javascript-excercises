const snakeCase = function(toSnake) {

    toSnake = toSnake.replace(/[^A-Z0-9]/ig, "_").toLowerCase()

}

module.exports = snakeCase
