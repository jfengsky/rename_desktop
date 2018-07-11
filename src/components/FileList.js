"use strict";
/**
 * 文件列表
 */
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
var FileItem = function (_a) {
    var data = _a.data;
    var name = data.name, size = data.size;
    return (React.createElement("li", null,
        React.createElement("b", null, name),
        React.createElement("em", null, size)));
};
var FileList = /** @class */ (function (_super) {
    __extends(FileList, _super);
    function FileList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeName = function (e) {
            _this;
            debugger;
        };
        return _this;
    }
    FileList.prototype.render = function () {
        var list = this.props.list;
        return (React.createElement("div", null,
            React.createElement("input", { type: 'text' }),
            React.createElement("button", { onClick: this.changeName }, "\u6539\u540D"),
            React.createElement("ul", null, !!list && list.map(function (item, index) { return React.createElement(FileItem, { key: index, data: item }); }))));
    };
    return FileList;
}(React.Component));
exports.default = FileList;
