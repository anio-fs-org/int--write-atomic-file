declare type WriteAtomicFileOptions = {
	/**
	 * @brief Create parent directories.
	 * @description
	 * Whether to create non-existing directories in the path.
	 * The default is `false`.
	 */
	create_parents : boolean;
};

/**
 * @brief Asynchronously and atomically create a file
 * @description
 * Asynchronously creates the file at `file_path` with `data` written to it.
 * If `options.create_parents` is set, directories in the path will be created
 * if they don't exist.
 * @param file_path File path to be written.
 * @param data Data to be written.
 * @param options Optional options.
 * @return
 * Returns the number of bytes written.
 */
export function writeAtomicFile(
	file_path : string, data : string | Buffer, options? : WriteAtomicFileOptions
) : Promise<number>

/**
 * @brief Synchronously and atomically create a file
 * @description
 * Synchronously creates the file at `file_path` with `data` written to it.
 * If `options.create_parents` is set, directories in the path will be created
 * if they don't exist.
 * @param file_path File path to be written.
 * @param data Data to be written.
 * @param options Optional options.
 * @return
 * Returns the number of bytes written.
 */
export function writeAtomicFileSync(
	file_path : string, data : string | Buffer, options? : WriteAtomicFileOptions
) : number
