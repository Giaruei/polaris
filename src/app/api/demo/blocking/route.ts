import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: "AIzaSyD-9OsYSNMa-UZuQada_zKflUeWRNDgh9c",
});

export async function POST() {
  const response = await generateText({
    model: google("gemini-2.5-flash"),
    prompt: "为我制定一份五分化的健身计划",
  });

  return Response.json({ response });
}
