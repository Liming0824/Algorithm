var minDiffInBST = function(root) {
    let arr = [];
    let diff = Infinity;
    function inorder(root, arr){
        if(!root) return;
        inorder(root.left, arr);
        arr.push(root.val);
        inorder(root.right, arr);
    }
    inorder(root, arr);
    for(let i = 1; i< arr.length; i++){
        let temp = Math.abs(arr[i] - arr[i-1]);
        diff = temp < diff ? temp : diff;
    }
    return diff;
};
