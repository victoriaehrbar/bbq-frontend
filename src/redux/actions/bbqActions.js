export const getBbqs = () => {
    return (dispatch) => {
      fetch(`http://localhost:3001/bbqs`)
        .then((res) => res.json())
        .then((bbqs) =>
          dispatch({ type: "FETCH_BBQS_SUCCESS", payload: bbqs })
        );
    };
  };
  
  export const createBbq = (data) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/bbqs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bbq: data }),
      })
        .then((res) => res.json())
        .then((bbq) =>
          dispatch({ type: "CREATE_BBQ_SUCCESS", payload: bbq })
        );
    };
  };
  