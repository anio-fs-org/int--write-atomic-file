# @anio-fs/int--write-atomic-file

Atomically write a file.

```js
import {writeAtomicFile, writeAtomicFileSync} from "@anio-fs/int--write-atomic-file"

console.log(
	await writeAtomicFile("/tmp/test", "data")
)

console.log(
	writeAtomicFileSync("/tmp/test", "data")
)
```
