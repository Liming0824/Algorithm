function count_sets(arr, total){
   let count = 0;
     function rec(arr, total){
       if(total === 0) count+=1;
       for(let i = 0; i< arr.length; i++){
         if(total >= arr[i]){
          rec(arr.slice(i+1), total-arr[i], count);
         }
       }
     }
     rec(arr, total);
   return count;
}
