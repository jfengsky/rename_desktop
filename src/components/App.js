"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// import { dialog } from 'electron'
var FileList_1 = require("./FileList");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.change = function (e) {
            var files = e.target.files;
            var fileList = Array.from(files);
            _this.setState({ fileList: fileList });
        };
        _this.state = {
            fileList: null
        };
        return _this;
    }
    App.prototype.render = function () {
        var fileList = this.state.fileList;
        return (React.createElement("div", null,
            React.createElement("input", { type: 'file', onChange: this.change, multiple: true }),
            React.createElement(FileList_1.default, { list: fileList })));
    };
    return App;
}(React.Component));
exports.default = App;
