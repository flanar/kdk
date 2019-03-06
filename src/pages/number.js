import React from "react"

class Number extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backToMenu: false,
            highlight: 0,
            numberId: props.numberId,
            numberHighlightId: props.numberHighlightId,
            numberValue: props.numberValue,
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, false)
    }

    handleKeyDown(event) {
        if(event.keyCode === this.state.numberId) {
            if(this.state.highlight === 1) {
                this.setState(state => {
                    state.highlight = 0
                })
            } else {
                this.setState(state => {
                    state.highlight = 1
                })
            }
            this.forceUpdate()
        } else if(event.keyCode === this.state.numberHighlightId) {
            if(this.state.highlight === 2) {
                this.setState(state => {
                    state.highlight = 0
                })
            } else {
                this.setState(state => {
                    state.highlight = 2
                })
            }
            this.forceUpdate()
        } else if(event.keyCode === 8) {
            this.setState(state => {
                state.backToMenu = true
            })
            this.forceUpdate()
        }
    }

    render() {
        if(this.state.backToMenu) {
            this.props.history.push('/')
        }
        return <div>
            <div className="line">
                <div className={ `${this.state.highlight === 0 ? " number" : ""} ${this.state.highlight === 1 ? "number-highlight" : ""} ${this.state.highlight === 2 ? "highlighted" : ""}` }>{ this.state.numberValue }</div>
            </div>
        </div>
    }

}

export default Number