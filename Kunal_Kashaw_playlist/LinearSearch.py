##======================================================================
## https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ
## video 13/69
##======================================================================

'''Below are all linear search related problems mostly from leetcode, 
uncomment problem you want to text and comment it back before testing 
next problem or else duplicate error will occure'''

#======================================================================
#search integer in the array: return -1 if not found else index/value
#======================================================================

def linearSearch(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

arr = [1,2,3,4,5,6,7,8,9]
target = 8
result = linearSearch(arr, target)

if result == -1:
    print("Target not found")
else:
    print(f"Element found at index {result}")

#======================================================================
#search character in the array: return -1 if not found else index/value
#======================================================================

# def linearSearch(arr, target):
#     for i in range(len(arr)):
#         if arr[i] == target:
#             return i
#     return -1

# arr = 'Abdul Basit Iqbal'
# target = 'q'
# result = linearSearch(arr, target)

# if result == -1:
#     print("Target not found")
# else:
#     print(f"Element found at index {result}")

#======================================================================
#search minimum value in the array
#======================================================================

# def minimum(arr):
#     ans = arr[0]
#     for i in range(len(arr)):
#         if arr[i] < ans:
#             ans=arr[i]
#     return ans

# arr = [0.5,12,13,14,15,6,7,8,9]
# result = minimum(arr)

# print(f"Minimum value {result}")

#======================================================================
#search value in the 2D array: return -1 if not found else index/value
#======================================================================

# def search(arr2d, target):
#     for i in range(len(arr2d)):
#         for j in range(len(arr2d[i])):
#             if arr2d[i][j] == target:
#                 return i,j
#     return -1

# arr2d = [
#         [23,4,1],
#         [18,12,3,9],
#         [78,99,34,56],
#         [18,12]
#     ]
# target = 34
# result = search(arr2d, target)

# if result == -1:
#     print("Target not found")
# else:
#     print(f"Element found at index {result} which is {arr2d[result[0]][result[1]]}")

#======================================================================
#search min value in the 2D array
#======================================================================

# def minimum(arr2d):
#     ans = arr2d[0][0]
#     for i in range(len(arr2d)):
#         for j in range(len(arr2d[i])):
#             if arr2d[i][j] < ans:
#                 ans= arr2d[i][j]
#                 min= [arr2d[i][j],i,j]
#     return min

# arr2d = [
#         [23,4,1],
#         [18,12,3,9],
#         [78,99,34,56],
#         [18,12]
#     ]
# result = minimum(arr2d)

# print(f"minimum value index ({result[1]},{result[2]}) which is {result[0]}")

#======================================================================
#leetcode -> 1295. Find Numbers with Even Number of Digits
#======================================================================

# import math          #library for even function below, another easy way

# def evendigit(arr):
#     count = 0
#     for i in range(len(arr)):
#         if (digit(arr[i])):
#             count+=1
#     return count

# def digit(num):
#     return even(num) % 2 == 0

# def even(num):
#     count=0

#     if num<0:            #for negative values to make them positive
#         num = num*-1

#     if num == 0:            #for zero values to make them one
#         return 1

#     while(num>0):
#         count += 1
#         num = num // 10  # Remove the last digit from the number
    # return count
    # # return int(math.log10(num)+1)      #second single line method with math library

# arr = [12,345,2,6,7896,0,-123,22]
# result = evendigit(arr)

# print(f"Answer {result}")

#======================================================================
#Leetcode -> 1672. Richest Customer Wealth
#======================================================================

# class Solution(object):
#     def maximumWealth(self, accounts):
#         sum=0
#         for i in range(len(accounts)):
#             tempsum = 0
#             for j in range(len(accounts[i])):
#                 tempsum += accounts[i][j]
#             if(tempsum>sum):
#                 sum = tempsum
#         return sum
                
# solution = Solution()

# accounts = [
#     [1, 2, 3],
#     [4, 5, 6],
#     [7, 8, 9]
# ]

# result = solution.maximumWealth(accounts)

# print(result)  # Output: 24 (the maximum wealth is 24, which is the sum of [7, 8, 9])
