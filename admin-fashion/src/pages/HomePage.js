import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import '../css/Homepage.css'

const HomePage = () => {
  
  return (
      <div className='home'>
        <Card>
          <Card.Header>List of Products</Card.Header>
          <Card.Body>
            <div className='products-headers'>
              <div className='product-name'>name</div>
              <div className='quantity'>quantity</div>
              <div className='price'>price</div>
              <div className='details'>details</div>
              <div className='remove'>Cancel</div>
            </div>
            <div className='new-product'>
              <Link to={{ pathname: '/admin/new-product' }}>
                <Button variant='primary' className='new-btn'>
                  New Product
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>

  );
};



export default HomePage