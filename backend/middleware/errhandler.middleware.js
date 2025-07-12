const { ApiError } = require('../utils/ApiError.util');

const errhandler = function(err, req, res, next){
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    console.error(err.stack);
    res.status(500).json({msg: 'Something went wrong'});
}

module.exports = errhandler;