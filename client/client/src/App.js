
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { DetailProduct }  from './pages/DetailProduct';
import { ProtectedRoute } from './component/ProtectedRoute';
import { ListProducts } from './pages/ListProducts';
import Cart from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderStatus } from './pages/OrderStatus';


function App() {
  return (
    <div>
        <Router>
        <Switch>
          <Route path="/" component={HomePage}  exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <ProtectedRoute path="/products" component={ListProducts} />
            <ProtectedRoute path="/products-detail/:id" component={DetailProduct} />
            <ProtectedRoute path="/cart" component={Cart} />
            <ProtectedRoute path="/checkout" component={Checkout} />
            <ProtectedRoute path="/status" component={OrderStatus} />
          </Switch>
      </Router>
      </div>
      
  );
}

export default App;

