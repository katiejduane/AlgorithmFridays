string = 'UDDDUDUU'
num = len(string)

def counting_valleys(n,s):
    sea_level = 0
    valley_count = 0
    path = list(s)
    for i in range(0, n):
        if path[i] == "U":
            sea_level += 1
            if sea_level == 0:
                valley_count += 1
        elif path[i] == "D":
            sea_level -= 1
    print (valley_count)


counting_valleys(num, string)
