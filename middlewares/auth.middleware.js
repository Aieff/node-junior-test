import jwt from "jsonwebtoken";

export function auth(req, res, next) {

    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({
            error: "Token não fornecido."
        });
    }

    // Esperado: "Bearer TOKEN"
    const [, token] = authHeader.split(" ");

    if(!token) {
        return res.status(401).json({
            error: "Token malformado."
        });
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // O sub veio do jwt.sign({ sub: user.id })
        req.userId = decoded.sub;

        return next();

    } catch (error) {

        return res.status(401).json({
            error: "Token inválido ou expirado."
        });
        
    }

}