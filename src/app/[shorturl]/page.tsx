import Urlmodel from "@/models/url";
import { redirect } from "next/navigation";

// Define the type for the params
interface PageParams {
  shorturl: string;
}

export default async function Page({ params }: { params: PageParams }) {
  const { shorturl } = params;

  try {
    // Fetch the original URL from the database
    const urlData = await Urlmodel.findOne({ shorturl });

    if (!urlData) {
      // Redirect to the home page if the short URL is not found
      return redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    }

    // Redirect to the original URL
    return redirect(urlData.url);
  } catch (error) {
    console.error('Database error:', error);

    // Redirect to the home page in case of an error
    return redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }
}