import openai
client = openai.OpenAI(api_key="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") 

client = openai.OpenAI()

response = client.images.generate(
    prompt="A cute baby sea otter",
    n=2,
    size="1024x1024"
)

print(response.data[0].url)