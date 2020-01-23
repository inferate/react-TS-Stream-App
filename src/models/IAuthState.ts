export const initialAuthState: IAuthState = {
  isSignedIn: false,
  userId: ""
};

export interface IAuthState {
  readonly isSignedIn: boolean;
  readonly userId: string;
}
