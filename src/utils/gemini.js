import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KI_CHABI } from "./constants";

const genAI = new GoogleGenerativeAI(GEMINI_KI_CHABI);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
