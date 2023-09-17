// Define các action ....
export const increment = ( number ) => {
  return {
    type: "INCREMENT",
    payload: number
  }
}

export const decrement = ( number ) => {
  return {
    type: "DECREMENT",
    payload: number
  }
}

export const storeEntries = ( entries ) => {
  return {
    type: "STORE_ENTRIES",
    payload: entries
  }
}