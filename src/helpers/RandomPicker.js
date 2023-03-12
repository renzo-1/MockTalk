const RandomPicker = (arr, maxItemsNum) => {
  let randomItems = [];
  while (randomItems.length < maxItemsNum) {
    let randomNum = Math.floor(Math.random() * arr.length);
    let pickedQuestion = arr[randomNum];
    // check first if questions is in the list
    if (!randomItems.includes(pickedQuestion)) randomItems.push(pickedQuestion);
  }
  return randomItems;
};

export default RandomPicker;
