import google.generativeai as genai
import os
from load_data import load_data_from_manifest


def main() -> None:
	training_data = load_data_from_manifest("training.json")
	training_js = []
	training_ts = []

	for entry in training_data:
		training_js.append(entry["javascript"])
		training_ts.append(entry["typescript"])

	genai.configure(api_key=os.environ["API_KEY"])
	model = genai.GenerativeModel("gemini-pro")
	response = model.generate_content("Hello!")
	print(response.text)


if __name__ == "__main__":
	main()
