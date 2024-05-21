const jwt = require('jsonwebtoken')

const checkAuth = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer ")) {
        console.log("Authorization header missing or malformed");
        return res.status(401).send({ message: "Authorization required!" });
    }

    const token = authorization.replace('Bearer ', '').trim();
    try {
        req.user = jwt.verify(token, "some-secret-key");
    } catch (err) {
        console.log("Token verification failed:", err.message);
        return res.status(401).send({ message: "Authorization required!" });
    }

    next();
}

const checkCookiesJWT = (req, res, next) => {
    if (!req.cookies.jwt) {
        console.log("JWT cookie missing");
        return res.redirect("/");
    }

    req.headers.authorization = `Bearer ${req.cookies.jwt}`;
    next();
};

module.exports = { checkAuth, checkCookiesJWT };
// updated