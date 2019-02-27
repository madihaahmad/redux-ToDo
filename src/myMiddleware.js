const forbiddenWords = ["spam", "money"];
// export function myMiddleware({ dispatch }) {
//   return function(next) {
//     return function(action) {
//       // do your stuff
//       if (action.type === "ADD_NEW") {
//         const foundWord = forbiddenWords.filter(word =>
//           action.payload.title.includes(word)
//         );
//         if (foundWord.length) {
//           return dispatch({ type: "FOUND_BAD_WORD" });
//         }
//       }
//       return next(action);
//     };
//   };
// }

export function myMiddleware({ dispatch }) {
  return next => action => {
    if (action.type === "ADD_NEW") {
      const foundWord = forbiddenWords.filter(word =>
        action.payload.title.includes(word)
      );
      if (foundWord.length) {
        return dispatch({ type: "FOUND_BAD_WORD" });
      }
    }
    next(action);
  };
}
