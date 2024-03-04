import createFSObject from "@anio-node-foundation/fs-api"

import sync_impl from "./auto/sync.mjs"
import async_impl from "./auto/async.mjs"

const async_fs = createFSObject({sync: false})
const sync_fs = createFSObject({sync: true})

async function nodeFsWriteAtomicFile(file_path, data) {
	return await async_impl(async_fs, file_path, data)
}

nodeFsWriteAtomicFile.sync = function(file_path, data) {
	return sync_impl(sync_fs, file_path, data)
}

export default nodeFsWriteAtomicFile
