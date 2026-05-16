import bcrypt from "bcrypt";

const salts = 11;

const hash = async (password) => {
    const hash = await bcrypt.hash(password, salts);
    return hash;
}

const comparePasswordHash = async (password, hashPassword) => {
    const compare = await bcrypt.compare(password, hashPassword);
    return compare;
}

export {hash, comparePasswordHash};