import { BaseAction, EBaseActions, IBaseState } from "../types/base.type";

export const reducer = (state: IBaseState, action: BaseAction): IBaseState => {
  switch (action.type) {
    case EBaseActions.SET_LOGIN_DETAILS:
      return {
        ...state,
        login: action.payload.login,
      };
    default:
      return state;
  }
};

export default reducer;
