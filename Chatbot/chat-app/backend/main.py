# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai
import os
from knowledge_base import PARK_KNOWLEDGE

# Use environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")
if not openai.api_key:
    raise ValueError("OpenAI API key not set in environment variable OPENAI_API_KEY")

app = FastAPI()

# Allow requests from your React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:5500", "http://127.0.0.1:5500", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        # Create system message with park knowledge
        system_message = f"""You are a helpful and friendly customer support assistant for Mystic Grove, a fantasy-themed amusement park. 
        
Help visitors with information about attractions, dining, shopping, tickets, park hours, and general questions. 
Be enthusiastic and magical in your responses while being informative and accurate.

IMPORTANT: Use ONLY the information provided below to answer questions. Do not make up or guess information.

{PARK_KNOWLEDGE}

When visitors ask about park hours, tickets, attractions, dining, or other park information, provide accurate details from the knowledge base above.
If a question is outside the scope of the park information provided, politely let them know and offer to help with other park-related questions.

FORMATTING RULES:
- When listing multiple items, put each on a new line
- Use line breaks to separate different sections of your response
- Keep responses organized and easy to read
- Use bullet points or numbered lists when appropriate (with proper line breaks between items)"""
        
        # NEW 1.0+ API style
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": request.message},
            ],
        )
        reply_text = response.choices[0].message.content
        print("AI reply:", reply_text)
        return {"reply": reply_text}
    except Exception as e:
        print("OpenAI Error:", e)
        return {"error": str(e)}