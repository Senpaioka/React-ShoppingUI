import { use } from 'react';
import Product from './Product'

function Store({props, onAddingCart, isExists, handleExistsProduct}) {

    const productList = use(props);

    return(
        <div className='max-w-10/12 mx-auto'>
        <h1 className='text-center font-bold text-5xl p-5'>UI store</h1>
        <div className='w-full grid grid-cols-1 xl:grid-cols-3'>
            {
                productList.map(item => <Product props={item} key={item.id} onAddingCart={onAddingCart} isExists={isExists} handleExistsProduct={handleExistsProduct}></Product>)
            }
        </div>
        
        </div>
    )
}

export default Store;