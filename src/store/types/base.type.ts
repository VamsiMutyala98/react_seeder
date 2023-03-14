export enum EBaseActions {
  SET_LOGIN_DETAILS = "@@SET_LOGIN_DETAILS",
  SET_DASHBOARD_DETAILS = "@@SET_DASHBOARD_DETAILS",
}

export interface ILoginPage {
  header: string;
}

export interface IDashboardPage {
  header: string;
}

export interface IBaseState {
  login: ILoginPage;
  dashboard: IDashboardPage;
}

export interface IRootState {
  root: IBaseState;
}

export interface ILoginSliceAction {
  name: string;
}

export interface IDashboardSliceAction {
  name: string;
}

export type BaseAction = {
  type: EBaseActions;
  payload: IBaseState;
};
