my_silly_array = [3, 5, 1, 10, 55, 2, 13, 84]

# function to find the (index of) smallest number in an array
def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

# print(findSmallest(my_silly_array))

def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr

print(selectionSort(my_silly_array))
