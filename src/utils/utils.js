export const tabName = [
  {name: 'All', isSelected: true},
  {name: 'fav', isSelected: false},
];


export const updateTabList = (id, list) => {
  let result = list;
  result.map(item => {
    if(item.name === id) {
      item.isSelected = true
    } else {
      item.isSelected = false
    }
  })
  return result;
}

export const updateAddFavList = (planet, favList) => {
  let newList = [];
  newList = [...favList, planet];
  return newList;
}

export const updatedIntialListData = (planet, prevList) => {
  let result = prevList;
  result.map(item => {
    if(item.id === planet.id) {
      item.isFavourite = true
    }
  })
  return result;
}


export const updateRemoveFavList = (id, list) => {
  let newList = list;
  let result = newList.filter(item => item.id !== id.toString())
  return result;
}

export const updateInitalListAfterRemove = (planet, prevList) => {
  let result = prevList;
  result.map(item => {
    if(item.id === planet) {
      item.isFavourite = false;
    }
  })
  return result;
}
