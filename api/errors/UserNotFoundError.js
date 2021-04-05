class NotFoundError extends Error{
    constructor() {
        super();
        this.message = "resource not found";
        this.statusCode = 404;
    }
}
module.exports = NotFoundError;