const insertSort = ( unsortedArray ) => {
    const len = unsortedArray.length
    for(let i = 0 ; i < len; i++){
      let cv = unsortedArray[i]
      let j
      for (j=i-1; j>=0 && unsortedArray[j] > cv; j--){
        unsortedArray[j + 1] = unsortedArray[j]
      }
      unsortedArray[j+1]  =  cv
    }
    return unsortedArray
  }
  
  
  
  const myList = [4,8,9,12,3,1,6,2,5]
  console.log("+++++",insertSort(myList))