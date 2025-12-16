    import { pool } from "../src/db.js";

    export const getPTK = async (req, res) => {
    try {
        const result = await pool.query(`
        SELECT *
        FROM public.ptk
        LIMIT 100
        `);

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Gagal memproses data PTK" });
    }
    };
