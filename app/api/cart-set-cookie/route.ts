import { NextRequest, NextResponse } from "next/server";

async function POST(req: NextRequest, res: NextResponse) {

	if (req.method !== "POST") {
	    return NextResponse.json({ message: "Method Not Allowed" },{ status: 405 });
	}

	try {

		const { cartId } = await req.json();
		
		if (!cartId) {
			return NextResponse.json({ message: "Cart ID is required" },{ status: 400 });
		}
		
		let cookieString = `cart=${cartId}; Path=/; HttpOnly; Max-Age=${14 * 24 * 60 * 60}`;

		// Agregar la bandera 'Secure' solo en producción
		if (process.env.NODE_ENV === "production") {
			cookieString += "; Secure";
		}
		
		const response = NextResponse.json({ message: `Cart cookie set! ID: ${cartId}` },{ status: 200 });
		
		// Configurar la cookie
		response.headers.set("Set-Cookie", cookieString);
		
		return response;
		
	} catch (error) {

		return NextResponse.json({ message: "Error processing request" },{ status: 500 });

	}
}

export {POST}