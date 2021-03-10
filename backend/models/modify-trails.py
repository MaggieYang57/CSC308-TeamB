import sys
import json


def main(argv):
    with open(argv[1]) as f:
        objs = eval(f.read())
    with open(argv[2]) as f:
        images = f.readlines()
    all_trails = '['
    i = 0
    for trail in objs:
        trail_img = images[i]
        i += 1
        if trail["difficulty"] == "easy":
            trail["difficulty"] = 1
        elif trail["difficulty"] == "moderate":
            trail["difficulty"] = 3
        elif trail["difficulty"] == "hard":
            trail["difficulty"] = 5
        trail["rating"] = [float(trail["rating"])]
        trail["reviews"] = []
        if  "Mountain biking" in trail["tags"] or  "Road biking" in trail["tags"]:
            trail["biking"] = True
        else:
            trail["biking"] = False
        if "Dogs on leash" in trail["tags"] or "Dog friendly" in trail["tags"]:
            trail["dog_friendly"] = True
        else:
            trail["dog_friendly"] = False
        if  "Horseback riding" in trail["tags"]:
            trail["horseback_riding"] = True
        else:
            trail["horseback_riding"] = False
        if  "Bird watching" in trail["tags"]:
            trail["bird_watching"] = True
        else:
            trail["bird_watching"] = False
        if  "kid friendly" in trail["tags"]:
            trail["family_friendly"] = True
        else:
            trail["family_friendly"] = False
        del trail["tags"]
        trail["difficulty"] = [trail["difficulty"]]
        trail["imagesrc"] = trail_img
        json_trail = json.dumps(trail) + ',\n'
        all_trails += json_trail
    print(all_trails[:-2] + ']')

if __name__ == "__main__":
    main(sys.argv)