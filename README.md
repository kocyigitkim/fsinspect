
# fs-inspector

Inspect configuration files in your workplace easily.

  

### Installation

  

```bash
npm install fs-inspector
```

### Usage

##### 1. Inspect Folder

```ts
import fsinspector from 'fs-inspector'

// inspect a folder
const exampleFolder = fsinspector.inspectFolder('./example');
// inspect to package.json
const packageJson = exampleFolder.inspect('package.json');
// set project name
packageJson.data.name = 'hello-world';
// sync all changes
packageJson.sync();
```

##### 2. Inspect File
```ts
import fsinspector from 'fs-inspector'

// inspect to package.json
const packageJson = fsinspector.inspectFile('package.json');
// set project name
packageJson.data.name = 'hello-world';
// sync all changes
packageJson.sync();
```