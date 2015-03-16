This module is intended to replicate the functionality provide by an async map function but instead uses promises.

The promsieMap function takes two inputs.
* An array to "map" over
* A function to apply to each element in the array, first input is the array value, second input is a callback function which should be invoked upon the functions completion

If the promiseMap is successful, it will resolve and the results are obtainable as an array (within .then)
If the promiseMap fails, it will reject and the error will be passed along (to .then)
