import Urlmodel from "@/models/url";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ shorturl: string }> }) {
  const shortUrl = (await params).shorturl;

    const shorturl = await Urlmodel.findOne({ shorturl: shortUrl });

    if (!shorturl) {
      return redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    }
    return redirect(shorturl.url);
  } 


  