import axios from 'axios';
import {
  ON_SUCCESS_FETCH_PLANET,
  IS_LOADING,
  ON_FAILURE_FETCH_PLANET,
} from '../constants/ActionsTypes';
import {API_BASE_URL} from '../constants/ApiConstants';
import {
  updateTabList,
  updateAddFavList,
  updatedIntialListData,
  updateRemoveFavList,
  updateInitalListAfterRemove,
} from '../utils/utils';

export const LandingAction = () => {
  return (dispatch) => {
    dispatch({type: IS_LOADING});
    axios.get(API_BASE_URL).then((res) => {
      if (res.status === 200) {
        dispatch({type: ON_SUCCESS_FETCH_PLANET, payload: res.data});
      }
    });
  };
};

export const handleTabSelection = (name, list) => {
  return (dispatch) => {
    let updatedlist = updateTabList(name, list);
    dispatch({
      type: 'HANDLE_TAB_SELECTION',
      payload: {selectedTab: name, list: [...updatedlist]},
    });
  };
};

export const handleUpdateFavList = (planet, favList, prevList) => {
  return (dispatch) => {
    let updatedList = updatedIntialListData(planet, prevList);
    let newFavList = updateAddFavList(planet, favList);
    dispatch({type: 'ADD_TO_FAV_LIST', payload: {newFavList, updatedList}});
  };
};

export const handleRemoveFav = (id, favList, prevList) => {
  return (dispatch) => {
    let updatedInitalList = updateInitalListAfterRemove(id, prevList);
    let updatedList = updateRemoveFavList(id, favList);
    dispatch({type: 'REMOVE_FAV', payload: {updatedList, updatedInitalList}});
  };
};
