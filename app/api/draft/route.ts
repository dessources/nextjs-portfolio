import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "/";

  // Check secret
  if (secret !== process.env.BASEHUB_DRAFT_SECRET && false) {
    return new Response("Invalid token", { status: 401 });
  }

  // Enable Draft Mode
  (await draftMode()).enable();

  // Redirect to the slug
  redirect(slug);
}
