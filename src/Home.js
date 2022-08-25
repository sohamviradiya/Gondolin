import './App.css';
import { Link } from "react-router-dom";
import background from './assets/background.jpg'
import { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    }
  }

  add_item = (item,number) => {
    this.setState({
      cartItems: this.state.cartItems + number*[item]
    });
  };

  render() {
    return (
      <div>
        <div className="p-4 mt-5 row bg-primary bg-opacity-10" >
          <div className={`p-3 rounded text-center bg-info mb-3 border`}>
            <h1 className={`text-bg-info display-2`}> Welcome to Gondolin <span className={`badge bg-info text-bg-info ms-5`}>The Hidden City of the Elves</span></h1>
          </div>
          <div className="border d-flex flex-column align-items-center p-5">
            <img src={background} className="mb-5" />
            <Link className="btn btn-primary text-dark px-3 " to={`/shop`}> <span className="display-3 ">Click Here to Visit Shop</span> </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
