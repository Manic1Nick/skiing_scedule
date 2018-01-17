import ShowErrors from '../ui/ShowErrors'
import { clearError, clearAllErrors } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
	return {
		errors: state.errors
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClearError: bindActionCreators(clearError, dispatch),
		onClearAllErrors: bindActionCreators(clearAllErrors, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowErrors)

/*export default () => (
	<ShowErrors 
		errors={['sample error']} 
		onClearError={index => console.log('todo: clear error at', index)} 
	/>
)
*/