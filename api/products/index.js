import { pool } from '../../../config/db'

export default async function handler(req, res) {

    switch (req.method) {
        case "GET":
            return await getProducts(req, res);
        case "POST":
            return await saveProducts(req, res);

    }
}
const getProducts = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM productos");
    return res.status(200).json(result);
}

const saveProducts = async (req, res) => {
    const { nombre, descripcion, precio } = req.body;
    const [result] = await pool.query("INSERT INTO productos SET ?", {
        nombre,
        descripcion,
        precio,
    })
    return res.status(200).json({ nombre, descripcion, precio, id: result.insertId })
}