let uniqueArr = []
const removeArrayDuplicates = (arr) => {
    if (!Array.isArray(arr)){
        arr = []
    }
    let theSet = new Set(arr)
    let uniqueArr = [...theSet]
    return uniqueArr
}
module.exports = removeArrayDuplicates