/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type ProductQueryQueryVariables = StorefrontTypes.Exact<{
  handle?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
}>;


export type ProductQueryQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'handle' | 'description'>
    & { variants: { edges: Array<{ node: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
          & { priceV2: Pick<StorefrontTypes.MoneyV2, 'amount'> }
        ) }> } }
  )> };

interface GeneratedQueryTypes {
  "\n        #graphql\n        query ProductQuery($handle: String) {\n          product(handle: $handle) {\n            handle\n            description\n            variants(first: 1) {\n              edges {\n                node {\n                  id\n                  title\n                  priceV2 {\n                    amount\n                  }\n                }\n              }\n            }\n          }\n        }\n      ": {return: ProductQueryQuery, variables: ProductQueryQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
