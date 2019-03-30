const result = (state = {}, action) => {
  switch (action.type) {
    case 'ADD':
      return {...state, reduxSum: +action.n1 + +action.n2}
      
    default:
      return state
  }
}

export default result 
