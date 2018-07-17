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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var files_1 = require("../util/files");
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
        _this.changeNewName = function (e) {
            var newName = _this.refs.newName.value;
            console.log(newName);
        };
        _this.changeName = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var file, newName, path, name, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.props.list[0];
                        newName = this.refs.newName.value;
                        path = file.path, name = file.name;
                        return [4 /*yield*/, files_1.rename({ path: path, name: name, newName: newName })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    FileList.prototype.render = function () {
        var list = this.props.list;
        return (React.createElement("div", null,
            React.createElement("input", { type: 'text', ref: 'newName', onChange: this.changeNewName }),
            React.createElement("button", { onClick: this.changeName }, "\u6539\u540D"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("b", null, "\u6587\u4EF6\u540D"),
                    React.createElement("em", null, "\u5927\u5C0F")),
                !!list && list.map(function (item, index) { return React.createElement(FileItem, { key: index, data: item }); }))));
    };
    return FileList;
}(React.Component));
exports.default = FileList;
