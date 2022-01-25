
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ProtectedRoute } from './Components/ProtectedRoute';
import { Dashboard } from './pages/Dashboard';
import HomePage from './pages/HomePage';
import EditProduct from './pages/EditProduct'
import { NewProducts } from './pages/NewProduct';
function App() {
  return (
    <div className="App">
      <Router>
      <ProtectedRoute component={Dashboard} path="/admin"/>
        <Switch>
        <Route component={Login} exact path="/" />
          <Route component={Register} path="/register" />
          <ProtectedRoute component={HomePage} exact path="/admin" />
          <ProtectedRoute component={EditProduct} path="/admin/edit-product" />
          <ProtectedRoute component={NewProducts} path="/admin/new-product" />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
