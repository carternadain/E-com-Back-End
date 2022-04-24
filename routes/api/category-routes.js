const router = require('express').Router();
const res = require('express/lib/response');
const { Category, Product } = require('../../models');
const { restore } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  try {
  const categoryData  = await categoryData.destroy({
    where: {
    id:req.params.id,
    },
  });

    if (!categoryData) {
      res.status(404).json({ message: 'no category found with that id'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
