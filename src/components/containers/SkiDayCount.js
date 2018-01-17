import SkiDayCount from '../ui/SkiDayCount'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		total: state.allSkiDays.length,
		powder: state.allSkiDays.filter(day => day.powder).length,
		backcountry: state.allSkiDays.filter(day => day.backcountry).length
	}
}

export default connect(mapStateToProps)(SkiDayCount)

/*export default () => (
	<SkiDayCount 
		total={state.allSkiDays.length}
		powder={state.allSkiDays.filter(day => day.powder).length}
		backcountry={state.allSkiDays.filter(day => day.backcountry).length}
	/>
)
*/