const path = require('path');
const htmlWebpackPlugin = require('html-webapck-plugin');

module.exports ={
    entry:{path:path.join(__dirname,'./src/main.js')},
    output:{
        path:path.join(__dirname,'/dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ]
}