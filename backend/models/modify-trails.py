import sys
import json

def main(argv):
    with open(argv[1]) as f:
        objs = eval(f.read())
    all_trails = '['
    for trail in objs:
        trail['rating'] = float(trail['rating'])
        del trail['length']
        del trail['elevation_gain']
        del trail['route_type']
        trail['reviews'] = ['']
        json_trail = json.dumps(trail) + ',\n'
        all_trails += json_trail
    print(all_trails[:-2] + ']')

if __name__ == "__main__":
    main(sys.argv) 
