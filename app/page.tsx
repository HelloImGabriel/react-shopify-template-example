'use client'

import { client } from "@/shopify-config";
import { Product, Shop } from "@/types/storefront.types";
import { useEffect, useState } from "react";

export default function Home() {

  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    const fetchData = async () => {
      const productQuery = `
        #graphql
        query ProductQuery($handle: String) {
          product(handle: $handle) {
            handle
            title
            description
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                  }
                }
              }
            }
          }
        }
      `;
      
      const {data, errors, extensions} = await client.request(productQuery, {
        variables: {
          handle: 'organic-cotton-shirt',
        },
      });
      if (data) {
        console.log(data)
        setProduct(data.product as Product)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex w-full h-screen p-10">
      {product && <ProductCard product={product}/>}
    </div>
  );
}

const ProductCard = ({product}:{product: Product}) => {
  return (
    <div className="flex flex-col w-80 h-fit p-4 gap-4 bg-white shadow-md">
      <span className="flex text-xl font-semibold">{product.title}</span>
      <p className="flex">{product.description}</p>
      <span className="flex">{product.variants.edges[0].node.price.amount}</span>
    </div>
  )
}