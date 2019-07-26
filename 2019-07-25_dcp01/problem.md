# Problem statement

Given a list of numbers and a number `k`, return whether any two numbers from the list add up to `k`.

For example, given `[10, 15, 3, 7]` and `k` of `17`, return `true` since `10 + 7` is `17`.

Bonus: Can you do this in one pass?

# Initial thoughts

1. Loop over array storing differences.
2. As you loop over array, check previously stored differences against current element.
3. The bonus is actually an easier solution because there are less loops to worry about.
