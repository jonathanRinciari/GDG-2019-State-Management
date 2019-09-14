import { createSelector } from "@ngrx/store";

export const selectTitle = (state: {title: string}) => state.title;


export const reverseTitle = createSelector(
  selectTitle,
  // Projector Function
  (title: string) => {
    return title.split('').reverse().join('');
  }
)