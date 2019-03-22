import json

uniq = {}
shortened_list = []

with open('jaspar_matrices.json') as json_file:  
    data = json.load(json_file)
    for m in data:
        if uniq.get(m['matrix_id']):
            raise RuntimeError()
        else:
            uniq[m['matrix_id']] = True
            shortened_list.append({
                'matrix_id': m['matrix_id'] + '-JASPAR',
                'name': m['name'],
                'type': 'jaspar'
            })


shortened_list.sort(key=lambda m: m['matrix_id'])
with open('jaspar_matrices_short.json', 'w') as f:
    json.dump(shortened_list, f)


full_list = []
shortened_list = []
with open('uniprobe_matrices_backup.json') as json_file:  
    data = json.load(json_file)
    for m in data:
        if uniq.get(m['matrix_id']):
            print('not unique')
            continue
        else:
            uniq[m['matrix_id']] = True
            full_list.append({
                **m,
                'matrix_id': m['matrix_id'] + '-UNIPROBE'
            })
            shortened_list.append({
                'matrix_id': m['matrix_id'] + '-UNIPROBE',
                'name': m['matrix_id'],
                'type': 'uniprobe'
            })



full_list.sort(key=lambda m: m['matrix_id'])
with open('uniprobe_matrices_long.json', 'w') as f:
    json.dump(full_list, f)

shortened_list.sort(key=lambda m: m['matrix_id'])
with open('uniprobe_matrices_short.json', 'w') as f:
    json.dump(shortened_list, f)

print('done')