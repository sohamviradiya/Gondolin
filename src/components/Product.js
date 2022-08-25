import { type } from '@testing-library/user-event/dist/type';
import { Component } from 'react';
import Data from '../assets/data';
import { varDestructer } from '../assets/data';
class Product extends Component {
     constructor(props) {
          super(props);
          let s = window.location.pathname;
          this.state = {
               title: s.slice(s.lastIndexOf('/') + 1)
          }
     }

     render() {
          const { title } = this.state;
          const Details = Data[title];
          const { shade, type, price } = varDestructer(Data[title].shade);
          return (
               <div className="p-4 mt-5 row bg-primary bg-opacity-10" >
                    <div className={`p-3 rounded text-center bg-${shade} mb-3 border`}>
                         <h1 className={`text-bg-${shade} display-2`}> {Details.alias} <span className={`badge bg-info text-bg-info ms-5`}>{type}</span></h1>
                    </div>
                    <div className="d-flex flex-column col">
                         <div className={`border border-${shade} p-2 d-flex flex-column align-items-center`}>
                              <img src={Data[title].img} className="" alt={title} />
                         </div>
                    </div>
                    <div className="col text-center text-bg-dark d-flex flex-column justify-content-evenly align-items-center">
                         <h1 className="display-5">{Data[title].description}</h1>
                         <div className={`card bg-${shade} text-bg-${shade} w-50`}>
                              <div className="card-header display-6">
                                   Price: ${price} 
                              </div>
                              <div className="card-body">
                                   <h5 className="card-title h2">{title}</h5>
                                   <p className="card-text"> </p>
                                   <a href="#" className="btn btn-lg btn-primary">Add to Cart</a>
                              </div>
                         </div>

                         <button type="button" className={`btn btn-${shade}`}>
                              Click Here To Read More <span className={`badge text-bg-${shade}`} onClick={(e) => { window.location.assign(`https://lotr.fandom.com/wiki/${title}`) }}> Fandom </span>
                         </button>
                    </div>
               </div>
          );
     }
};

export default Product;