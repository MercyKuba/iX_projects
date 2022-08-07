exports.fiboSeq = function fiboSeq() {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for (let i = 2; i < 10; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr
}
console.log(this.fiboSeq())