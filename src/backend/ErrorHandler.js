const { handleValidationError } = require("./handleValidationError");

module.exports = errorHandler;

function errorHandler(error, request, response, next) {
    if (typeof (error) === 'string') {
        // custom application error
        return response.status(400).json({ message: error });
    }

    if (error.name === 'ValidationError') {
        handleValidationError(error);
        // mongoose validation error
        return response.status(400).json({ message: error.message });
    }

    if (error.name === 'UnauthorizedError') {
        // jwt authentication error
        return response.status(401).json({ message: 'Invalid Token' });
    }

    // default to 500 server error
    return response.status(400).json({ message: error.message });
}