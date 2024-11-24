function contains(arr, target) {
    if (arr[0] === target) {
        return true;
    }
    if (arr.length === 0) {
        return false;
    }else{
        return contains(arr.slice(1), target);
    }
}
console.log(contains([4,35,1,7,8],1 ));