import { Course } from './modules/courses/models/course';

export interface AppState {
  courses: Course[];
}
export const INITIAL_STATE: AppState = {
  courses: []
};

export function rootReducer(state, action) {
  return state;
}
