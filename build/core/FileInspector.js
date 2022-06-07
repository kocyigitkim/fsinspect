"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileInspector = void 0;
const fs_1 = __importDefault(require("fs"));
const yaml_1 = __importDefault(require("yaml"));
const deep_equal_1 = __importDefault(require("deep-equal"));
const clone_1 = __importDefault(require("clone"));
class FileInspector {
    constructor(path, parser) {
        this.path = path;
        this.parser = parser;
    }
    load() {
        this.content = fs_1.default.readFileSync(this.path, 'utf8');
        this.parse();
    }
    parse() {
        switch (this.parser) {
            case 'json':
                this.data = JSON.parse(this.content);
                break;
            case 'yaml':
                this.data = yaml_1.default.parse(this.content);
                break;
            case 'text':
                this.data = this.content;
                break;
        }
        this.loadData = (0, clone_1.default)(this.data);
    }
    hasChanged() {
        return !(0, deep_equal_1.default)(this.data, this.loadData);
    }
    sync() {
        if (this.hasChanged()) {
            switch (this.parser) {
                case 'json':
                    this.content = JSON.stringify(this.data);
                    break;
                case 'yaml':
                    this.content = yaml_1.default.stringify(this.data);
                    break;
                case 'text':
                    this.content = this.data;
                    break;
            }
            fs_1.default.writeFileSync(this.path, this.content, { encoding: 'utf8' });
        }
    }
}
exports.FileInspector = FileInspector;
//# sourceMappingURL=FileInspector.js.map