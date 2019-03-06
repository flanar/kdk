import React from "react"
import ReactCountdownClock  from "react-countdown-clock"

import Number from "./number"

class FirstRound extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pause: true,
            numbers: [
                {
                    id: 49,
                    highlightId: 81,
                    value: 1
                },
                {
                    id: 50,
                    highlightId: 87,
                    value: 2
                },
                {
                    id: 51,
                    highlightId: 69,
                    value: 3
                },
                {
                    id: 52,
                    highlightId: 82,
                    value: 4
                },
                {
                    id: 53,
                    highlightId: 84,
                    value: 5
                },
                {
                    id: 54,
                    highlightId: 89,
                    value: 6
                },
                {
                    id: 55,
                    highlightId: 85,
                    value: 7
                }
            ]
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, false)
    }

    handleKeyDown(event) {
        if(event.keyCode === 32) {
            this.setState(prevState => ({
                pause: !prevState.pause
            }));
        }
    }

    render() {
        return <div>
        <div className="finalContainer">
            <div className="numberContainer">
            { this.state.numbers.map((number) => {
                return ( <Number history={this.props.history} key={ number.id } numberId={ number.id } numberHighlightId={ number.highlightId } numberValue={ number.value }></Number> )
            }) }
            </div>
            <div className="clockContainer">
            <ReactCountdownClock seconds={30}
                     color="#AA9671"
                     size={300}
                     paused={this.state.pause}
                     showMilliseconds={false}
                     />
            </div>
        </div>
    </div>
    }
}

export default FirstRound