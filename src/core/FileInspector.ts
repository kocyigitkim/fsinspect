import fs from 'fs';
import YAML from 'yaml';
import { FileContentInspector } from "./FileContentInspector";
import deepEqual from 'deep-equal';
import clone from 'clone';

export class FileInspector {
    private content: string;
    public data: any;
    private loadData: any;
    constructor(public path: string, public parser: FileContentInspector) { }
    public load() {
        this.content = fs.readFileSync(this.path, 'utf8');
        this.parse();
    }
    private parse() {
        switch (this.parser) {
            case 'json':
                this.data = JSON.parse(this.content);
                break;
            case 'yaml':
                this.data = YAML.parse(this.content);
                break;
            case 'text':
                this.data = this.content;
                break;
        }
        this.loadData = clone(this.data);
    }
    hasChanged() {
        return !deepEqual(this.data, this.loadData);
    }
    public sync() {
        if (this.hasChanged()) {
            switch (this.parser) {
                case 'json':
                    this.content = JSON.stringify(this.data);
                    break;
                case 'yaml':
                    this.content = YAML.stringify(this.data);
                    break;
                case 'text':
                    this.content = this.data;
                    break;
            }
            fs.writeFileSync(this.path, this.content, { encoding: 'utf8' });
        }
    }
}
