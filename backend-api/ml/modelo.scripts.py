import sys
import pickle

atributo = sys.stdin.readline()

pkl_file_name = '/home/daniel/Desktop/Pasteleria/backend-api/ml/model/file_pkl_model.pkl'

loaded_model = pickle.load(open(pkl_file_name, 'rb'))

print(loaded_model.predict([[atributo,0,0,200]])[0])

sys.stdout.flush()