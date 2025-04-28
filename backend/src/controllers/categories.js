import { getAllCategories } from '../services/categories.js';

export const getAllCategoriesController = async (req, res, next) => {
  const categories = await getAllCategories();

  res.status(200).send({
    status: 200,
    message: 'Successfully found all categories',
    data: categories,
  });
};
