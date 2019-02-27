export function addArticle(task) {
  console.log("inside the add new action");
  return {
    type: "ADD_NEW",
    payload: task
  };
}
export function moveTask(task) {
  console.log("inside the move action");
  return {
    type: "MOVE_TASK",
    payload: task
  };
}
export function moveBack(task) {
  console.log("inside the move back");
  return {
    type: "MOVE_BACK",
    payload: task
  };
}

export function deleteTask(task) {
  return {
    type: "DELETE_TASK",
    payload: task
  };
}
export function deleteDone(task) {
  return {
    type: "DELETE_DONE",
    payload: task
  };
}

export function getData() {
  console.log("getting data");
  return dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(users =>
        dispatch({
          type: "GET_DATA",
          payload: users
        })
      );
  };
}
