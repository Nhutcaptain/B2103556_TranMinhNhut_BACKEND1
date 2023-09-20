class ApiError extends Error{
    constructor (message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
    // getStatus() {
    //     return this.statusCode;
    // }
    getMessage() {
        return this.message;
    }

    getStatus() {
        return this.statusCode;
    }
}
module.exports = ApiError;
