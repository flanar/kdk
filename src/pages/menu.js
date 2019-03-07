import React from "react"
import Link from "gatsby-link"

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstRound: false,
            secondRound: false,
            thirdRound: false,
            fourthRound: false,
            finalRound: false,
            highlightFirst: false,
            highlightSecond: false,
            highlightThird: false,
            highlightFourth: false,
            highlightFinal: false
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, false)
    }

    handleKeyDown(event) {
        if(event.keyCode === 49) {
            this.setState(state => {
                state.firstRound = true
            })
            this.forceUpdate()
        } else if(event.keyCode === 50) {
            this.setState(state => {
                state.secondRound = true
            })
            this.forceUpdate()
        } else if(event.keyCode === 52) {
            this.setState(state => {
                state.thirdRound = true
            })
            this.forceUpdate()
        } else if(event.keyCode === 51) {
            this.setState(state => {
                state.fourthRound = true
            })
            this.forceUpdate()
        } else if(event.keyCode === 53) {
            this.setState(state => {
                state.finalRound = true
            })
            this.forceUpdate()
        } else if(event.keyCode === 81) {
            this.setState(prevState => ({
                highlightFirst: !prevState.highlightFirst
            }));
        } else if(event.keyCode === 87) {
            this.setState(prevState => ({
                highlightSecond: !prevState.highlightSecond
            }));
        } else if(event.keyCode === 82) {
            this.setState(prevState => ({
                highlightThird: !prevState.highlightThird
            }));
        } else if(event.keyCode === 69) {
            this.setState(prevState => ({
                highlightFourth: !prevState.highlightFourth
            }));
        } else if(event.keyCode === 84) {
            this.setState(prevState => ({
                highlightFinal: !prevState.highlightFinal
            }));
        }
    }
    
    render() {
        if(this.state.firstRound) {
            this.props.history.push('/firstRound')
        } else if(this.state.secondRound) {
            this.props.history.push('/secondRound')
        } else if(this.state.thirdRound) {
            this.props.history.push('/thirdRound')
        } else if(this.state.fourthRound) {
            this.props.history.push('/fourthRound')
        } else if(this.state.finalRound) {
            this.props.history.push('/finalRound')
        }
        return <div>
            <div className="container">
                <div className="heartContainer">
                    <div className="heart"></div>
                </div>
                <div className="menuContainer">
                    <Link to="/firstRound/" className={ `${"round"} ${this.state.highlightFirst ?  "roundHighlighted" : ""}` }>Runda Pierwsza</Link>
                    <Link to="/secondRound/" className={ `${"round"} ${this.state.highlightSecond ?  "roundHighlighted" : ""}` }>Runda Druga</Link>
                    <Link to="/fourthRound/" className={ `${"round"} ${this.state.highlightFourth ?  "roundHighlighted" : ""}` }>Runda Koszerna</Link>
                    <Link to="/thirdRound/" className={ `${"round"} ${this.state.highlightThird ?  "roundHighlighted" : ""}` }>Runda Czwarta</Link>
                    <Link to="/finalRound/" className={ `${"round"} ${this.state.highlightFinal ?  "roundHighlighted" : ""}` }>Wielki Finał</Link>
                </div>
            </div>
        </div>
    }

}

export default Menu