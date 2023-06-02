const httpStatusCodes = {
  reason: (code) => reasonCodes[code] || "No description",

  HTTP_OK: 200,
  HTTP_CREATED: 201,
  HTTP_ACCEPTED: 202,
  HTTP_NON_AUTHORITATIVE_INFO: 203,
  HTTP_NO_CONTENT: 204,
  HTTP_RESET_CONTENT: 205,
  HTTP_PARTIAL_CONTENT: 206,
  HTTP_MULTI_STATUS: 207,
  HTTP_ALREADY_REPORTED: 208,

  HTTP_MULTIPLE_CHOICES: 300,
  HTTP_MOVED_PERMANENTLY: 301,
  HTTP_FOUND: 302,
  HTTP_SEE_OTHER: 303,
  HTTP_NOT_MODIFIED: 304,
  HTTP_USE_PROXY: 305,
  HTTP_SWITCH_PROXY: 306,
  HTTP_TEMPORARY_REDIRECT: 307,
  HTTP_PERMANENT_REDIRECT: 308,

  HTTP_BAD_REQUEST: 400,
  HTTP_UNAUTHORIZED: 401,
  HTTP_PAYMENT_REQUIRED: 402,
  HTTP_FORBIDDEN: 403,
  HTTP_NOT_FOUND: 404,
  HTTP_NOT_ALLOWED: 405,
  HTTP_NOT_ACCEPTABLE: 406,
  HTTP_PROXY_AUTH_REQUIRED: 407,
  HTTP_REQUEST_TIMEOUT: 408,
  HTTP_CONFLICT: 409,
  HTTP_GONE: 410,
  HTTP_LENGTH_REQUIRED: 411,
  HTTP_PRECONDITION_FAILED: 412,
  HTTP_REQUEST_ENTITY_TOO_LARGE: 413,
  HTTP_REQUEST_URI_TOO_LARGE: 414,
  HTTP_UNSUPPORTED_MEDIA_TYPE: 415,
  HTTP_REQUEST_RANGE_NOT_SATISFIABLE: 416,
  HTTP_EXPECTATION_FAILED: 417,
  HTTP_IM_A_TEAPOT: 418,
  HTTP_MISDIRECTED_REQUEST: 421,
  HTTP_UNPROCESSABLE_ENTITY: 422,
  HTTP_LOCKED: 423,
  HTTP_FAILED_DEPENDENCY: 424,
  HTTP_UNASSIGNED: 425,
  HTTP_UPGRADE_REQUIRED: 426,
  HTTP_PRECONDITION_REQUIRED: 428,
  HTTP_TOO_MANY_REQUEST: 429,
  HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE: 413,
  HTTP_UNAVAILABLE_FOR_LEGAL_REASONS: 451,

  HTTP_INTERNAL_SERVER_ERROR: 500,
  HTTP_NOT_IMPLEMENTED: 501,
  HTTP_BAD_GATEWAY: 502,
  HTTP_SERVICE_UNAVAILABLE: 503,
  HTTP_GATEWAY_TIMEOUT: 504,
  HTTP_HTTP_VERSION_NOT_SUPPORTED: 505,
  HTTP_VARIANT_ALSO_NEGOTIATES: 506,
  HTTP_INSUFFICIENT_STORAGE: 507,
  HTTP_LOOP_DETECTED: 508,
  HTTP_BANDWIDTH_LIMIT_EXCEEDED: 509,
  HTTP_NOT_EXTENDED: 510,
  HTTP_NETWORK_AUTHENTICATION_REQUIRED: 511,
  HTTP_NOT_UPDATED: 512,
};

const reasonCodes = {
  [httpStatusCodes.HTTP_OK]: "Request ok",
  [httpStatusCodes.HTTP_CREATED]: "Resource created",
  [httpStatusCodes.HTTP_ACCEPTED]: "Request accepted",
  [httpStatusCodes.HTTP_NON_AUTHORITATIVE_INFO]: "Modified response",
  [httpStatusCodes.HTTP_NO_CONTENT]: "No content",
  [httpStatusCodes.HTTP_RESET_CONTENT]: "Reset content",
  [httpStatusCodes.HTTP_PARTIAL_CONTENT]: "Partial Content",
  [httpStatusCodes.HTTP_MULTI_STATUS]: "Multiple statuses",
  [httpStatusCodes.HTTP_ALREADY_REPORTED]: "Already reported",

  [httpStatusCodes.HTTP_MULTIPLE_CHOICES]: "Multiple choices",
  [httpStatusCodes.HTTP_MOVED_PERMANENTLY]: "Moved permanently",
  [httpStatusCodes.HTTP_FOUND]: "Found",
  [httpStatusCodes.HTTP_SEE_OTHER]: "See other URI",
  [httpStatusCodes.HTTP_NOT_MODIFIED]: "Resource not modified",
  [httpStatusCodes.HTTP_USE_PROXY]: "Use a proxy",
  [httpStatusCodes.HTTP_SWITCH_PROXY]: "Subsequent request should use the specified proxy",
  [httpStatusCodes.HTTP_TEMPORARY_REDIRECT]: "Moved temporarily",
  [httpStatusCodes.HTTP_PERMANENT_REDIRECT]: "Permant redirect",

  [httpStatusCodes.HTTP_BAD_REQUEST]: "Bad request",
  [httpStatusCodes.HTTP_UNAUTHORIZED]: "Unauthorized error",
  [httpStatusCodes.HTTP_PAYMENT_REQUIRED]: "Payment required",
  [httpStatusCodes.HTTP_FORBIDDEN]: "Forbidden error",
  [httpStatusCodes.HTTP_NOT_FOUND]: "Resource not found",
  [httpStatusCodes.HTTP_NOT_ALLOWED]: "Method not allowed",
  [httpStatusCodes.HTTP_NOT_ACCEPTABLE]: "Not acceptable content",
  [httpStatusCodes.HTTP_PROXY_AUTH_REQUIRED]: "Proxy authentication required",
  [httpStatusCodes.HTTP_REQUEST_TIMEOUT]: "Client request timeout",
  [httpStatusCodes.HTTP_CONFLICT]: "Resource state conflict",
  [httpStatusCodes.HTTP_GONE]: "Resource not longer available",
  [httpStatusCodes.HTTP_LENGTH_REQUIRED]: "Request content lenght required",
  [httpStatusCodes.HTTP_PRECONDITION_FAILED]: "Header precondition failed",
  [httpStatusCodes.HTTP_REQUEST_ENTITY_TOO_LARGE]: "Payload too large",
  [httpStatusCodes.HTTP_REQUEST_URI_TOO_LARGE]: "Request URI too long",
  [httpStatusCodes.HTTP_UNSUPPORTED_MEDIA_TYPE]: "Unsupported requested media type",
  [httpStatusCodes.HTTP_REQUEST_RANGE_NOT_SATISFIABLE]: "Range not satisfiable",
  [httpStatusCodes.HTTP_EXPECTATION_FAILED]: "Cannot meet request Expect header ",
  [httpStatusCodes.HTTP_IM_A_TEAPOT]: "I'm a teapot",
  [httpStatusCodes.HTTP_MISDIRECTED_REQUEST]: "Misdirected request",
  [httpStatusCodes.HTTP_UNPROCESSABLE_ENTITY]: "Unprocessable entitity",
  [httpStatusCodes.HTTP_LOCKED]: "Resource locked",
  [httpStatusCodes.HTTP_FAILED_DEPENDENCY]: "Failed dependency",
  [httpStatusCodes.HTTP_UNASSIGNED]: "Too early",
  [httpStatusCodes.HTTP_UPGRADE_REQUIRED]: "Client protocol upgrade required",
  [httpStatusCodes.HTTP_PRECONDITION_REQUIRED]: "Client precondition required",
  [httpStatusCodes.HTTP_TOO_MANY_REQUEST]: "Too many request. Rate limited",
  [httpStatusCodes.HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE]: "Request header fields too large",
  [httpStatusCodes.HTTP_UNAVAILABLE_FOR_LEGAL_REASONS]: "Unavailable for legal reasons",

  [httpStatusCodes.HTTP_INTERNAL_SERVER_ERROR]: "Internal Server Error",
  [httpStatusCodes.HTTP_NOT_IMPLEMENTED]: "Not implemented",
  [httpStatusCodes.HTTP_BAD_GATEWAY]: "Bad gateway",
  [httpStatusCodes.HTTP_SERVICE_UNAVAILABLE]: "Service Unavailable Error",
  [httpStatusCodes.HTTP_GATEWAY_TIMEOUT]: "Gateway Timeout",
  [httpStatusCodes.HTTP_HTTP_VERSION_NOT_SUPPORTED]: "HTTP version not supported",
  [httpStatusCodes.HTTP_VARIANT_ALSO_NEGOTIATES]: "Variant also negotiates",
  [httpStatusCodes.HTTP_INSUFFICIENT_STORAGE]: "Insufficient storage",
  [httpStatusCodes.HTTP_LOOP_DETECTED]: "Loop detected",
  [httpStatusCodes.HTTP_BANDWIDTH_LIMIT_EXCEEDED]: "Not extended",
  [httpStatusCodes.HTTP_NOT_EXTENDED]: "Not extended",
  [httpStatusCodes.HTTP_NETWORK_AUTHENTICATION_REQUIRED]: "Network authentication required",
  [httpStatusCodes.HTTP_NOT_UPDATED]: "Not updated",
};

module.exports = { httpStatusCodes };