import path from "path";
import fs from 'fs'
import { FileContentInspector } from "./FileContentInspector";
import { FileInspector } from "./FileInspector";

export class FolderInspector {
    constructor(public path: string) {
    }
    inspect(subPath: string, parser: FileContentInspector): FileInspector {
        return new FileInspector(path.join(this.path, subPath), parser);
    }
    parent(): FolderInspector {
        return new FolderInspector(path.dirname(this.path));
    }
    child(subPath: string): FolderInspector {
        return new FolderInspector(path.join(this.path, subPath));
    }
    has() {
        return fs.readdirSync(this.path).length > 0;
    }
    list(): string[] {
        return fs.readdirSync(this.path, { withFileTypes: true }).map(dirent => dirent.name);
    }
}