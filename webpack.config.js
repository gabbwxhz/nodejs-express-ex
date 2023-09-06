const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin') // plugins sempre com letra mauiscula no inicio
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/index.jsx', // entrada principal
    target: 'node', // versao do node
    mode: 'development', // aonde vai ser rodado 
    output: { // saida
        filename: 'index.js', // nome
        path: path.resolve(__dirname, 'dist') // aonde a saida vai ficar
    },
    resolve: { // que extensoes o webpack vai trabalhar
        extensions: ['.js']
    },
    plugins: [ // plugins utilizados no projeto
        new NodemonPlugin(),
    ],
    externals: [
        nodeExternals()
    ]
}