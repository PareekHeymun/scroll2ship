/**
 * Standard API response formatter
 * @param {number} statusCode - HTTP status code
 * @param {string} message - Response message
 * @param {any} data - Response data
 * @param {boolean} success - Success flag
 * @returns {Object} Formatted response object
 */
const formatResponse = (statusCode, message, data = null, success = true) => {
  return {
    success,
    statusCode,
    message,
    data,
    timestamp: new Date().toISOString()
  };
};

/**
 * Success response formatter
 * @param {string} message - Success message
 * @param {any} data - Response data
 * @param {number} statusCode - HTTP status code (default: 200)
 * @returns {Object} Formatted success response
 */
const successResponse = (message, data = null, statusCode = 200) => {
  return formatResponse(statusCode, message, data, true);
};

/**
 * Error response formatter
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code (default: 400)
 * @param {any} data - Additional error data
 * @returns {Object} Formatted error response
 */
const errorResponse = (message, statusCode = 400, data = null) => {
  return formatResponse(statusCode, message, data, false);
};

/**
 * Validation error response formatter
 * @param {Array} errors - Validation errors
 * @returns {Object} Formatted validation error response
 */
const validationErrorResponse = (errors) => {
  return formatResponse(422, 'Validation failed', { errors }, false);
};

module.exports = {
  formatResponse,
  successResponse,
  errorResponse,
  validationErrorResponse
}; 