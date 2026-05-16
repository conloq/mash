export const infoGlobal = (req, res, next) => {
    res.locals.usuario = req.session || null;
    next();
}