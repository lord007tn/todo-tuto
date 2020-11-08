const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    const token = req.header('access_token')
    if (!token) return res.status(403).json("access denied")
    
    try {
        const verified = jwt.verify(token, "9d46f8sqdq8");
        req.verifiedUser = verified
        console.log(verified)
        next()
    } catch (err) {
        return res.status(5000).json(err)
    }
}