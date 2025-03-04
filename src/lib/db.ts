import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: boolean;
}

const connection: ConnectionObject = {};

export async function dbConnection(): Promise<void> {
    if (connection.isConnected) {
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "MONGODB_URI is not connected successfully");
        connection.isConnected = db.connections[0].readyState === 1;
    } catch (error) {
        console.log("error fetch in data base", error);
        process.exit(1);
    }
}
