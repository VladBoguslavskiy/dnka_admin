import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/lib/models/Product";
import Collection from "@/lib/models/Collection";

export const GET = async (req: NextRequest) => {
	try {
	  await connectToDB();
 
	  const { searchParams } = new URL(req.url);
	  const tag = searchParams.get("tags");
  
	  let filter = {};
	  if (tag) {
		 filter = { tags: tag }; // Тут фільтруємо за тегом
	  }
 
	  const products = await Product.find(filter)
		 .sort({ createdAt: "desc" })
		 .populate({ path: "collections", model: Collection });
 
	  console.log("Filtered products:", products); // Додайте цей рядок
 
	  return NextResponse.json(products, { status: 200 });
	} catch (err) {
	  console.log("[products_GET]", err);
	  return new NextResponse("Internal Error", { status: 500 });
	}
 };
 