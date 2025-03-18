import { redirect } from "next/navigation";
import Urlmodel from "@/models/url";
import dbConnection from "@/lib/db";

export default async function Page({ params }: { params: Promise<{ shorturl: string }> }) {
  try {
    await dbConnection(); // Ensure DB is connected

    const shorturl = (await params).shorturl; // ✅ Correctly extract short URL
    if (!shorturl) {
      console.error("Invalid short URL.");
      return redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }

    const urlData = await Urlmodel.findOne({ shorturl }).lean(); // Fetch URL from DB

    if (urlData && urlData.url) {
      console.log("Short URL found in database:", urlData.url);
      return (
        <meta httpEquiv="refresh" content={`0;url=${urlData.url}`} />
      );
    } else {
      console.error("Short URL not found in database.");
      return redirect(process.env.NEXT_PUBLIC_HOST || "/"); // ✅ Redirect to home
    }
  } catch (error) {
    console.error("Database error:", error);
    return redirect(process.env.NEXT_PUBLIC_HOST || "/"); // ✅ Redirect on error
  }
}
