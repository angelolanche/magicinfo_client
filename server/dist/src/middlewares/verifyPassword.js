"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPasswordMiddleware = void 0;
const verifyPasswordMiddleware = (req, res, next) => {
    const { password } = req.body;
    if (password === process.env.SUBMIT_IMAGE_PASSWORD) {
        next();
    }
    else {
        return res.status(401).json({ error: 'Invalid password' });
    }
};
exports.verifyPasswordMiddleware = verifyPasswordMiddleware;
//# sourceMappingURL=verifyPassword.js.map