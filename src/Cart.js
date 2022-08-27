import './App.css';
import { Component } from 'react';
import './assets/turin.jpg'
import Data from './assets/data'
import {Link} from "react-router-dom"
import card from './components/card';

class Cart extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="container-fluid p-5 mt-5">
        <Link className="btn btn-info px-3 w-100 mb-5" to="/shop"> See Shop </Link>
        <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
          {this.props.items.map((item) => (card(item.title, item.quantity, this.props.remove)))}
        </div>
      </div>)
  }
};

export default Cart;