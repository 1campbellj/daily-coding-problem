# Problem Statement

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`. If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

Follow-up: what if you can't use division?

# First thoughts

1. Loop through array multiplying all the numbers together, similar to a factorial, giving product `p`
2. Make a new array with the same length, and populate each element having position `i` with the value `p/arr[i]`
3. Without division
   1. To accomplish the same result without division loop over the array once for each element, creating a new product and skipping one element each loop
