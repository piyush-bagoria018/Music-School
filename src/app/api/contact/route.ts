import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src", "data", "contact_messages.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the data
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Read existing messages
    let messages = [];
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf-8");
      messages = JSON.parse(fileData);
    }

    // Add the new message
    const newMessage = {
      id: Date.now(),
      name: body.name,
      email: body.email,
      message: body.message,
      date: new Date().toISOString(),
    };
    messages.push(newMessage);

    // Save the updated messages back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(messages, null, 2));

    return NextResponse.json({ message: "Message saved successfully." });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ error: "Failed to save message." }, { status: 500 });
  }
}