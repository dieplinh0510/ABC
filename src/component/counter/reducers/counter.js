import axios from "axios";

const initState = {
  counter: 0,
  entries: []
}

// Coi như là 1 nhà máy sử lý các action
const counterReducer = ( state = initState, action ) => {
  switch ( action.type ) {
    case "INCREMENT":
      console.log( "INCREMENT" );
      // return state + action.payload
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case "DECREMENT":
      console.log( "DECREMENT" );
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case "STORE_ENTRIES":
      return {
        ...state,
        entries: action.payload
      }
    default:
      console.log( "default" );
      return state
  }
}

export default counterReducer

