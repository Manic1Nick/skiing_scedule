import C from './constants'
import fetch from 'isomorphic-fetch'

export function addDay({resort, date, powder=false, backcountry=false}) {
    return {
        type: C.ADD_DAY,
        payload: {resort,date,powder,backcountry}
    }
}

export const removeDay = date => ({
    type: C.REMOVE_DAY,
    payload: date
})

export const setGoal = goal => ({
    type: C.SET_GOAL,
    payload: goal
})

export const addError = message => ({
    type: C.ADD_ERROR,
    payload: message
})

export const clearError = index => ({
    type: C.CLEAR_ERROR,
    payload: index
})

export const clearAllErrors = () => ({
    type: C.CLEAR_ALL_ERRORS
})

export const changeSuggestions = suggestions => ({
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestions
})

export const clearSuggestions = () => ({
    type: C.CLEAR_SUGGESTIONS
})

export const fetchResortNames = () => ({
    type: C.FETCH_RESORT_NAMES
})

export const cancelFetching = () => ({
    type: C.CANCEL_FETCHING
})

export const suggestResortNames = value => ({
    type: C.SUGGEST_RESORT_NAMES,
    payload: value
})