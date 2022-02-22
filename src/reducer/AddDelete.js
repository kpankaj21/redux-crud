const initialState = {
  list: [],
};
const chnageTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "Add_value":
      //   const { id, data } = action.payload;

      //   return {
      //     ...state,
      //     list: [
      //       ...state.list,
      //       {
      //         id: id,
      //         data: data
      //       },
      //     ],
      //   };

      const { id, data } = action.payload;

      return {
         ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "Delete_value":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

       

    case "Remove_all":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default chnageTheNumber;
