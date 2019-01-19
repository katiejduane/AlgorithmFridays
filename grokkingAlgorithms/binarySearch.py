numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
names = ["anna", "beth", "calvin", "dylan", "eddie", "frances", "georgia", "hannah"]

def binary_search(list, item):
    low = 0
    high = len(list) - 1
    count = 0
    while low <= high:
        mid = (low + high) / 2
        guess = list[mid]
        if guess == item:
            print count
            return mid
        if guess > item:
            count += 1
            high = mid + 1
        else:
            count +=1
            low = mid + 1
    return None


print binary_search(numbers, 3)
print binary_search(names, "hannah")
# is there another/better way to do a binary search with strings or other non-number data types?
