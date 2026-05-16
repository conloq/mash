import multer from "multer";
import path from "path";

const armazenamento = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
})

const tiposPermitidos = /jpeg|jpg|png/;

const upload = multer({
    storage: armazenamento,
    limits: {fileSize: 20 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const extname = tiposPermitidos.test(path.extname(file.originalname).toLowerCase());
        if (extname) return cb(null, true);
        cb(new Error("Apenas imagens são permitidas!"));
    }
})

export default upload;