"use strictprojectUser";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      // define association here
      Group.hasMany(models.User);
      Group.belongsToMany(models.Role, {
        through: "GroupRole",
      });
    }
  }
  Group.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Group",
    }
  );
  return Group;
};
