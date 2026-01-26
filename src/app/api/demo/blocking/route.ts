import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: "AIzaSyD-9OsYSNMa-UZuQada_zKflUeWRNDgh9c",
});

export async function POST() {
  const response = await generateText({
    model: google("gemini-2.5-flash"),
    prompt: "你死了吗",
    experimental_telemetry: {
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    },
  });

  return Response.json({ response });
}
