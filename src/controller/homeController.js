import pool from "../configs/connectDB";

const getHomePage = async (req, res) => {
  const [rows, fields] = await pool.execute(`SELECT * FROM users`);
  return res.render("index.ejs", { dataUsers: rows, test: "tienhai" });
};

const getDetailPage = async (req, res) => {
  const userId = req.params.id;
  const [user] = await pool.execute(`select * from users where id = ?`, [
    userId,
  ]);
  return res.send(JSON.stringify(user));
};

const getCreateUser = async (req, res) => {
  const { name, email, phone, address } = req.body;
  await pool.execute(
    "insert into users(name,email,phone,address) values (?,?,?,?)",
    [name, email, phone, address]
  );
  return res.redirect("/");
};

const getAboutPage = (req, res) => {
  res.render("about.ejs");
};

const getDeleteUser = async (req, res) => {
  await pool.execute("delete from users where id = ?", [req.body.userId]);
  return res.redirect("/");
};

const getEditUser = async (req, res) => {
  const [user] = await pool.execute("select * from users where id = ?", [
    req.params.id,
  ]);
  res.render("editUser.ejs", { userEdit: user[0] });
};

const getUpdateUser = async (req, res) => {
  const { name, email, phone, address, id } = req.body;
  await pool.execute(
    `UPDATE users SET name = ?, email = ?,phone=?,address=? WHERE id = ?`,
    [name, email, phone, address, id]
  );
  console.log(req.body);
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  getAboutPage,
  getDetailPage,
  getCreateUser,
  getDeleteUser,
  getEditUser,
  getUpdateUser,
};
