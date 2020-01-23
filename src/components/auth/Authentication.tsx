import React from "react";
import { connect } from "react-redux";
import { EAuth } from "../../models/enums/EAuth";
import { buttonTitle } from "../../models/enums/EHeadings";
import { googleClientId } from "../../models/globals/globals";
import { IAuthState } from "../../models/IAuthState";
import { signInAction, signOutAction } from "../../store/actions/actions";
import { RootAppState } from "../../store/reducers/rootReducer";
import { CustomButton } from "../../styled/buttons/AuthButton";

interface IAuthProps {
  signInAction: (par: IAuthState) => object;
  signOutAction: () => object;
  isSignedIn: boolean;
}

class Authentication extends React.Component<IAuthProps> {
  auth: any;
  title: any;
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

  onAuthChange = (isSignedIn: IAuthProps) => {
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

  renderAuthButton = () => {
    const { isSignedIn } = this.props;
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <CustomButton
          onClick={this.onAuthSingOut}
          primary
          title={buttonTitle.SignOut}
          icon
        />
      );
    } else {
      return (
        <CustomButton
          primary
          onClick={this.onAuthSingIn}
          icon
          title={buttonTitle.SignIn}
        />
      );
    }
  };

  public render() {
    return <>{this.renderAuthButton()}</>;
  }
}

const mapStateToProps = (state: RootAppState) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signInAction, signOutAction })(
  Authentication
);
