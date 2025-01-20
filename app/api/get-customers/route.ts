import { getCartById, getCustomers } from "@/lib/shopify-queries";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

	if (req.method !== "GET") {
		return NextResponse.json({ message: "Method Not Allowed" },{ status: 405 });
	}

	try {

		const customers = await getCustomers();

		return NextResponse.json(customers, { status: 200 });
		
	} catch (error) {
		return NextResponse.json({ message: "Error fetching cart" }, { status: 500 });
	}
}
