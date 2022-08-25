import './App.css';
import { Component } from 'react';
import './assets/turin.jpg'
import Data from './assets/data'
import {Link} from "react-router-dom"
function card(title) {
  let shade = 'secondary';
  let price = 1;
  switch (Data[title].shade) {
    case 1: {
      shade = 'success';
      price = 4;
      break;
    }
    case 2: {
      shade = 'warning';
      price = 5;
      break;
    }
    case -1: {
      shade = 'danger';
      price = 3;
      break;
    }
    case -2: {
      shade = 'dark';
      price = 7;
      break;
    }
    default: {
      shade = 'secondary';
      price = 2;
      break;
    }
  }
  return (

    <div className="col" key={title}>
      <div className={`shadow-lg card bg-${shade} text-bg-${shade} container p-2`} style={{ height: '32rem', width: '18rem' }}>
        <div className="card-header h5 text-center">{Data[title].alias}</div>
        <img src={Data[title].img} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">Only for {`${price}`}$</h5>
          <p className="card-text">{Data[title].description}</p>
          <Link className="btn btn-light px-3" to={`${title}`}> More Details </Link>
        </div>
      </div>
    </div>
  )
}

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid p-5 mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
          {Object.keys(Data).map(title => card(title, this.add_title))}
        </div>
      </div>)
  }
};

export default Cart;