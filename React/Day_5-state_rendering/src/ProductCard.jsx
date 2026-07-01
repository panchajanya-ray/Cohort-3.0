import React from 'react'

function ProductCard(product) {
  return (
    <div className='p-2 border-2 flex flex-col gap-4 rounded'>
        <div className='w-4'>
            <img src="product.link" alt="product image" />
        </div>
        <div>
            <h2 className='font-semibold'>{product.title}</h2>
            <p className='text-xs'>{product.price}</p>
        </div>

    </div>

  )
}

export default ProductCard