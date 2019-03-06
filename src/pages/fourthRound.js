import React from "react"

import Box from "./box"

class FirstRound extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: [
                {
                    id: 49,
                    plateId: 81,
                    songAuthor: "Chrum chrum 1",
                    songTitle: "Początek rzeszowa"
                },
                {
                    id: 50,
                    plateId: 87,
                    songAuthor: "Chrum chrum 2",
                    songTitle: "Oberek rzeszowkski"
                },
                {
                    id: 51,
                    plateId: 69,
                    songAuthor: "Chrum chrum 3",
                    songTitle: "Motor to stara kurwa"
                },
                {
                    id: 52,
                    plateId: 82,
                    songAuthor: "Chrum chrum 4",
                    songTitle: "Szabasówka"
                },
                {
                    id: 53,
                    plateId: 84,
                    songAuthor: "Chrum chrum 5",
                    songTitle: "Lej się chmielu"
                }
            ]
        };
    }

    render() {
        return <div>
        <div className="boxContainer">
            { this.state.songs.map((song) => {
                return ( <Box history={this.props.history} key={ song.id } songId={ song.id } plateId={ song.plateId } songAuthor={ song.songAuthor } songTitle={ song.songTitle}></Box> )
            }) }
        </div>
    </div>
    }
}

export default FirstRound