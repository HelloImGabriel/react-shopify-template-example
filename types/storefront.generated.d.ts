/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type GetCartQueryVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
}>;


export type GetCartQuery = { cart?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Cart, 'id' | 'createdAt' | 'updatedAt' | 'checkoutUrl'>
    & { lines: { edges: Array<{ node: (
          Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
          & { merchandise: Pick<StorefrontTypes.ProductVariant, 'id'>, attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>> }
        ) | (
          Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
          & { merchandise: Pick<StorefrontTypes.ProductVariant, 'id'>, attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>> }
        ) }> }, attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>>, cost: { totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, buyerIdentity: (
      Pick<StorefrontTypes.CartBuyerIdentity, 'email' | 'phone' | 'countryCode'>
      & { customer?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Customer, 'id'>>, deliveryAddressPreferences: Array<Pick<StorefrontTypes.MailingAddress, 'address1' | 'address2' | 'city' | 'provinceCode' | 'countryCodeV2' | 'zip'>>, preferences?: StorefrontTypes.Maybe<{ delivery?: StorefrontTypes.Maybe<Pick<StorefrontTypes.CartDeliveryPreference, 'deliveryMethod'>> }> }
    ) }
  )> };

export type CartLinesAddMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineInput> | StorefrontTypes.CartLineInput;
}>;


export type CartLinesAddMutation = { cartLinesAdd?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: Pick<StorefrontTypes.ProductVariant, 'id' | 'title'> }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { merchandise: Pick<StorefrontTypes.ProductVariant, 'id' | 'title'> }
          ) }> } }
    )> }> };

interface GeneratedQueryTypes {
  "\n\t\t#graphql\n\t\tquery getCart($cartId: ID!) {\n\t\t\tcart(id: $cartId) {\n\t\t\t\tid\n\t\t\t\tcreatedAt\n\t\t\t\tupdatedAt\n\t\t\t\tcheckoutUrl\n\t\t\t\tlines(first: 10) {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tquantity\n\t\t\t\t\tmerchandise {\n\t\t\t\t\t\t... on ProductVariant {\n\t\t\t\t\t\tid\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tattributes {\n\t\t\t\t\t\tkey\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tattributes {\n\t\t\t\tkey\n\t\t\t\tvalue\n\t\t\t\t}\n\t\t\t\tcost {\n\t\t\t\ttotalAmount {\n\t\t\t\t\tamount\n\t\t\t\t\tcurrencyCode\n\t\t\t\t}\n\t\t\t\tsubtotalAmount {\n\t\t\t\t\tamount\n\t\t\t\t\tcurrencyCode\n\t\t\t\t}\n\t\t\t\ttotalTaxAmount {\n\t\t\t\t\tamount\n\t\t\t\t\tcurrencyCode\n\t\t\t\t}\n\t\t\t\ttotalDutyAmount {\n\t\t\t\t\tamount\n\t\t\t\t\tcurrencyCode\n\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tbuyerIdentity {\n\t\t\t\temail\n\t\t\t\tphone\n\t\t\t\tcustomer {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\tcountryCode\n\t\t\t\tdeliveryAddressPreferences {\n\t\t\t\t\t... on MailingAddress {\n\t\t\t\t\taddress1\n\t\t\t\t\taddress2\n\t\t\t\t\tcity\n\t\t\t\t\tprovinceCode\n\t\t\t\t\tcountryCodeV2\n\t\t\t\t\tzip\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tpreferences {\n\t\t\t\t\tdelivery {\n\t\t\t\t\tdeliveryMethod\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}": {return: GetCartQuery, variables: GetCartQueryVariables},
}

interface GeneratedMutationTypes {
  "\n\t\t#graphql\t\n\t\tmutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n\t\t\tcartLinesAdd(cartId: $cartId, lines: $lines) {\n\t\t\tcart {\n\t\t\t\tid\n\t\t\t\tlines(first: 5) {\n\t\t\t\tedges {\n\t\t\t\t\tnode {\n\t\t\t\t\tid\n\t\t\t\t\tquantity\n\t\t\t\t\tmerchandise {\n\t\t\t\t\t\t... on ProductVariant {\n\t\t\t\t\t\tid\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t}\n\t\t}\n\t": {return: CartLinesAddMutation, variables: CartLinesAddMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
