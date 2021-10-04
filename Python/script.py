import json
import random
f = open('/Applications/MAMP/htdocs/RandomSteamGames/JSON/steamgames.json',)



data = json.load(f)

print(data['applist']['apps'][random.randrange(0,127121)])