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
      allowNull: false,
      unique: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updateDate: {
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'product',
    timestamps: false,
    hooks: {
      beforeUpdate: async (record, options) => {
        record.setDataValue('updateDate', new Date());
      }
    }
  });
}
