import C from '../constants'
import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import fetch from 'isomorphic-fetch'
import { fetchResortNames, changeSuggestions, addError, cancelFetching } from '../actions'

const consoleMessages = store => next => action => {

	let result

	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('ski days', store.getState().allSkiDays.length)
	result = next(action)

	let { allSkiDays, goal, errors, resortNames } = store.getState()

	console.log(`

		ski days: ${allSkiDays.length}
		goal: ${goal}
		fetching: ${resortNames.fetching}
		suggestions: ${resortNames.suggestions}
		errors: ${errors.length}

	`)

	console.groupEnd()

	return result
}

export const resortNames = store => next => action => {

	switch(action.type) {
    	case C.SUGGEST_RESORT_NAMES :
    		store.dispatch(fetchResortNames())

    		fetch('http://localhost:3333/resorts/' + action.payload)
        		.then(response => response.json())
        		.then(suggestions => {
        		    store.dispatch(changeSuggestions(suggestions))
        		})
        		.catch(error => {
        		    store.dispatch(addError(error.message))
        		    store.dispatch(cancelFetching())
        		})
  	}

    return next(action)
}

export default (initialState={}) => {
	return createStore(
		appReducer, 
		initialState,
		applyMiddleware(reduxThunk, consoleMessages, resortNames)
	)
}

/*export default (initialState={}) => {
	return applyMiddleware(reduxThunk, consoleMessages, resortNames)(createStore)(appReducer, initialState)
}*/