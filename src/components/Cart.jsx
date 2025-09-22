import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from "@fortawesome/free-solid-svg-icons";

function Cart({props, onRemove, amount, tax}) {

    return (
    
    <div className="max-w-10/12 mx-auto">
        <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide font-bold">Cart Products</li>
            
            {
                props.length > 0 ? 
                props.map(item => (
                    <li className="list-row" key={item.id}>
                    <div><img className="size-20 rounded-box" src={item.image}/></div>
                    <div>
                    <div className="text-md font-bold">{item.title}</div>
                    <div className="text-sm font-semibold opacity-60">${item.price}</div>
                    </div>
                    <button className="btn btn-square btn-ghost text-red-500 text-xl" onClick={() => onRemove(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                    </button>
                </li>
                ))
            :
            <li className="list-row">
                <p className="font-bold text-3xl">No Product Found !</p>
            </li> 
            }
  
        </ul>

        <div className="py-5">
            <div className="stats bg-base-100 border-base-300 border">
                <div className="stat">
                    <div className="stat-title">Tax + VAT</div>
                    <p className="stat-title">(0.15% Rate)</p>
                    <div className="stat-value">15%</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total Price</div>
                    <p className="stat-title">(Without VAT/Tax)</p>
                    <div className="stat-value">${amount}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Payable Amount</div>
                    <p className="stat-title">(VAT/Tax Included)</p>
                    <div className="stat-value">${tax}</div>
                </div>
            </div>
        </div>
    </div>

    )
}


export default Cart;