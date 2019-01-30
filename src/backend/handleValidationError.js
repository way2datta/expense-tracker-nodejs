function handleValidationError(validationError) {
    const errors = [];
    for (const fieldName in validationError.errors) {
        const field = validationError.errors[fieldName];
        let errorMessage = '';
        if (field.kind === 'unique') {
            errorMessage = 'UNIQUE_KEY_VIOLATION:' + field.path.toUpperCase();
        }
        if (field.kind === 'required') {
            errorMessage = "REQUIRED_FIELD_VIOLATION:" + field.path.toUpperCase();
        }
        errors.push({fieldName, errorMessage});
    }
    validationError.errors = errors;
}
exports.handleValidationError = handleValidationError;