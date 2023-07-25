function randomTen()
{
    let arr = [];
    for (let i = 0; i <20;i++)
    {
        let randNum = Math.round(Math.random(Math.random())*100);
arr.push(randNum);
    }
console.log(arr);
// outPutArr(arr);
// multipleSeven(arr);
// sortByDesc(arr);
// halfPartOfZeros(arr);
// deleteFirstTreeElement(arr);
console.log(hasDuplicateElements(arr));
//newPartOfArr(arr);
console.log(evenNumbersCount(arr));
}

function outPutArr(arr)
{
for (let i = 0; i<arr.length; i++)
{
    console.log(`[${i+1}]-${arr[i]}`);
}
}
function showArr(arr)
{
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
      }
}
function multipleSeven(arr)
{
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i]%7 === 0)
        {
            console.log(`[${i+1}] - ` + arr[i] + " multiply 7");
        }
    }
}

function sortByDesc(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (parseInt(arr[i + 1]) > parseInt(arr[i])) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    showArr(arr);
  }

  function halfPartOfZeros(arr) {
for (let i =0; i < arr.length; i++)
{
    if(parseInt(i)>parseInt(Math.floor(arr.length/2)-1))
    {
        arr[i] = 0;
    }
    showArr(arr);
}

  }

  function deleteFirstTreeElement(arr)
  {
    arr.splice(0,3);
    showArr(arr);
  }
  function hasDuplicateElements(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return true;
        }
      }
    }
    return false;
  }

function newPartOfArr(arr)
{
    let newArr = [];
    for (let i = parseInt(arr.length/2); i < arr.length; i++)
    {
newArr.push(arr[i]);
    }
    showArr(newArr);
}

function evenNumbersCount(arr)
{
    let count =0;
    for (let i = 0; i < arr.length;i++)
    {
        if(parseInt(arr[i]%2)===0)
        {
            count++;
        }
        
    }
    return count;
}

randomTen();
