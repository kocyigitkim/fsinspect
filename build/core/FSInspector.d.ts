import { FolderInspector } from "./FolderInspector";
import { FileContentInspector } from "./FileContentInspector";
import { FileInspector } from "./FileInspector";
export declare class FSInspector {
    static inspectFolder(path: string): FolderInspector;
    static inspectFile(path: string, parser?: FileContentInspector): FileInspector;
}
//# sourceMappingURL=FSInspector.d.ts.map