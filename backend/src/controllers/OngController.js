const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const ong_id = req.headers.authorization;

    const ong = await connection("ongs")
      .where("id", ong_id)
      .select("*")
      .first();

    if (!ong) {
      return res.status(404).json({ error: "Ong not found" });
    }

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    if (incidents.length > 0) {
      return res.status(401).json({
        error: "Not authorized has some incidents associated with this ONG"
      });
    }

    await connection("ongs")
      .where("id", ong_id)
      .delete();

    return res.status(204).send();
  }
};
