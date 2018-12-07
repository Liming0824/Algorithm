// Question 1:

var isSameTree = function(p, q) {
    if(!p && !q) return true;
    function dfs(p, q){
        if(!p && !q) return true;
        if(p && q){
            if(p.val === q.val){
                return dfs(p.left, q.left) && dfs(p.right, q.right);
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    return dfs(p, q);

};


// Question 2:

var hasPathSum = function(root, sum) {
    if(!root) return 0;
    function dfs(root, subSum = 0){
        subSum += root.val;
        if(!root.left && !root.right) return subSum === sum;
        if(root.left && !root.right){
            return dfs(root.left, subSum);
        }else if(!root.left && root.right){
            return dfs(root.right, subSum);
        }else{
           return dfs(root.left, subSum) || dfs(root.right, subSum);
        }
    }

    return dfs(root);
};
