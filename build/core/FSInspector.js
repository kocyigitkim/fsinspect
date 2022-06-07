"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FSInspector = void 0;
const FolderInspector_1 = require("./FolderInspector");
const FileInspector_1 = require("./FileInspector");
class FSInspector {
    static inspectFolder(path) {
        return new FolderInspector_1.FolderInspector(path);
    }
    static inspectFile(path, parser = 'json') {
        return new FileInspector_1.FileInspector(path, parser);
    }
}
exports.FSInspector = FSInspector;
//# sourceMappingURL=FSInspector.js.map