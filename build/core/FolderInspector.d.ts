import { FileContentInspector } from "./FileContentInspector";
import { FileInspector } from "./FileInspector";
export declare class FolderInspector {
    path: string;
    constructor(path: string);
    inspect(subPath: string, parser: FileContentInspector): FileInspector;
    parent(): FolderInspector;
    child(subPath: string): FolderInspector;
    has(): boolean;
    list(): string[];
}
//# sourceMappingURL=FolderInspector.d.ts.map