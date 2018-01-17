import { PropTypes } from 'prop-types'
import '../../stylesheets/GoalProgress.scss'

const GoalProgress = ({current, goal=10, onNewGoal=f=>f, addError=f=>f}) => {

    let _input, progress

    if (current > goal) {
        addError('Goal must be greater than current days. Increase your goal!')
        progress = 100
    } else {
        progress = Math.floor(current / goal * 100)
    }

    const goalChange = newGoal => {
        if (newGoal >= current || newGoal > goal) onNewGoal(newGoal)
        else addError('Goal must be greater than current days!')
    }

    return (
        <div className="goal-progress">
            <progress value={current} max={goal}/>
            <span>{progress}%</span>
            <input type="number"
                   ref={input =>_input=input}
                   value={goal}
                   onChange={() => goalChange(_input.value)}/>
            <span>days</span>
        </div>
    )
}

GoalProgress.propTypes = {
    current: PropTypes.number.isRequired,
    goal: PropTypes.number,
    onNewGoal: PropTypes.func,
    addError: PropTypes.func
}

export default GoalProgress