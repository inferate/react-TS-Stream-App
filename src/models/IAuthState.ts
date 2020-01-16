import { IFormActionsState } from "./IFormActions";

export const initialAuthState: IAuthState = {
  isSignedIn: false,
  userId: ""
};

export interface IAuthState {
  readonly isSignedIn: boolean;
  readonly userId: string;
}

export const initialStreamState: IFormActionsState = {
  id: 0,
  title: "",
  description: ""
};
