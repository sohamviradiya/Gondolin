import './App.css';
import { Component } from 'react';
import Data from './assets/data'
import card from './components/card';
import { Link } from 'react-router-dom';
class Shop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid p-5">
        <Link className="btn btn-info px-3 w-100 mb-5" to="/cart"> See Cart </Link>
        <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
          {Object.keys(Data).map(title => card(title))}
        </div>
      </div>)
  }
};

export default Shop;