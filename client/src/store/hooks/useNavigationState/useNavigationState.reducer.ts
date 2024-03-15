import { initialState } from './useNavigationState.constants';
import { NavigationAction, NavigationState } from './useNavigationState.types';

export const reducer = (state: NavigationState = initialState, action: NavigationAction) => {
  if (action.type === 'TOGGLE_MOBILE_DROPDOWN') {
    return {
      ...state,
      showMobileDropDown: action.payload?.showMobileDropDown ?? !state.showMobileDropDown,
    } as NavigationState;
  }
};
