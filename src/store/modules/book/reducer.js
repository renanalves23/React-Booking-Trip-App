export default function book(state = [], action) {
  switch (action.type) {
    case "ADD_RESERVATION":
      return [...state, action.trip];
    default:
      return state;
  }
}
