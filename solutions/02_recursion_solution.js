var kthGrammar = function(N, K) {
    if(N === 1) return 0;
    if(K%2 === 1){
       let a = kthGrammar(N-1, (K+1)/2);
       return a === 1 ? 1 : 0;
    }else{
       let a = kthGrammar(N-1, K/2);
       return a === 1 ? 0 : 1;
    }
};
