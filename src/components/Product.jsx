// import { toast } from 'react-toastify';


function Product({ props, onAddingCart, isExists, handleExistsProduct }) {

    return(
        <div className="max-w-10/12 mx-auto m-7">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="w-[200px] mx-auto">
                    <img className="w-full h-auto"
                    src={ props.image }
                    alt={ props.title } />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.title}
                    <div className={`badge ${props.rating.count > 0 ? 'badge-success' : 'badge-error'}`}>{props.rating.count > 0 ? 'Available' : 'Stockout'}</div>
                    </h2>

                    <div className="rating">
                        {
                            Array.from({length:5}, (_, i) => (
                                <div className="mask mask-star  bg-orange-300" aria-label={`${i+1} star`} key={i} aria-current={(i+1) === Math.round(props.rating.rate) ? 'true' : undefined}></div>
                            ))             
                        }
                    </div>

                    <p>{ props.description}</p>
                    <div className="badge badge-soft badge-info">{ props.category }</div>

                        <h2 className="card-title"><span>$</span>{ props.price }</h2>
                        <div className="card-actions justify-end">
                            {
                                isExists.includes(props.id) ?
                                <button onClick={() => onAddingCart(props)} className="btn btn-primary" disabled>Added</button>
                                : 
                                <button onClick={() => {onAddingCart(props); handleExistsProduct(props.id)}} className="btn btn-primary" disabled={props.rating.count === 0}>{props.rating.count > 0 ? 'Buy Now' : 'Sold Out'}</button>
                            }
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Product;