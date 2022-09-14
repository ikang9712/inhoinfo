import React from 'react';
import { IconButton, 
    Icon, 
    useToast,
    Tooltip } from '@chakra-ui/react';
import { IoMusicalNotes } from "react-icons/io5";
import YouTube from 'react-youtube'
const Player = () => {
    const toast = useToast({variant: "toast"})
    const player = React.useRef(null)
    const [paused, setPaused] = React.useState(true)
    const [loaded, setLoaded] = React.useState(false)

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
            controls: 0,
            enablejsapi: 1,
            loop: 1
        }
    }
    const savePlayer = (e) => {
        player.current = e;
        console.log(player.current.target)
        setLoaded(true)
    }
    const play = () => {
        if (!loaded){
            return
        }
        
        if (paused){
            player.current.target.playVideo()
            setPaused(false)
            toast({
                title: 'playing',
                description: "",
                duration: 2000,
                isClosable: true,
                position: "top",
            })
        } else {
            player.current.target.pauseVideo()
            setPaused(true)
            toast({
                title: 'paused',
                description: "",
                duration: 2000,
                isClosable: true,
                position: "top"
            })
        }
    }

    return (
        <div>
            <Tooltip label='$orry - Peachy!'>
                <IconButton aria-label="music-player"
                        icon={<Icon as={IoMusicalNotes}/>}
                        mr={2}
                        onClick={play}
                />
            </Tooltip>
            <div style={{display: "none"}}>
                <YouTube
                videoId='VMyPYiKbEKU'
                opts={opts}
                onReady={(e)=>savePlayer(e)}
                />
            </div>
        </div>
    )
}

export default Player