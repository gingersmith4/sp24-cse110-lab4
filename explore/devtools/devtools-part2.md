# Answers for part 3 questions
1. What was the bug?

The inputs were being treated as strings, so adding them resulted in string concatenation rather than addition. This means that 4 + 5 returned 45 instead of 9.

2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.

I would use the parseInt() function to convert the inputs to an integer before adding them.
