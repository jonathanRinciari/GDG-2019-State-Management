import { Action } from '@ngrx/store';

export enum ActionTypes {
  Reset = '[Title] Reset',
  Update = '[Title] Update'
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}

export class Update implements Action {
  readonly type = ActionTypes.Update;
  constructor(public payload: { title: string }) {}
}