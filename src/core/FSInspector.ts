import { FolderInspector } from "./FolderInspector";
import { FileContentInspector } from "./FileContentInspector";
import { FileInspector } from "./FileInspector";
export class FSInspector {
    public static inspectFolder(path: string): FolderInspector {
        return new FolderInspector(path);
    }
    public static inspectFile(path: string, parser: FileContentInspector = 'json'): FileInspector {
        return new FileInspector(path, parser);
    }
}

