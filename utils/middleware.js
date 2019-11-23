//error helper
const errorHelper = ({ type, error }, res, code) =>
{
    switch (type) {
    case "JSON":
        return res.status(code).json({ error })
    default:
        return res.status(code).send({ error })
    }
    
}

//error handler
const errorHandler = (error, req, res, next) => {
    if (error.name === "CastError") {
        return errorHelper({ type: "JSON", error: "malformed data" }, res, 400)
    }
    else if (error.name === "ValidationError") {
        return errorHelper({ type: "JSON", error: error.message }, res, 400)
    }
    next(error)
}

//unkown route
const unKnownRouteHandler = (req, res) => {
    return errorHelper({ type: "SEND", error: "unknown endpoint" }, res, 404)
}

module.exports = {
    errorHandler,
    unKnownRouteHandler
}