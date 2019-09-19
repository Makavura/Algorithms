const bubleSort = (unsortedArray) => {
    let len = unsortedArray.length
    for(let i =1 ; i < len; i++){
      let key = unsortedArray[i]
      let k = i - 1
      while( k>=0 && unsortedArray[k] > key){
        unsortedArray[k + 1] = unsortedArray[k]
        k = k - 1
      }
      unsortedArray[k + 1 ] = key
    }
    return unsortedArray
  }
  
  const mylist = [3,2,4,7,8,9,1,6,]
  
  console.log("+++++",bubleSort(mylist))