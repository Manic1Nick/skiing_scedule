import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { App, Whoops404 } from './components'
import SkiDayCount from './components/containers/SkiDayCount'
import AddDayForm from './components/containers/AddDayForm'
import SkiDayList from './components/containers/SkiDayList'

const routes = (
    <Router>
        <Route path="/" component={App}>
            <Route component={SkiDayCount}/>
            <Route path="add-day" component={AddDayForm}/>
            <Route path="list-days" component={SkiDayList}>
                <Route path=":filter" component={SkiDayList}/>
            </Route>
            <Route path="*" component={Whoops404}/>
        </Route>
    </Router>
)

export default routes