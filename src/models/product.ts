import { DataTypes, Model, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class Product extends Model {};
  
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
    updateDate: {
      type: DataTypes.DATE,
    }
  }, {
    modelName: 'Product',
    tableName: 'product',
    timestamps: false,
    sequelize
  });
};

