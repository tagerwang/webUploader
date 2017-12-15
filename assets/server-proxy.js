var proxy = {
    //anyinUrl: 'http://183.62.140.54',
    test: 'http://10.9.33.111:8080',
    anyinUrl:"http://218.17.157.119:3380",
    // anyinUrl:'http://192.168.1.159:9500',
    lsq2: 'http://10.9.33.115:8080',
    unyl:"https://gateway.95516.com",
    dev:"http://192.168.1.237:1002"
}
var config = {
    dev: {
        historyApiFallback: true,
        stats: { colors: true },
        hot: true,
        inline: true,
        progress: true,
        disableHostCheck:true,
        //contentBase:"./app/page/index",
        proxy: {
             '/api-esign-url':{
            	target: proxy.dev, //pathRewrite: {'^/column' : '/column'},            	
                secure: false,
                changeOrigin: true
             },
             '/gateway': {
            	target: proxy.unyl, //pathRewrite: {'^/column' : '/column'},            	
                secure: false,
                changeOrigin: true
            },        	       	
            '/mp': {
            	target: proxy.anyinUrl, //pathRewrite: {'^/column' : '/column'},            	
	           //  target: proxy.anyinUrl, //pathRewrite: {'^/column' : '/column'},
                secure: false,
                changeOrigin: true
            },
            '/mps': {
                target: proxy.anyinUrl, //pathRewrite: {'^/column' : '/column'},
                secure: false,
                changeOrigin: true
            },
            '/common': {
                target: proxy.test, //pathRewrite: {'^/column' : '/column'},
                secure: false,
                changeOrigin: true
            },
            '/sys': {
                target: proxy.anyinUrl, //pathRewrite: {'^/column' : '/column'},
                secure: false,
                changeOrigin: true
            }
        }
    },
    port: '20086' 

}
module.exports = config;