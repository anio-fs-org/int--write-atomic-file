import nodeFsWriteAtomicFile from "../src/index.mjs"

console.log(
	await nodeFsWriteAtomicFile("/tmp/test", "data")
)

console.log(
	nodeFsWriteAtomicFile.sync("/tmp/test", "data")
)
