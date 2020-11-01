module.exports = {
    mode:'development', //development,production
    module:{
        rules: [
             {test:/\.js|jsx$/,use: 'babel-loader', exclude:/node_modules/},
            {
                test:/\.css$/,
                use:[{loader:'style-loader'},
                     {loader:'css-loader',
                      options:{
                          modules:{
                              localIdentName:'[path][name]_[local]--[hash:base64:5]'
                             }
                         }
                     }
                    ]
            },
            {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'}
        ]
    }
}