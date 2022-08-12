import pool from "../configs/connectDB";

const getAllUser = async (req, res) => {
  const [rows, fields] = await pool.execute(`SELECT * FROM users`);

  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

const createNewUser = async (req, res) => {
  const { name, email, phone, address } = req.body;

  if (!name || !email || !phone || !address) {
    return res.status(200).json({
      message: "Thieu du lieu truyen vao!!",
    });
  }

  await pool.execute(
    "insert into users(name,email,phone,address) values (?,?,?,?)",
    [name, email, phone, address]
  );

  return res.status(200).json({
    message: "ok",
  });
};

const editUser = async (req, res) => {
  const { name, email, phone, address, id } = req.body;

  if (!name || !email || !phone || !address || !id) {
    return res.status(200).json({
      message: "Thieu du lieu truyen vao!!",
    });
  }

  await pool.execute(
    `UPDATE users SET name = ?, email = ?,phone=?,address=? WHERE id = ?`,
    [name, email, phone, address, id]
  );

  return res.status(200).json({
    message: "ok",
  });
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(200).json({
      message: "Thieu du lieu truyen vao!!",
    });
  }

  await pool.execute("delete from users where id = ?", [userId]);

  return res.status(200).json({
    message: "ok",
  });
};

module.exports = {
  getAllUser,
  createNewUser,
  editUser,
  deleteUser,
};
