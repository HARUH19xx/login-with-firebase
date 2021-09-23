import { createSelector } from "reselect"

const usersSelector = (state) => state

export const getUserId = createSelector(
    [usersSelector],
    state => state.uid,
)

export const getIsSignedIn = createSelector(
    [usersSelector],
    state => state.isSigendIn,
)