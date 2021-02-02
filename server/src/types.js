/**
 * @typedef {Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer} BufferLike
 */

/**
 * @typedef {Object} ProcessOptions
 * @property {string} [encoding]
 * @property {shell} [boolean]
 * @property {maxBuffer} [number]
 * @property {ignoreErrors} [boolean]
 * @property {string} [cwd]
 */

/**
 * @typedef {Object} ScanDeviceFeature
 * @property {string|number} default
 * @property {string} parameters
 * @property {Array<string|number>} [options]
 * @property {Array<number>} [limits]
 * @property {number} [interval]
 */

/**
 * @typedef {Object} ScanDevice
 * @property {string} id
 * @property {string} version
 * @property {Object.<string, ScanDeviceFeature>} features
 */

 /**
 * @typedef {Object} Filter
 * @property {string} description
 * @property {string} params
 */

/**
 * @typedef {Object} Pipeline
 * @property {string} extension
 * @property {string} description
 * @property {string[]} commands
 */

/**
 * @typedef {Object} Configuration
 * @property {string} version
 * @property {number} port
 * @property {ScanDevice} devices
 * @property {string} ocrLanguage
 * @property {string} scanimage
 * @property {string} convert
 * @property {string} tesseract
 * @property {boolean} allowUnsafePaths
 * @property {string} devicesPath
 * @property {string} outputDirectory
 * @property {string} previewDirectory
 * @property {string} tempDirectory
 * @property {number} previewResolution
 * @property {Pipeline} previewPipeline
 * @property {Filter[]} filters
 * @property {Pipeline[]} pipelines
 */

/**
 * @typedef {Object} ScanRequestParameters
 * @property {string} deviceId
 * @property {number} top
 * @property {number} left
 * @property {number} width
 * @property {number} height
 * @property {number} resolution
 * @property {string} mode
 * @property {string} format
 * @property {string} [source]
 * @property {number} [brightness]
 * @property {number} [contrast]
 * @property {boolean} [dynamicLineart]
 */

/**
 * @typedef {Object} ScanRequest
 * @property {ScanRequestParameters} params
 * @property {string[]} filters
 * @property {string} pipeline
 * @property {string} batch
 * @property {number} index
 */

/**
 * @typedef {Object} ScanResponse
 * @property {string} [image]
 * @property {number} [index]
 */
