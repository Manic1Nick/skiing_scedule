import SkiDayList from '../ui/SkiDayList'
import { removeDay, addError } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return {
        days: state.allSkiDays,
        filter: ownProps.match.params.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveDay: bindActionCreators(removeDay, dispatch) ,
        addError: bindActionCreators(addError, dispatch)       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList)

/*const sample = [
  {
    "resort": "Stowe",
    "date": "2017-1-28",
    "powder": false,
    "backcountry": false
  },
  {
    "resort": "Tuckerman's Ravine",
    "date": "2017-1-31",
    "powder": false,
    "backcountry": true
  },
  {
    "resort": "Mad River Glen",
    "date": "2017-2-12",
    "powder": true,
    "backcountry": false
  }
]

export default (props) => {  
    return <SkiDayList days={sample}
                filter={props.match.params.filter}
                onRemoveDay={date => console.log('remove day on', date)} />}
*/