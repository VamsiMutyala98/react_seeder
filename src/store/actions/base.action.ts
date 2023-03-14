import {
  setLoginDetails as setSliceLoginDetails,
  setDashboardDetails as setSliceDashboardDetails,
} from "../slice/base.slice";
import { ILoginSliceAction, IDashboardSliceAction } from "../types/base.type";

export const setLoginDetails = ({ name }: ILoginSliceAction) => {
  return (dispatch: any) => dispatch(setSliceLoginDetails({ name }));
};

export const setDashBoardDetails = ({ name }: IDashboardSliceAction) => {
  return (dispatch: any) => dispatch(setSliceDashboardDetails({ name }));
};
