export const initialAuthState: IAuthState = {
  isSignedIn: null,
  userId: null
};

export interface IAuthState {
  isSignedIn?: any;
  userId: any;
}
