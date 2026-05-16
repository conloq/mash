import session from "express-session";
import SequelizeStoreConstructor from "connect-session-sequelize";
import connection from "./sequelize-config.js";

const SequelizeStore = SequelizeStoreConstructor(session.Store);

const MashStore = new SequelizeStore({
    db: connection
});

MashStore.sync();

const configSession = session({
    secret: 'cervejaria-mash',
    store: MashStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
});

export default configSession;