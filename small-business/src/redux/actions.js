
export const addBar = (bar) => {
  return {
    type: 'ADD_BAR',
    value: bar
  }
}

export const deleteBar = (index) => {
  return {
    type: 'DELETE_BAR',
    value: index
  }
}

