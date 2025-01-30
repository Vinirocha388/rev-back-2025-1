import { Router} from "express";

const router = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
    return res.status(200).json({ message: "Vai Corithians !!" });
});

export default routes;