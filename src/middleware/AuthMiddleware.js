const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.headers['token']; //getting the token from the header

    jwt.verify(token, "123-xyz", (err, decoded) => {
        if (err) {
            console.error(err); // log the error
            return res.status(401).json({ message: "Unauthorized" });
        } else {
            //console.log(decoded['data']); //getting the decoded token
            req.headers.email = decoded['data']; //getting the email from the token
            next();
        }
    })
}

// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     let token = req.headers['authorization'];

//     if (token && token.startsWith('Bearer ')) {
//         token = token.slice(7, token.length);
//     } else {
//         return res.status(401).json({ message: "Token missing or malformed" });
//     }

//     jwt.verify(token, "123-xyz", (err, decoded) => {
//         if (err) {
//             console.error("JWT Verify Error:", err);
//             return res.status(401).json({ message: "Unauthorized" });
//         } else {
//             req.headers.email = decoded['data'];
//             next();
//         }
//     });
// };
