import productModel from "../models/productModel.js";

const showProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);   // send JSON for React
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { showProducts };