const arr = [1,1,2,4,4,5]

const a1 = [...new Set(arr)]
console.log(a1)

const a2 = Array.from(new Set(arr))
console.log(a2)

const map = new Map()
const a3 = []
for(let i = 0; i < arr.length; arr++){
    if(!map.has(arr[i])){
        map.set()
    }
}