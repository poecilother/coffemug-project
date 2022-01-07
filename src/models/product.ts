import { DataTypes, Model, Sequelize } from 'sequelize';

class Product extends Model {};

export function ProductModel(sequelize: Sequelize) {
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    modelName: 'Product',
    tableName: 'product',
    createdAt: false,
    updatedAt: 'updateDate',
    sequelize
  });
}
