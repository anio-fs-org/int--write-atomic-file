import {searchAndReplace, copyFile} from "vipen/processing"

const asyncToSync = {
	"export default async function": "export default function",
	"await fs_object.writeFile(": "fs_object.writeFile(",
	"await fs_object.rename(": "fs_object.rename("
}

export default {
	realm: "js",
	type: "package",

	preprocessing: [
		searchAndReplace("src/template.mjs", asyncToSync, "src/auto/sync.mjs"),
		copyFile("src/template.mjs", "src/auto/async.mjs")
	]
}
