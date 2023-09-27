const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    // find all products
    const productsData = await Product.findAll({
      include: [
        {
          // include its associated Category
          model: Category,
          // include its associated Tag
          model: Tag,
          through: ProductTag,
        }],
    });
    res.status(200).json(productsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    // find products by id
    const productsData = await Product.findByPk(req.params.id, {
      include: [
        {
          // include its associated Category
          model: Category,
          // include its associated Tag
          model: Tag,
          through: ProductTag,
        }],
    });
    res.status(200).json(productsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    /* req.body should look like this...
      {
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        category_id: 4
      }
    */
    const productCreated = await Product.create(req.body);
    if (productCreated) {
      res.status(200).json(productCreated);
    } else {
      res.status(400).json(productCreated);
    }
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update product
router.put('/:id', async (req, res) => {
  /* req.body should look like this...
      {
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        category_id: 4
      }
    */
  try {
    const updatedProduct = await Product.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(400).json(updatedProduct);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete product
router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  try {
    const productsData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!productsData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
