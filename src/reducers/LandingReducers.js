import {
  ON_SUCCESS_FETCH_PLANET,
  IS_LOADING,
  ON_FAILURE_FETCH_PLANET,
  HANDLE_TAB_SELECTION,
} from '../constants/ActionsTypes';
import {tabName} from '../utils/utils';

const INITIAL_STATE = {
  data: [],
  isLoading: true,
  tabList: tabName,
  favList: [],
  selectedTab: 'All',
};

export default function LandingReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ON_SUCCESS_FETCH_PLANET:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case 'HANDLE_TAB_SELECTION':
      return {
        ...state,
        tabList: action.payload.list,
        selectedTab: action.payload.selectedTab,
      };
    case 'ADD_TO_FAV_LIST':
      return {
        ...state,
        favList: action.payload.newFavList,
        data: action.payload.updatedList,
      };
    case 'REMOVE_FAV':
      return {
        ...state,
        favList: action.payload.updatedList,
        data: action.payload.updatedInitalList,
      };
    default:
      return state;
  }
}
