function mergeSort(unsortedArray){
    if(unsortedArray.length <= 1){
      return unsortedArray
    }
    const center = Math.floor(unsortedArray.length / 2)
  
    const left = unsortedArray.slice(0,center)
    const right = unsortedArray.slice(center)
  
    return merge(mergeSort(left), mergeSort(right))
  }
  
  function merge(left,right){
    let resultArray = []
    let leftIndex = 0
    let rightIndex = 0
  
    while (leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
          resultArray.push(left[leftIndex])
          leftIndex++
        } else {
          resultArray.push(right[rightIndex])
          rightIndex++
        }
    }
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
  }
  
  const myList = [3,2,5,4,1,8,7,9,10]
  console.log("neeeee", mergeSort(myList))