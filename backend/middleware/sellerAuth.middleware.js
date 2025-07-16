const { ApiError } = require('../utils/ApiError.util');

const sellerAuth = function(req, res, next) {
    if (!req.user) {
        return next(new ApiError(401, 'Authentication required'));
    }
    
    if (req.user.role !== 'seller') {
        return next(new ApiError(403, 'Seller access required'));
    }
    
    next();
};

module.exports = sellerAuth; 