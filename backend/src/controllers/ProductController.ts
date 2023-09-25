import { Request, Response } from "express";
import { Product } from "../models/Product";

export const newProduct = async (req: Request, res: Response) => {
  const title = req.body.title;
  const type = req.body.type;
  const price = req.body.price;
  const gender = req.body.gender;
  const description = req.body.description;

  if (title && type && price && gender && description) {
    try {
      await Product.create({
        title: title,
        type: type,
        price: price,
        gender: gender,
        description: description,
      });

      res
        .status(200)
        .send({ message: "Novo produto registrado: ", newProduct });
    } catch (error) {
      res
        .status(500)
        .send({ error: "Erro ao registrar novo produto", details: error });
    }
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.send({ products });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro ao buscar os produtos", error: error });
  }
};

export const findProduct = async (req: Request, res: Response) => {
  try {
    const ProductId = req.params.id;
    const product = await Product.findByPk(ProductId);
    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado!" });
    }
    res.json(product);
  } catch (error) {
    console.error("Erro ao achar Produto", error);
    res.status(500).json({ message: "Erro ao achar Produto" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, type, price, gender, description } = req.body;

  try {
    const FIND_PRODUCT = await Product.findOne({ where: { id: id } });

    if (!FIND_PRODUCT) {
      return res.status(404).json({ error: "Produto não encontrado" });
    } else {
      await Product.update(
        {
          title,
          type,
          price,
          gender,
          description,
        },
        { where: { id } }
      );

      const updatedProduct = await Product.findByPk(id);
      res.json(updatedProduct);

      res.json();
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
};

export const removeProdcut = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const PRODUCT_ID = await Product.findByPk(id);

    if (!PRODUCT_ID) {
      res.status(404).json({ error: "Produto não encontrado" });
    } else {
      await Product.destroy({ where: { id: id } });
      res.status(204).json({ message: "Produto deletado com sucesso!" });
    }
  } catch (error) {
    res.status(500).json({
      error: "Erro ao excluir produto",
    });
  }
};
