import { ActionReducer, Action } from '@ngrx/store';
import { ActionTypes, CustomAction } from '../actions/';

export interface State {
  title: string;
}

export const initialState: State = {
  title: 'Hello GDG 2019!'
}

export const reducer: ActionReducer<State> =
  (state = initialState, action: CustomAction) => {
    switch (action.type) {
      case ActionTypes.Update:
        return {
          title: action.payload.title
        }
      case ActionTypes.Reset:
        return {
         title: 'Initial' 
        }
      default: 
        return {
          title: 'Initial'
        }
    }
  }

