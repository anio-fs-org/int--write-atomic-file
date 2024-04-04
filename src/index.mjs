import fs from "@anio-fs/api"

import sync_impl from "./auto/sync.mjs"
import async_impl from "./auto/async.mjs"

async function nodeFsWriteAtomicFile(file_path, data, {
	create_parents = false
} = {}) {
	return await async_impl(fs.async, file_path, data, {create_parents})
}

nodeFsWriteAtomicFile.sync = function(file_path, data, {
	create_parents = false
} = {}) {
	return sync_impl(fs.sync, file_path, data, {create_parents})
}

export default nodeFsWriteAtomicFile
