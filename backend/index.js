const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000
const { sequelize } = require('./database/models')

const userAuthRoute = require('./routers/UserAuth');
const adminAuthRoute = require('./routers/AdminAuth');
const ProductRoute = require('./routers/Product');
const OrderRoute = require('./routers/Order');
const CartRoute = require('./routers/Cart');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


sequelize.authenticate().then(() => {
    console.log(`Success connecting database`)                   
})

app.use('/auth/user', userAuthRoute);
app.use('/auth/admin', adminAuthRoute);
app.use('/product', ProductRoute);
app.use('/order', OrderRoute);
app.use('/cart', CartRoute);


app.use((error, req, res, next) => {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Bad Request',
      error: error.message,
    });
  });



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
