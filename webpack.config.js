const path = require('path')
module.exports = {
    entry: './src/code.js',
    devtool:"inline-source-map",
    mode: 'none',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname, 'dest')
    }
}