import React, { FC, ReactElement } from "react";
import { connect, ConnectedProps } from "react-redux";
import { setLoginDetails } from "../../store/actions/base.action";
import { IRootState } from "../../store/types/base.type";

interface IProps extends PropsFromRedux {}

const Login: FC<IProps> = ({ loginDetails, ...props }): ReactElement => {
  React.useEffect(() => {
    setTimeout(() => {
      props.setLoginDetails({ name: "Hey, Its Login Page" });
    }, 10000);
  }, [props]);
  return (
    <div className="login">
      <h1 data-testid="login-heading" className="login-heading">
        {loginDetails.header}
      </h1>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => ({
  loginDetails: state.root.login,
});

const mapDispatchToProps = { setLoginDetails };

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Login);
