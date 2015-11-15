
# 脚手架 scaffold

## overview

基于目前开发过程的基础积累，这里给出一种全端项目中的目录组织结构，一些简便的构建任务，以及其他相关的规范。

该脚手架的目的是在于期望能够快速搭建和部署一般的web站点。

## webpack

```
npm install # 初始化安装依赖包
```

见后面文对 package.json 文件的简介。

声明在package.json文件里的scripts一般字段和命令的解释：

```
npm run watch # 监听文件
npm run server # 开启本地server，设置端口80，URL： http://localhost
npm run build # 手动开发环境编译一次
NODE_ENV=production npm run build # 在当前控制台里设置变量NODE_ENV为production，开启发布环境编译
```

webpack的基本配置见 `webpack.config.js`文件，以及webpack官方文档。

- 通过加载器loader可以实现require不同类型的文件，见[webpack - loaders](http://webpack.github.io/docs/using-loaders.html)

至于对多个项目的管理，webpack也能轻松搞定，见 **multi-webpack** 分支的目录 `multi-webpack`


## package.json

	npm install

以上命令会根据package.json两个字段直接安装依赖包。

* dependencies 字段 包含server端依赖的包: `npm install --save <packagename@version>`

	常用到dependencies依赖包有：

	- [express](http://expressjs.com/): web framework for nodejs
	- [EJS](http://www.embeddedjs.com/): template
	- [mongoose](http://mongoosejs.com/): elegant mongodb object modeling for node.js

* devDependencies 字段包含本地构建的依赖包: `npm install --save-dev <packagename@version>`

	常用到dependencies依赖包有：

	- [gulp](http://gulpjs.com/): Automate and enhance your workflow
	- [webpack](http://webpack.github.io/): module bundler


如果依赖包已被全局安装，可以通过 `npm link <packagename>` 命令关联到本地。

* 升级依赖包： `npm update --save <packagename>` 或 `npm update --save-dev <packagename>`
* 卸载依赖包： `npm uninstall --save <packagename>` 或 `npm uninstall --save-dev <packagename>`

package.json 文件里的scripts字段可以通过`npm run-script` （可简写为 `npm run`）执行所声明的命令。



command | alias
:------- | :---- 
npm install | npm i 
npm uninstall | npm un 
npm i --save | npm i -S 
npm i --save-dev | npm i -D 
npm link | npm ln |
npm run-script | npm run 


## bower.json

dependencies 字段包含custom端依赖的包，即浏览器加载的依赖包，被放置在 `./app/bower_components/` 目录中。

	bower install --save <packagename@version>

常用到的依赖包：

- [normalize.css](https://necolas.github.io/normalize.css/): A modern, HTML5-ready alternative to CSS resets
- [underscore](http://underscorejs.org/) 或 [lodash](https://lodash.com/): A JavaScript utility library delivering consistency, modularity, performance, & extras.
- [moment](http://momentjs.com/): Parse, validate, manipulate, and display dates in JavaScript.
- [angularjs](https://angularjs.org/): HTML enhanced for web apps!

