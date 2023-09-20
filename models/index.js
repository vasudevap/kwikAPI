// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongs to Category
Product.belongsTo(Category);
// Categories have many Products
Category.hasMany(Product);

// Product belongs to many Tag models
// Also Allow products to have multiple tags and tags to have many products by using the ProductTag through model
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products_tag'
});
// Tag belongs to many Product models
Tag.belongsToMany(Product, { 
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tagged_product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
