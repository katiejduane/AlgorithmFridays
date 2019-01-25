clouds = [0,0,1,0,0,0,1,0]

def jump_clouds(c):
    length = len(c)
    place = 0
    steps = 0
    while place < length - 1:
        if place + 2 >= length or c[place + 2] == 0:
            steps += 1
            place += 2
        else:
            place += 1
            steps += 1
    print steps

jump_clouds(clouds)
            

