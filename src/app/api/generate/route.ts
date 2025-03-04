import { dbConnection } from "@/lib/db";
import Urlmodel from "@/models/url";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    
    if (!body.url) {
        return NextResponse.json(
            {
                success: false,
                message: "URL is required"
            },
            { status: 400 }
        );
    }

    try {
        await dbConnection();

        const shortUrl = await Urlmodel.findOne({ shorturl: body.shorturl });

        if (shortUrl) {
            return NextResponse.json(
                {
                    success: false,
                    message: "The custom URL is already in use. Please choose a different one."
                },
                { status: 409 }
            );
        }

        const newUrl = new Urlmodel({
            url: body.url,
            shorturl: body.shorturl
        });

        await newUrl.save();

        return NextResponse.json(
            {
                success: true,
                message: "your custom URL is generated successfully🥳",
                shortUrl: newUrl.shorturl // Ensure this field is returned
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Internal server error", error);
        return NextResponse.json(
            {
                success: false,
                message: "Internal server error"
            },
            { status: 500 }
        );
    }
}



