
# 多项目中的webpack使用技巧

假设有多个项目pro1, pro2...然后我们用当前目录里的总配置文件`/webpack/webpack.config.js`管理和控制这些项目的webpack功能（即子配置文件）。

## usage

确保全局或局部安装 webpack后，执行以下命令：

```
npm install
npm run build
```
查看各个项目已被编译的结果文件。
加入 `webpack-dev-server` 依赖包后，可以实现有用的功能。

```
npm run server # 开启本地服务
npm run watch # 监听文件编译
```

## 总配置文件

依赖包 `path`： nodejs内置模块，主要处理路径问题
依赖包`lodash`：对原生js的功能扩充，这里主要是为了用到 `_.merge()` 方法
依赖包 `glob`： 使用shell模式匹配文件，这里匹配到各个项目中的 `webpack.config.js` 文件。

```javascript
var exports = [];
glob.sync('{pro1/**,pro2/**}/webpack.config.js').forEach(function (file) {
    var dir = path.join(__dirname, path.dirname(file));
    exports = exports.concat(require('./' + file).map(function (config) {
        return _.merge({ context: dir, output: { path: dir } }, config);
    }));
});
```

## 子配置文件

当然各个项目中各种都有独立的`webpack.config.js`（不产生歧义的话，这里文件名任意命名），并且都只能有效于自身项目。

配置文件遵循 CommonJs 模块规范，不过提供出接口必须是数组类型，以便被总配置文件整合。

example: 

```javascript
module.exports = [
  {
      entry: {
          "main": "./main.js"
      },
      output: {
          filename: "./[mian]-build.js"
      }
  }
];
```
