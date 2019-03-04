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
                    songAuthor: "Krosno",
                    songTitle: "Kraków"
                },
                {
                    id: 50,
                    plateId: 87,
                    songAuthor: "Kraków",
                    songTitle: "Furmani"
                },
                {
                    id: 51,
                    plateId: 69,
                    songAuthor: "Śląsk",
                    songTitle: "Obejrzyjcie Wy dziewuchy"
                },
                {
                    id: 52,
                    plateId: 82,
                    songAuthor: "Kujawy",
                    songTitle: "Oj dygu, dygu"
                },
                {
                    id: 53,
                    plateId: 84,
                    songAuthor: "Żywiec",
                    songTitle: "A idom, se idom"
                }
            ]
        };
    }

    render() {
        return <div>
        <div className="container">
            { this.state.songs.map((song) => {
                return ( <Box key={ song.id } songId={ song.id } plateId={ song.plateId } songAuthor={ song.songAuthor } songTitle={ song.songTitle}></Box> )
            }) }
        </div>
    </div>
    }
}

export default FirstRound