import google.generativeai as genai
from load_data import load_data_from_manifest


def main() -> None:
	print(genai.get_tuned_model("tunedModels/js-to-ts-model"))


if __name__ == "__main__":
	main()
