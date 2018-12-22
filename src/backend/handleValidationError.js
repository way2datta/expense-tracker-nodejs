function handleValidationError(error) {
    if (error.errors.name.kind === 'unique') {
        error.message = 'UNIQUE_KEY_VIOLATION:' + error.errors.name.path.toUpperCase();
    }
    if (error.errors.name.kind === 'required') {
        error.message = "REQUIRED_FIELD_VIOLATION:" + error.errors.name.path.toUpperCase();
    }
}
exports.handleValidationError = handleValidationError;