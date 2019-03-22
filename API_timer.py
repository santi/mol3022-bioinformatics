import requests
import time


times = []
print('Starting loop')
for i in range(10):

    start = time.time()
    requests.get('http://jaspar.genereg.net/api/v1/matrix/MA0002.1/')
    end = time.time()
    times.append(end - start)
    print(f'got response. Time: {end - start}')
print(times)