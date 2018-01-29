const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
module.exports = {
	devtool:'eval-source-map',
	entry:__dirname+'/app/main.js',//唯一入口文件
	output:{
		path:__dirname + '/build/',//打包之后的存放位置
		filename:'bundle.js'//打包之后输出的文件名
	},
	devServer:{
		contentBase:"./public/",//服务器启动时加载的页面
		historyApiFallback:true,//不跳转
		inline:true,//热加载，实时刷新
		hot:true
	},
	module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
            	test: /\.css$/,
                use: [
	                    {
	                        loader: "style-loader"
	                    }, {
	                        loader: "css-loader",
	                        options: {
	                            modules: true, // 指定启用css modules
	                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
	                        }
	                    },{
	                    	loader:'postcss-loader'
	                    }
	                    
	                ]

            }
        ]
   },
   plugins:[
   		new webpack.BannerPlugin('版权所有，翻版必究'),
   		new HtmlWebpackPlugin({
   			template:__dirname + '/app/index.tmpl.html'//new 一个实例插件，并传入相关参数
   		}),
   		new webpack.HotModuleReplacementPlugin()//热加载插件
   		
   ]
	

}
