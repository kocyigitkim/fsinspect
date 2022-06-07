import { FileContentInspector } from "./FileContentInspector";
export declare class FileInspector {
    path: string;
    parser: FileContentInspector;
    private content;
    data: any;
    private loadData;
    constructor(path: string, parser: FileContentInspector);
    load(): void;
    private parse;
    hasChanged(): boolean;
    sync(): void;
}
//# sourceMappingURL=FileInspector.d.ts.map