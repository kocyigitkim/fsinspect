"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderInspector = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const FileInspector_1 = require("./FileInspector");
class FolderInspector {
    constructor(path) {
        this.path = path;
    }
    inspect(subPath, parser) {
        return new FileInspector_1.FileInspector(path_1.default.join(this.path, subPath), parser);
    }
    parent() {
        return new FolderInspector(path_1.default.dirname(this.path));
    }
    child(subPath) {
        return new FolderInspector(path_1.default.join(this.path, subPath));
    }
    has() {
        return fs_1.default.readdirSync(this.path).length > 0;
    }
    list() {
        return fs_1.default.readdirSync(this.path, { withFileTypes: true }).map(dirent => dirent.name);
    }
}
exports.FolderInspector = FolderInspector;
//# sourceMappingURL=FolderInspector.js.map