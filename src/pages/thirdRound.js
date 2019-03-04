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
                    songAuthor: "1",
                    songTitle: "Wojtek, wojtek"
                },
                {
                    id: 50,
                    plateId: 87,
                    songAuthor: "2",
                    songTitle: "Gdy poranne wstają zorze"
                },
                {
                    id: 51,
                    plateId: 69,
                    songAuthor: "3",
                    songTitle: "Ściernisko"
                },
                {
                    id: 52,
                    plateId: 82,
                    songAuthor: "4",
                    songTitle: "Mój przyjacielu"
                },
                {
                    id: 53,
                    plateId: 84,
                    songAuthor: "5",
                    songTitle: "Łowickie chłopoki"
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