exports.successResponse = (res, data, message = 'Success' , code = 200) => {
    res.status(code).json({
        status: 'success',
        message,
        data
    }); 
}

exports.createdResponse = (res, data, message = 'Created successfully' , code = 201) => {
    res.status(code).json({
        status: 'success',
        message,
        data
    })
}

exports.errorResponse = (res, error, message = 'Something went wrong' , code = 500) => {
    res.status(code).json({
        status: 'error',
        message,
        error: error.message || error
    });
}