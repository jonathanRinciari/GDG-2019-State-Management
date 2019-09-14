import { Action } from '@ngrx/store';

export enum ActionTypes {
  Reset = '[Title] Reset',
  Update = '[Title] Update'
}

export interface CustomAction extends Action {
  type: string;
  payload?: any;
}

export class Reset implements CustomAction {
  readonly type = ActionTypes.Reset;
}

export class Update implements CustomAction {
  readonly type = ActionTypes.Update;
  constructor(public payload: { title: string }) {}
}

