export default {
	preprocessing: [{
		file: "./src/template.mjs",
		items: {
			"export default async function": "export default function",
			"await fs_object.writeFile(": "fs_object.writeFile(",
			"await fs_object.rename(": "fs_object.rename("
		},
		output: "./src/auto/sync.mjs"
	}, {
		file: "./src/template.mjs",
		items: {},
		output: "./src/auto/async.mjs"
	}]
}
