
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(Array.isArray(matrix)){
      const newArray = [];
      for (let i=0; i<matrix.length; i++){
        if(i % 2 == 0){
          for (let j=0; j<matrix[i].length; j++){
            newArray.push(matrix[i][j]);
            console.log(matrix[i][j]);
          }
        } else {
          for (let j=matrix[i].length-1; j>=0; j--){
            newArray.push(matrix[i][j]);
            console.log(matrix[i][j]);
          }
        }
        
      }
      return newArray;
    } else {
      return [];
    }
    
}
