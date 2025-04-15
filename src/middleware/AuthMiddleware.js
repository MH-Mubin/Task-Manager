const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    let token = req.headers['token'];
    jwt.verify(token, "123-xyz", (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        } else {
            req.headers.email = decoded['email'];
            next();
        }
    })
}