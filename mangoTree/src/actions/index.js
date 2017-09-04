export const startTree = (name) => {
  let deadAge = Math.floor(Math.random() * 10) + 10
  let harvestAge = Math.floor(deadAge / 2)
  return {
    type: 'START_TREE',
    payload: name,
    dead: deadAge,
    harvest: harvestAge
  }
}

export const addAge = () => {
  return {
    type: 'ADD_AGE'
  }
}

export const harvest = () => {
  return {
    type: 'HARVEST'
  }
}
