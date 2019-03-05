import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Menu from './menu'
import FirstRound from "./firstRound";
import SecondRound from "./secondRound";
import ThirdRound from "./thirdRound";
import FourthRound from "./fourthRound";
import FinalRound from "./finalRound";

class App extends React.Component {

    render() {
        return <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Menu} />
                    <Route path='/firstRound' component={FirstRound} />
                    <Route path='/secondRound' component={SecondRound} />
                    <Route path='/thirdRound' component={ThirdRound} />
                    <Route path='/fourthRound' component={FourthRound} />
                    <Route path='/finalRound' component={FinalRound} />
                </Switch>
            </BrowserRouter>
        </div>
    }

}

export default App