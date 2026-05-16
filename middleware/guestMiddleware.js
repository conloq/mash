export const isGuest = (req, res, next) => {
    if(req.session.userId) {
        console.log(req.session);
        return res.redirect('/usuario');
    }
    next();
}

export const isLogado = (req, res, next) => {
    if(!req.session.userId) {
        return res.redirect('/')
    }
    next();
}