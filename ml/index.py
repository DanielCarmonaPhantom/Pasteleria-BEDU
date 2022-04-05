import os

import numpy as np
import pandas as pd

import requests

url = 'http://localhost:3000/api/v1/orders'

r = requests.get(url)

orders = pd.DataFrame(r.json())

orders.to_csv('./ml/data/orders.csv', index=False)

# print(os.getcwd())