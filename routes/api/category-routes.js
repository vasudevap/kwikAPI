const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      // include its associated Tag
      include: [
        {
          model: Product,
          // as: 'Product'
        }],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find a single category by its `id`
router.get('/:id', async (req, res) => {
  // be sure to include its associated Product data
  try {
    // find products by id
    const categoryData = await Category.findByPk(req.params.id, {
      // include its associated Category
      include: [
        {
          model: Product,
          // as: 'Product'
        }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create new category
router.post('/', async (req, res) => {

  /* req.body should look like this...
    {
      category_name: 'Shirts',
    }
  */
  Category.create(req.body)
    .then((category) => {
      // return the category
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
// update a category's name by its `id` value
router.put('/:id', (req, res) => {
  // update category data
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});
// delete on category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
