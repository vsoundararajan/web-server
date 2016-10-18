/**
 * Created by soundararajanvenkatasubramanian on 10/18/16.
 */
module.exports = {
    requireAuthentication: (req, res, next) => {
        console.log('private route hit!');
        next();
    },
     logger: (req, res, next) => {
        console.log('Request: ' +  (new Date().toString()) + " " + req.method + "  " + req.originalUrl);
        next();
    }
};
