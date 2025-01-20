'use client'

import { addProductToCart, createCart, getCartById, getCustomers, getProducts } from "@/lib/shopify-queries";
import { Cart, Product, ProductVariant } from "@/types/storefront.types";
import { useEffect, useState } from "react";


export default function Home() {

  const [products, setProducts] = useState<Product[]>([])
  const [cartId, setCartId] = useState<string>('')
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      if (data) {
        const productsRequest = data.edges.map((edge) => {
          return edge.node
        })
        setProducts(productsRequest)
      }

      const cart = await fetch('/api/cart-get-cookie', {
        method: 'GET',
      }).then(res => res.json())
      if (cart) {
        setCartId(cart.cart.id)
      }

      const _ = await fetch('/api/get-customers').then(res => res.json())
      console.log(_)
    }
    fetchData()
  }, [])

  const addProduct = async (product: ProductVariant) => {
    const data = await addProductToCart(cartId, product.id, 1)
    console.log(data)
  }

  const ProductCard = ({product}:{product:ProductVariant}) => {
    return (
      <div className="flex flex-col w-60 h-60 p-4 justify-between bg-white shadow-md">
        <div className="flex flex-col gap-4">
          <span className="flex text-xl font-semibold">{product.price.amount}</span>
          <button onClick={async () => addProduct(product)} className="flex text-blue-500">+ Add to cart</button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full h-screen p-10 gap-10">
      {products.length > 0 && (
        products.map((product, n) => {
          return <ProductCard key={n} product={product.variants.edges[0].node} />
        })
      )}
    </div>
  );
}
