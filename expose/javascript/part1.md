# Intro to JavaScript Questions

var declaration

1. values added: 20
2. Line 13 prints  'final result: 20', there shouldn't be an error because var has function scope, not block scope so it's not limited to the if statement

let declaration

3. values added: 20
4. Line 13 returns an error because result is declared in the if block, and line 13 is outside of that block so it cannot be accessed.

const declaration

5. values added: 20
6. final result: 20