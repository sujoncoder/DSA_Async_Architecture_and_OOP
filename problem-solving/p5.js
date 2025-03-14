const arr = [1, 2, 3];
function fn(arr) {
    let returnedArray = [];
    for (let i = 0; i < arr.length; i++) {
        const res = arr[i] += 1
        returnedArray.push(res)
    }
    console.log(returnedArray)
}

fn(arr)