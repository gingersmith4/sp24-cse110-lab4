# Intro to JavaScript Part 2 Questions

var

1. At line 12, 2 will be printed to the console. This is because ``i`` starts at 0 and goes to one less than prices.length which is 3. Since i is declared as ``var`` it is still in scope on line 12.
2. Line 13 prints 150 to the console. This is because ``discountedPrice`` stores what the discounted price will be for variable i, which is 2 before the loop ends.
3. Line 14 prints 150 to the console.
4. This function returns a list [50, 100, 150]. This is because the function takes in a list of prices [100, 200, 300] and applies a discount of 50% to all of them.

let

5. Line 12 returns an error because ``i`` is declared with ``let`` which has a block scope, so once we are out of the for loop, ``i`` is out of scope.
6. Line 13 returns an error because ``discountedPrice`` is declared with ``let`` which has a block scope, so once we are out of the for loop, ``discountedPrice`` is out of scope.
7. Line 14 prints 150 to the console. This is because ``finalPrice`` is declared in the scope of the function, and modified in the for loop.
8. This function returns a list [50, 100, 150]. This is because the function takes in a list of prices [100, 200, 300] and applies a discount of 50% to all of them. ``discounted``, what we return, is in the function scope so we don't have an error.

const

9.  Line 11 returns an error because ``i`` is declared with ``let`` which has a block scope, so once we are out of the for loop, ``i`` is out of scope.
10. At line 12 3 is printed to the console.
11. This function returns a list [50, 50, 50]. This is because ``discountedPrice`` which stores what we add to ``discounted`` which is returned is a constant, so it cannot be changed and reflects the price of the first item.

objects

12. notation

    A. student.name

    B. student["Grad Year"]

    C. student.greeting

    D. student["Favorite Teacher"].name

    E. student.courseLoad[0]

<!-- In terminal type node to test out -->

13. Arithmetic

Part| Input        | Output | Explanation
----|------------- |--------|------------
A   | ‘3’ + 2      | '32'   | The 2 is converted to a string and they are concatenated together.                
B   | ‘3’ - 2      | 1      | 3 is converted to an int and they are subtracted.
C   | 3 + null      | 3     | null is converted to 0
D   | '3' + null    | '3null" | string concatenation
E   | true + 3      | 4     | true is converted to 4
F   | false + null  | 0     | both converted to 0
G   | '3' + undefined | '3undefined' | undefined is treated as a string to match '3'
H   | 3 + undefined | NaN | Not a number - can't add something that's not a number to 3

14. Comparison

Part| Input        | Output | Explanation
----|------------- |--------|------------
A   | '2' > 1      | true   | '2' is converted to a number
B   | '2' < '12'    | false | the first character from the left string, 2, is greater than the first character from the right string, 1
C   | 2 == '2'      | true | '2' is converted to a number
D   | 2 === '2'     | false | strict equality so a string isn't equal to an int
E   | true == 2     | false | for booleans 1 is true, 0 is false, and the other numbers don't have a boolean value
F   | true === Boolean(2) | true | Boolean(2) returns true

15.  Equals

Explain the difference between the == and === operators.

`===` is a strict equality operator so it checks equality without type conversion. `==` does a regular equality check, so it returns true for 0 == false.

16.   Loops - in seperate file
17.   Functions

This function returns [2, 4, 6]. This is beacuse in the for loop each value of the input array [1,2,3] is passed to the callback function doSomething which returns a number multiplied by 2, so the resulting array consists of 2 * each of the numbers.  

18.   separate file
19.   Output

1

4

3

2