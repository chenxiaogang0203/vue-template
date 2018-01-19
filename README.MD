##  vue模板初始化 （vue2.0 + vuex + vue-router + axios）

	  $ simple init vue

	  $ npm install --save-dev

	  $ npm run dev   //开发环境

	  $ npm run build //项目构建
### 目录结构

	│ const.js      //全局常量
	├─api			//数据请求
	├─common   		//公共资源
	│  ├─images
	│  ├─js
	│  └─scss
	├─components    //组件目录
	│  └─home       //组件资源
	│      │  index.vue
	│      │  style.scss
	│      └─images
	├─entry
	│      App.vue
	│      index.js    //index.html加载入口文件，index.js
	├─page
	│      index.html  //入口html，名称与entry目录相对应（多入口应用）
	├─router           //vue-router 路由目录
	│      index.js
	├─static          //静态资源
	├─store           //vuex 状态管理目录
	│      index.js
	└─utils           //工具类
	        index.js
	        utils.js
