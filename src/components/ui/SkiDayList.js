import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import SkiDayRow from './SkiDayRow'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import '../../stylesheets/SkiDayList.scss'

const SkiDayList = ({ days, filter, onRemoveDay=f=>f, addError=f=>f }) => {

    if (!days.length) addError('ERROR: SkiDayList must contains at least one record')

    const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ?
        days :
        days.filter(day => day[filter])

    const activeFilterStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return (
        <div className="ski-day-list">
            <table>
                <caption>double click to remove</caption>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th><SnowFlake /></th>
                    <th><Terrain /></th>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <Link 
                            to="/list-days" 
                            style={(!filter) ? activeFilterStyle : null}
                        >
                            All Days
                        </Link>
                        <Link 
                            to="/list-days/powder" 
                            style={(filter === 'powder') ? activeFilterStyle : null}
                        >
                            Powder Days
                        </Link>
                        <Link 
                            to="/list-days/backcountry" 
                            style={(filter === 'backcountry') ? activeFilterStyle : null}
                        >
                            Backcountry Days
                        </Link>
                    </td>
                </tr>
                </thead>
                <tbody>
                {
                    filteredDays.map((day, i) =>
                        <SkiDayRow key={i} {...day} onRemoveDay={onRemoveDay} />
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

SkiDayList.propTypes = {
    filter: PropTypes.oneOf(['powder', 'backcountry']),
    onRemoveDay: PropTypes.func,
    addError: PropTypes.func,
    days: (props) => (!Array.isArray(props.days)) ?
        new Error("SkiDayList days property must be an array") :
        (!props.days.length) ?
            new Error("SkiDayList days array must contain at least one record") :
            null
}

export default SkiDayList