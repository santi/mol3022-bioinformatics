import json

uniq = {}
shortened_list = []

with open('matrices.json') as json_file:  
    data = json.load(json_file)
    for m in data:
        if uniq.get(m['matrix_id']):
            raise RuntimeError()
        shortened_list.append({
            'matrix_id': m['matrix_id'],
            'name': m['name']
        })

shortened_list.sort(key=lambda m: m['matrix_id'])
with open('matrices_short.json', 'w') as f:
    json.dump(shortened_list, f)
    
print('done')