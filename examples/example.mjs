import {writeAtomicFile, writeAtomicFileSync} from "../src/index.mjs"

console.log(
	await writeAtomicFile("/tmp/test", "data")
)

console.log(
	writeAtomicFileSync("/tmp/test", "data")
)
