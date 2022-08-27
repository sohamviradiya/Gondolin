import Data from '../assets/data';
import { Link } from "react-router-dom"

function card(title, quantity, remove) {
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

     const QuantityBox = () => {
          if (quantity)
               return (
                    <>
                         <h5 className="card-title"> Quantity: {quantity} | Total: {quantity * price}$</h5>
                         <button className="btn btn-lg btn-primary my-3" onClick={(e) => { remove(title) }}>Remove from Cart</button>
                    </>
               );
          else
               return (<>
                    <h5 className="card-title">Only for {`${price}`}$</h5>
                    <p className="card-text">{Data[title].description}</p>
               </>);
     }
     return (

          <div className="col" key={title}>
               <div className={`shadow-lg card bg-${shade} text-bg-${shade} container p-2`} style={{ height: '32rem', width: '18rem' }}>
                    <div className="card-header h5 text-center">{Data[title].alias}</div>
                    <img src={Data[title].img} className="card-img-top" alt={title} />
                    <div className="card-body d-flex flex-column align-items-center">
                         <QuantityBox />
                         <Link className="btn btn-light px-3" to={`${title}`}> More Details </Link>
                    </div>
               </div>
          </div>
     )
}

export default card;