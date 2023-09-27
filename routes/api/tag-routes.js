const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
router.get('/', async (req, res) => {
  try {
    // console.log("hi")
    const tagsData = await Tag.findAll({
      // include its associated Tag
      include: [
        {
          model: Product,
          through: ProductTag,
        }],
    });
    // console.log(tagsData);
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// find a single tag by its `id`
router.get('/:id', async (req, res) => {
  // be sure to include its associated Product data
  try {
    // find products by id
    const tagData = await Tag.findByPk(req.params.id, {
      // include its associated Category
      include: [
        {
          model: Product,
          through: ProductTag,
        }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// create new tag
router.post('/', async (req, res) => {

/* req.body should look like this...
  {
    tag_name: 'rock music',
  }
*/
  Tag.create(req.body)
    .then((tag) => {
      // return the tag
      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  // update tag data
  Tag.update(req.body, {where: { id: req.params.id }})    
    .then(() => res.status(200).json(req.body))
    .catch((err) => res.status(400).json(err));
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
