import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router-dom'
import { addDay, clearSuggestions, suggestResortNames } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'

const mapStateToProps = (state, ownProps) => {
    return {
        suggestions: state.resortNames.suggestions,
        fetching: state.resortNames.fetching,
        history: ownProps.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewDay: bindActionCreators(addDay, dispatch),
		onClear: bindActionCreators(clearSuggestions, dispatch),
		onChange(value) {
			if (value) dispatch(suggestResortNames(value))
			else bindActionCreators(clearSuggestions, dispatch)
		}
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)  

export default withRouter(Container)

/*export default withRouter(
    (props) => 
        <AddDayForm suggestions={[]} 
                fetching={false} 
                router={props.router} 
                onNewDay={day => console.log('todo: add day', day)}
                onChange={value => console.log('todo: suggest', value)}
                onClear={() => console.log('todo: clear suggestions')} />
)*/