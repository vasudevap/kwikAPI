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
Product.belongsToMany(Tag, { through : ProductTag });
// Tag belongs to many Product models
Tag.belongsToMany(Product, { through : ProductTag });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
