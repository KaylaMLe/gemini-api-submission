import json


def load_file_content(file_path: str) -> str:
	with open(file_path, 'r') as f:
		content = f.read()
		
	return content
	
def load_data_from_manifest(manifest_file: str) -> list[dict[str, str]]:
	with open(manifest_file, 'r') as f:
		manifest = json.load(f)
	
	data = []

	for entry in manifest:
		js_content = load_file_content(entry['javascript'])
		ts_content = load_file_content(entry['typescript'])
		
		data.append({'javascript': js_content, 'typescript': ts_content})
	
	return data
