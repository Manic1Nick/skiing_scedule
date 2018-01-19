import Menu from './ui/Menu'
import ShowErrors from './containers/ShowErrors'
import GoalProgress from './containers/GoalProgress'
import '../stylesheets/index.scss'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import SkiDayCount from './containers/SkiDayCount'
import AddDayForm from './containers/AddDayForm'
import SkiDayList from './containers/SkiDayList'

export const App = () =>
    <div className="app">
        <ShowErrors />
        <Switch>
            <Route exact path="/" component={SkiDayCount} />
            <Route exact path="/add-day" component={AddDayForm} />
            <Route path='/list-days' component={SkiDayListContainer} />
            <Route path="/*" component={Whoops404} /> 
        </Switch>
        <GoalProgress />
        <Menu />
    </div>

const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Whoops, route not found</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>

const SkiDayListContainer = () => 
    <Switch>
        <Route exact path='/list-days' component={SkiDayList} />
        <Route path='/list-days/:filter' component={SkiDayList} />        
    </Switch>