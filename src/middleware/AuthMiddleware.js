const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.headers['token']; //getting the token from the header

    jwt.verify(token, "123-xyz", (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        } else {
            req.headers.email = decoded['data']; //getting the email from the token
            next();
        }
    })
}