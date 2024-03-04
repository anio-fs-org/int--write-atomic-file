# @anio-node-foundation/fs-write-atomic-file

Atomically write a file.

```js
import nodeFsWriteAtomicFile from "@anio-node-foundation/fs-write-atomic-file"

console.log(
	await nodeFsWriteAtomicFile("/tmp/test", "data")
)

console.log(
	nodeFsWriteAtomicFile.sync("/tmp/test", "data")
)
```
