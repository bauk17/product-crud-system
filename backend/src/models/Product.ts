import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

export interface ProductInstance extends Model {
  id: number;
  title: string;
  type: string;
  price: number;
  gender: string;
  description: string;
}

export const Product = sequelize.define<ProductInstance>(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    gender: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "product_database",
    timestamps: false,
  }
);
