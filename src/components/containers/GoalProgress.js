import GoalProgress from '../ui/GoalProgress'
import { setGoal, addError } from '../../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        goal: state.goal,
        current: state.allSkiDays.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewGoal: bindActionCreators(setGoal, dispatch),       
        addError: bindActionCreators(addError, dispatch)        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalProgress)

/*export default () =>
    <GoalProgress current={10} 
                  goal={20}
                  onNewGoal={goal => console.log('todo: change goal', goal)} />*/
