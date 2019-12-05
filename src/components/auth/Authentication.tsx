import React from "react";
import { connect } from "react-redux";
import { EAuth } from "../../models/enums/EAuth";
import { googleClientId } from "../../models/globals/globals";
import { signInAction, signOutAction } from "../../store/actions/actions";
import { CustomButton } from "../../styled/buttons/AuthButton";

interface IAuthProp {
  signInAction: () => void;
  signOutAction: () => void;
  isSignedIn: any;
}

class Authentication extends React.Component<IAuthProp, {}> {
  auth: any;
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: googleClientId,
          scope: EAuth.email
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn: any) => {
    isSignedIn ? this.props.signInAction() : this.props.signOutAction();
  };

  onAuthSingIn = () => {
    this.auth.signIn();
  };
  onAuthSingOut = () => {
    this.auth.singOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <CustomButton onClick={this.onAuthSingIn} primary title="Sign In" />
      );
    } else {
      return (
        <CustomButton primary title="Sign out" onClick={this.onAuthSingOut} />
      );
    }
  }

  public render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state: any) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signInAction, signOutAction })(
  Authentication
);
