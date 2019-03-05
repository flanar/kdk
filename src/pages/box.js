import React from "react"

class Box extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backToMenu: false,
            showSongTitle: true,
            highlight: false,
            songId: props.songId,
            plateId: props.plateId,
            songAuthor: props.songAuthor,
            songTitle: props.songTitle
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.handlePlateClick = this.handlePlateClick.bind(this);
    }
  
    handleClick() {
        this.setState(prevState => ({
            showSongTitle: !prevState.showSongTitle
        }));
    }

    handlePlateClick() {
        this.setState(prevState => ({
            highlight: !prevState.highlight
        }));
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, false)
    }

    handleKeyDown(event) {
        if(event.keyCode === this.state.songId) {
            this.setState(prevState => ({
                showSongTitle: !prevState.showSongTitle
            }));
        } else if(event.keyCode === this.state.plateId) {
            this.setState(prevState => ({
                highlight: !prevState.highlight
            }));
        }
        else if(event.keyCode === 8) {
            this.setState(state => {
                state.backToMenu = true
            })
            this.forceUpdate()
        }
    }

    render() {
        if(this.state.backToMenu) {
            this.props.history.replace('/')
        }
        return <div>
            <div className="line">
                <div className={ this.state.highlight ? "plate-highlight" : "plate" } onClick={this.handlePlateClick}></div>
                <div className="box" onClick={this.handleClick }>
                    <div className={ `${this.state.showSongTitle ? "box-front" : "box-front-clicked"} ${this.state.highlight ? "highlighted" : ""}` }>
                        { this.state.songAuthor }
                    </div>
                    <div className={ this.state.showSongTitle ? "box-back" : "box-back-clicked" }>
                        { this.state.songTitle }
                    </div>
                </div>
            </div>
        </div>
    }

}

export default Box