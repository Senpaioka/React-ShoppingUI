import { Suspense, useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import Nav from './components/Nav'
import Store from './components/Store'
import Cart from './components/Cart'

// fetching products
const fetchProduct = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json()
}
const products = fetchProduct()



function App() {

  const [mainPage, setMainPage] = useState(true);

  // cart product
  const [ cartProduct, setCartProduct ] = useState([]);

  function handleCartProduct(product) {
    const inCart = [...cartProduct, product]
    setCartProduct(inCart)
    setQuantity(inCart.length)
    setBalance((Number(balance) - Number(product.price)).toFixed(2))
    const withoutTax = (Number(priceTotal) + Number(product.price))
    setPriceTotal(withoutTax.toFixed(2))
    toast('Product Added')
    taxCalculator(withoutTax)
  }

  // cart product count
  const [quantity, setQuantity] = useState(0)

  // check product already in cart
  const [cartProductID, setCartProductID] = useState([])

  function handleExistsProduct(id) {
    const updateCart = [...cartProductID, id]
    setCartProductID(updateCart)
  }

  // remove from cart
  function handleCartRemove(id) {
    const refund = cartProduct.find(item => item.id === id)
    const afterRemove = cartProduct.filter(item => item.id !== id)
    setCartProduct(afterRemove)
    setQuantity(afterRemove.length)
    setCartProductID(afterRemove)
    setBalance((Number(balance) + Number(refund.price)).toFixed(2))
    const totalPrice = ((Number(priceTotal) - Number(refund.price)).toFixed(2))
    setPriceTotal(totalPrice)
    toast('Product Removed')
    const newTotal = afterRemove.reduce((sum, item) => sum + Number(item.price), 0);
    taxCalculator(newTotal)
  }


  // balance
  const [balance, setBalance] = useState(5000)


  // calculate total price
  const [priceTotal, setPriceTotal] = useState(0)

  // calculate tax+price
  const [taxPrice, setTaxPrice] = useState(0);

  function taxCalculator(total) {
    const tax = total * 0.15;
    setTaxPrice(Number((total+tax)).toFixed(2));
  }

  return (
    <>
      <Nav money={balance}></Nav>
      <div className='max-w-10/12 mx-auto text-right p-5'>
        <button onClick={() => setMainPage(true)} className={`btn btn-soft btn-primary ${mainPage && 'bg-blue-700 text-white'}`}>All Products</button>
        <button onClick={() => setMainPage(false)} className={`btn btn-soft btn-secondary ${!mainPage && 'bg-pink-500 text-white'}`}><FontAwesomeIcon icon={faCartShopping} /> Cart ({quantity})</button>
      </div>
      
      {/* page control  */}
      {
        mainPage ?
        <Suspense fallback={<div className="flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
        </div>}> 
          <Store props={products} onAddingCart={handleCartProduct} isExists={cartProductID} handleExistsProduct={handleExistsProduct}></Store>
        </Suspense>

        : <Cart props={cartProduct} onRemove={handleCartRemove} amount={priceTotal} tax={taxPrice}></Cart>
      }
      
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App;