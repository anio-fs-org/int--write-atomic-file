import fs from "@anio-fs/api"

import sync_impl from "./auto/sync.mjs"
import async_impl from "./auto/async.mjs"

export async function writeAtomicFile(file_path, data, options) {
	return async_impl(fs.async, file_path, data, options)
}

export function writeAtomicFileSync(file_path, data, options) {
	return sync_impl(fs.sync, file_path, data, options)
}
