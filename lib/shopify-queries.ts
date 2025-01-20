import { client, session, shopify } from "@/shopify-config";
import { Cart, Customer, Product, ProductConnection } from "@/types/storefront.types";
import { Session } from "@shopify/shopify-api";

export const getProducts = async (): Promise<ProductConnection> => {
	const productsQuery = `
		query getProducts($first: Int) {
			products(first: $first) {
				edges {
					cursor
					node {
						id
						title
						description
						variants(first: 1) {
							edges {
								cursor
								node {
									id
									price {
										amount
										currencyCode
									}
								}
							}
						}
					}
				}
			}
		}`
	
	const { data, errors } = await client.request(productsQuery, {
		variables: {
			first: 10
		}
	});

	if (!data) {
		throw errors
	}

	return data.products
}


export const createCart = async (): Promise<any> => {
	const cartCreateMutation = `
		mutation($input: CartInput!) {
			cartCreate(input: $input) {
				cart {
					id
					createdAt
					updatedAt
					checkoutUrl
					lines(first: 10) {
						edges {
						node {
							id
							merchandise {
							... on ProductVariant {
								id
							}
							}
						}
						}
					}
					cost {
						totalAmount {
						amount
						currencyCode
						}
						# The estimated amount, before taxes and discounts, for the customer to pay at checkout.
						subtotalAmount {
						amount
						currencyCode
						}
						# The estimated tax amount for the customer to pay at checkout.
						totalTaxAmount {
						amount
						currencyCode
						}
						# The estimated duty amount for the customer to pay at checkout.
						totalDutyAmount {
						amount
						currencyCode
						}
					}
				}
			}
		}
		`;

	const {data, errors, extensions} = await client.request(cartCreateMutation, {
		variables: {
			input: {
				lines: [
					{
						quantity: 1,
						merchandiseId: "gid://shopify/ProductVariant/41634654847066"
					}
				]
			},
			country: 'CL',
			language: 'ES',
		}
	});
	
	return data
}

export const getCartById = async (cartId: string) => {
	const query = `
		#graphql
		query getCart($cartId: ID!) {
			cart(id: $cartId) {
				id
				createdAt
				updatedAt
				checkoutUrl
				lines(first: 10) {
				edges {
					node {
					id
					quantity
					merchandise {
						... on ProductVariant {
						id
						}
					}
					attributes {
						key
						value
					}
					}
				}
				}
				attributes {
				key
				value
				}
				cost {
				totalAmount {
					amount
					currencyCode
				}
				subtotalAmount {
					amount
					currencyCode
				}
				totalTaxAmount {
					amount
					currencyCode
				}
				totalDutyAmount {
					amount
					currencyCode
				}
				}
				buyerIdentity {
				email
				phone
				customer {
					id
				}
				countryCode
				deliveryAddressPreferences {
					... on MailingAddress {
					address1
					address2
					city
					provinceCode
					countryCodeV2
					zip
					}
				}
				preferences {
					delivery {
					deliveryMethod
					}
				}
			}
		}
	}`

	const {data, errors, extensions} = await client.request(query, {
		variables: {
			cartId: cartId
		}
	});
	
	return data 
}

export const addProductToCart = async (cartId: string, merchandiseId: string, quantity: number) => {
	const query = `
		mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
			cartLinesAdd(cartId: $cartId, lines: $lines) {
			cart {
				id
				lines(first: 5) {
				edges {
					node {
					id
					quantity
					merchandise {
						... on ProductVariant {
						id
						title
						}
					}
					}
				}
				}
			}
			}
		}
	`;

	const variables = {
		cartId: cartId,
		lines: [
		  {
			merchandiseId: merchandiseId,
			quantity: quantity,
		  },
		],
	};

	const {data, errors, extensions} = await client.request(query, {variables: variables});
	
	return data
}

export const getCustomers = async () => {

	// Configura el cliente GraphQL
	const client = new shopify.clients.Graphql({session});

	const query = `
		query getCostumers {
			customers(first: 10) {
				edges {
					node {
						id
						firstName
						lastName
						email
						addresses(first: 10) {
							id
							firstName
							lastName
							address1
							address2
							city
							country
							province
							zip
							phone
						}
					}
				}
			}
		}`;

	try {

		const response = await client.query({ data: query });

		return response

	} catch (error) {
		console.error('Error obteniendo clientes:', error);
	}
}