const { DataTypes } = require("sequelize"); // Import the built-in data types

let db = require("../../models/index");
let User = require("../../models/user");

const MdUser = User(db.sequelize, DataTypes);

export default MdUser;
