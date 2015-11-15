
//-----------------------------------------------
// 整合各个项目的webpack.config.js

var _ = require("lodash");
var glob = require("glob");
var path = require("path");
var exports = [];

glob.sync('{pro1/**,pro2/**}/webpack.config.js').forEach(function (file) {
    var dir = path.join(__dirname, path.dirname(file));
    exports = exports.concat(require('./' + file).map(function (config) {
        return _.merge({ context: dir, output: { path: dir } }, config);
    }));
});

module.exports = exports;

