let defaultState = {
  index: 0,
};

const carousel = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_INDEX':
      return {
        index: action.payload,
      };
    default:
      return state;
  }
};

export default carousel;
