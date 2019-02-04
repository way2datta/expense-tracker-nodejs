import { handleValidationError } from "./handleValidationError";
module.exports = errorHandler;

/* eslint-disable no-unused-vars */
function errorHandler(error, request, response, next) {
    if (typeof (error) === 'string') {
        // custom application error
        return response.status(400).json({ message: error });
    }

    if (error.name === 'ValidationError') {
        // mongoose validation error
        handleValidationError(error);
        return response.status(400).json({ validationErrors: error.errors });
    }

    if (error.name === 'UnauthorizedError') {
        // jwt authentication error
        return response.status(401).json({ message: 'Invalid Token' });
    }

    // default to 500 server error
    return response.status(400).json({ message: error.message });
}


