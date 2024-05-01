# This is the function that is called by the Django server when after the code in an HttpRequest is
# validated.

from django.http import HttpResponse
import google.generativeai as genai


def translate(code: str) -> HttpResponse:
	model = genai.GenerativeModel(model_name="tunedModels/js-to-ts-model-001")
	typescript_translation = model.generate_content(code)

	return HttpResponse(typescript_translation.text)
