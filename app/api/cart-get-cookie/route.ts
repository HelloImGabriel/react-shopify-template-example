import { getCartById, getCustomers } from "@/lib/shopify-queries";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

	if (req.method !== "GET") {
	    return NextResponse.json({ message: "Method Not Allowed" },{ status: 405 });
	}

	try {

		const cartId = req.cookies.get("cart");

		if (!cartId) {
		return NextResponse.json({ message: "Cart ID not found" }, { status: 400 });
		}

		// Aquí puedes hacer una solicitud a la API de Shopify utilizando el cartId
		// Suponiendo que tienes la función para obtener el carrito desde Shopify
		const cart = await getCartById(cartId.value)

		return NextResponse.json(cart, { status: 200 });
		
	} catch (error) {
		return NextResponse.json({ message: "Error fetching cart" }, { status: 500 });
	}
}
