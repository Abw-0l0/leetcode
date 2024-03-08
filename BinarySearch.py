'''Below are all linear search related problems mostly from leetcode, 
uncomment problem you want to text and comment it back before testing 
next problem or else duplicate error will occure'''

#======================================================================
#search integer in the array: return -1 if not found else index/value
#======================================================================

def Search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

arr = [1,2,3,4,5,6,7,8,9]
target = 8
result = Search(arr, target)

if result == -1:
    print("Target not found")
else:
    print(f"Element found at index {result}")

