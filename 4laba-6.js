'use strict'
const max = (array) => {
    let value = -Infinity
    for(const rows of array) {
        for(const num of rows) {
            if(num > value) {
                value = num
            }
        }
    }
    return value
}
console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
