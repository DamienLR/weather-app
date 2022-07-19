## Problems/solutions.

# 1.

Problem: I was unable to conditionally render the Card component because I couldn't check if apiResults was an empty object in an if/else statement.

Solution: create a single key/value pair (noNewSearchTerm: true) and compare that.

Alternate solution found: I could use Object.keys to check.

# 2

Problem: when a user enters an invalid search term the app breaks and causes errors.

Solution: read up on error handling using fetch. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful
