const initialState = { articles: [], done: [] };

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW":
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    case "MOVE_TASK": {
      console.log("Move task");
      return Object.assign({}, state, {
        done: state.done.concat(action.payload),
        articles: state.articles.filter(task => task.id !== action.payload.id)
      });
    }
    case "MOVE_BACK": {
      console.log("Move Back task");
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload),
        done: state.done.filter(task => task.id !== action.payload.id)
      });
    }
    case "DELETE_TASK": {
      console.log("delete task");
      return Object.assign({}, state, {
        articles: state.articles.filter(task => task.id !== action.payload.id)
      });
    }
    case "DELETE_DONE": {
      console.log("delete task");
      return Object.assign({}, state, {
        done: state.done.filter(task => task.id !== action.payload.id)
      });
    }

    case "GET_DATA": {
      console.log(action.payload);
      return Object.assign({}, state, {
        users: action.payload
      });
    }

    default:
      return state;
  }
}
