const initialState = {
  name: '',
  age: 0,
  fruits: 0,
  fruitsHarvested: 0,
  harvestAge: 0,
  deadAge: 0,
  deadStatus: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_TREE':
      return { ...initialState, name: action.payload, harvestAge: action.harvest, deadAge: action.dead }
    case 'ADD_AGE':
      const newAge = state.age + 1
      let newFruits = 0
      if (newAge >= state.harvestAge) {
        newFruits = Math.floor(Math.random() * 7) + 3
      }
      let treeStat = state.deadStatus
      if (newAge === state.deadAge) {
        treeStat = true
      }
      return { ...state, age: newAge, fruits: newFruits, deadStatus: treeStat }
    case 'HARVEST':
      let harvested = state.fruitsHarvested + state.fruits
      return { ...state, fruits: 0, fruitsHarvested: harvested }
  }
  return state
}
