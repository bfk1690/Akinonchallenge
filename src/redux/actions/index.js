import store from '../store';

export function sliderIndex(data) {
  store.dispatch({
    type: 'CHANGE_INDEX',
    payload: data,
  });
}
