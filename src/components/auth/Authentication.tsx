import React from "react";
import { connect } from "react-redux";
import { EAuth } from "../../models/enums/EAuth";
import { googleClientId } from "../../models/globals/globals";
import { IAuthState } from "../../models/IAuthState";
import { signInAction, signOutAction } from "../../store/actions/actions";
import { CustomButton } from "../../styled/buttons/AuthButton";

interface IAuthProp {
  signInAction: (par: IAuthState) => void;
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
    isSignedIn
      ? this.props.signInAction(this.auth.currentUser.get().getId())
      : this.props.signOutAction();
  };

  onAuthSingIn = () => {
    this.auth.signIn();
  };
  onAuthSingOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <CustomButton onClick={this.onAuthSingOut} primary title="Sign out" />
      );
    } else {
      return (
        <CustomButton primary title="Sign in" onClick={this.onAuthSingIn} />
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
