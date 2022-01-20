const { Router } = require('express');
const {
  addItemToCart,
  getCartitems,
  updateProductQuantity,
  removeProduct,
  emptyCart,
} = require('../Controllers/Cart');
const { Authorization } = require('../Middleware/Autorization');

const router = Router();

router.get('/', Authorization, getCartitems);
router.post('/add-product', Authorization, addItemToCart);
router.put('/update-quantity', Authorization, updateProductQuantity);
router.delete('/delete-product/:id', Authorization, removeProduct);
router.delete('/delete-cart/:id', Authorization, emptyCart);

module.exports = router;