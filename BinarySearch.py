'''Below are all linear search related problems mostly from leetcode, 
uncomment problem you want to text and comment it back before testing 
next problem or else duplicate error will occure'''

#======================================================================
#Binary search integer in the array: return -1 if not found else index/value
#======================================================================

# def Search(arr, target):
#     start=0
#     end=len(arr)-1
#     while start<=end :
#         mid = start + (end-start)//2
#         if target < arr[mid]:
#             end = mid-1
#         elif target > arr[mid]:
#             start = mid+1
#         else:
#             return mid
#     return -1

# arr = [-18,-7,0,1,2,3,4,5,6,7,8,9]
# target = 5
# result = Search(arr, target)

# if result == -1:
#     print("Target not found")
# else:
#     print(f"Element found at index {result}")

#======================================================================
#Order agnostic Binary search in the array: return -1 if not found else index/value
#======================================================================

# def Search(arr, target):
#     start=0
#     end=len(arr)-1
#     checker=arr[start]<arr[end]
#     while start<=end :
#         mid = start + (end-start)//2
#         if target == arr[mid]:
#             return mid
#         if checker:
#             if target < arr[mid]:
#                 end = mid-1
#             else:
#                 start = mid+1
#         else:
#             if target < arr[mid]:
#                 start = mid+1
#             else:
#                 end = mid-1
#     return -1

# # arr = [9,8,7,6,5,4,3,2,1]
# arr = [1,2,3,4,5,6,7,8,9]
# target = 8
# result = Search(arr, target)

# if result == -1:
#     print("Target not found")
# else:
#     print(f"Element found at index {result}")

#======================================================================
#cieling of the target
#======================================================================

def Search(arr, target):
    start=0
    end=len(arr)-1
    checker=arr[start]<arr[end]
    if target>arr[len(arr)-1]:
        return -1
    while start<=end :
        mid = start + (end-start)//2
        if target == arr[mid]:
            return mid
        if checker:
            if target < arr[mid]:
                end = mid-1
            else:
                start = mid+1
        else:
            if target < arr[mid]:
                start = mid+1
            else:
                end = mid-1
    return start

# arr = [9,8,7,6,5,4,3,2,1]
arr = [2,4,6,8,11,16]
target = 18
result = Search(arr, target)

if result == -1:
    print("Target not found")
else:
    print(f"Element found at index {result}")
