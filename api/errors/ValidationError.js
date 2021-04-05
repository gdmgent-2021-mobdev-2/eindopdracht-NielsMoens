class ValidationError extends Error {
    constructor(e) {
        super();
        this.message = e.message;
        this.statusCode = 404;
    }
}
module.exports = ValidationError;