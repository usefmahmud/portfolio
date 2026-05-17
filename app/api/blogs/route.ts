import { db } from "@/db";
import { blogs } from "@/db/schema";

type CreateBlogRequestBody = {
  title: string;
  description: string;
};

export const POST = async (request: Request) => {
  const body: CreateBlogRequestBody = await request.json();

  try {
    await db.insert(blogs).values(body);

    return new Response("Blog created successfully", { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return new Response("Failed to create blog", { status: 500 });
  }
};

export const GET = async (request: Request) => {
  try {
    const allBlogs = await db.select().from(blogs);
    return new Response(JSON.stringify(allBlogs), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return new Response("Failed to fetch blogs", { status: 500 });
  }
};
