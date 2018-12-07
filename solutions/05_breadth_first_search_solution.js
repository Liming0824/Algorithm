// # Question 1:

function symmetric(array){
    let l = 0;
    let r = array.length - 1;
    while(l <= r){
        if(array[l] && array[r] && array[l].val === array[r].val){
            l++;
            r--;
        }else if(!array[l] && !array[r]){
            l++;
            r--;
        }else{
            return false;
        }
    }
    return true;
}

var isSymmetric = function(root){
    if(!root) return true;
    let queue = [root];
    function bfs(queue){
        if(queue.length === 0) return true;
        if(symmetric(queue)){
            let newqueue = [];
            queue.forEach(el => {
                if(el){
                    newqueue.push(el.left);
                    newqueue.push(el.right);
                }
            });
            return bfs(newqueue);
        }else{
            return false;
        }
    }
    return bfs(queue);
};




// # Question 2:


var minDepth = function(root) {
    let count = 0;
    if(!root) return count;
    let queue = [root];
    function bfs(queue, count){
        if(queue.length === 0) return count;
        let newqueue = [];
        for(let i = 0; i< queue.length; i++){
            if(!queue[i].left && !queue[i].right){
                return count;
            }else{
                if(queue[i].left) newqueue.push(queue[i].left);
                if(queue[i].right) newqueue.push(queue[i].right);
            }
        }
        count++;
        return bfs(newqueue, count);
    }

    return bfs(queue, 1);
};
