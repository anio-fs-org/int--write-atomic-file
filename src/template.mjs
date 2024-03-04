import path from "node:path"
import createRandomIdentifier from "@anio-js-foundation/create-random-identifier"

export default async function(fs_object, file_path, data) {
	const random_str = createRandomIdentifier(16)

	const parent_dir = path.dirname(file_path)
	const file_name = path.basename(file_path)
	const tmp_name = file_name + `.tmp${random_str}`
	const tmp_path = path.join(parent_dir, tmp_name)

	await fs_object.writeFile(tmp_path, data)
	await fs_object.rename(tmp_path, file_path)

	return data.length
}
