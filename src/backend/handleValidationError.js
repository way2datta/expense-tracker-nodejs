function handleValidationError(error) {
    if (error.errors.name.kind === "required") {
        error.message = error.errors.name.path.toUpperCase() + "_IS_REQUIRED";
    }
}
exports.handleValidationError = handleValidationError;
