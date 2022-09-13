import React from 'react';
import { IconButton, Icon } from '@chakra-ui/react';
import { IoMusicalNotes } from "react-icons/io5";
import YouTube from 'react-youtube'
const Player = () => {
    const player = React.useRef(null)
    const [paused, setPaused] = React.useState(true)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
            controls: 0,
            enablejsapi: 1,
        }
    }
    const savePlayer = (e) => {
        player.current = e;
        console.log(player)
    }
    const play = () => {
        if (paused){
            player.current.target.playVideo()
            setPaused(false)
        } else {
            player.current.target.pauseVideo()
            setPaused(true)
        }
        console.log(player.current.target.getVolume())
    }

    return (
        <div>
            <IconButton aria-label="Toggle theme"
            icon={<Icon as={IoMusicalNotes}/>}
            mr={2}
            onClick={play}
            >
            </IconButton>
            <div style={{display: "none"}}>
                <YouTube 
                videoId="S4UEJePR0UE"
                opts={opts}
                onReady={(e)=>savePlayer(e)}
                />
            </div>
        </div>
    )
}

export default Player