import {generateFromTemplate} from "vipen/autogenerate"

const asyncToSync = {
	"export default async function": "export default function",
	"await fs_object.writeFile(": "fs_object.writeFile(",
	"await fs_object.rename(": "fs_object.rename(",
	"await fs_object.mkdir(": "fs_object.mkdir("
}

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"sync.mjs": generateFromTemplate("src/template.mjs", asyncToSync),
		"async.mjs": generateFromTemplate("src/template.mjs", {})
	}
}
