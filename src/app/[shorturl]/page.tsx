import { dbConnection } from '@/lib/db';
import Urlmodel from '@/models/url';
import { redirect } from 'next/navigation';
import redis from 'redis';

const client = redis.createClient();

export default async function Page({ params }: { params: { shorturl: string } }) {
  const { shorturl } = params;

  // Check cache first
  const cachedUrl = await client.get(shorturl);
  if (cachedUrl) {
    return redirect(cachedUrl);
  }
  try {
    // Assuming connectDB and Urlmodel are defined elsewhere and imported correctly
    // If not, please define or import them as necessary
    // Assuming connectDB and Urlmodel are imported correctly
    await dbConnection();
    const urlData = await Urlmodel.findOne({ shorturl });

    if (!urlData) {
      return redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    }

    // Cache the URL for future requests
    await client.set(shorturl, urlData.url);

    return redirect(urlData.url);
  } catch (error) {
    console.error('Database error:', error);
    return redirect(`${process.env.NEXT_PUBLIC_HOST}`);
  }
}

