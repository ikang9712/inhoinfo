import React from 'react';
import videojs from 'video.js';
import PropTypes from 'prop-types';
import 'video.js/dist/video-js.css';

const WorkVideo = ({options, onReady}) => {
    const videoRef = React.useRef(null);
    const playerRef = React.useRef(null);

    const ready = async() => {
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;
            const player = playerRef.current = await videojs(videoElement, options, () => {
                videojs.log('player is ready: init');
                onReady && onReady(player);
            });
        } else {
            // const player = playerRef.current;
            // player.autoplay(options.autoplay)
            // player.src(options.sources)
        } 
    }
    // React.useEffect(()=> {
    //     if (!playerRef.current) {
    //         const videoElement = videoRef.current;
    //         if (!videoElement) return;
    //         const player = playerRef.current = videojs(videoElement, options, () => {
    //             videojs.log('player is ready: init');
    //             onReady && onReady(player);
    //         });
    //     } else {
    //         // const player = playerRef.current;
    //         // player.autoplay(options.autoplay)
    //         // player.src(options.sources)
    //     }
    // }, [options, videoRef]);

    React.useEffect(()=> {
        ready()
        videojs.log("player ref changed")
        const player = playerRef.current;

        return () => {
            if (player) {
                player.dispose();
                playerRef.current = null;
            }
        }
    }, [playerRef])
    return (
        <>
            <div data-vjs-player>
                <video ref={videoRef} className='video-js vjs-16-9'/>
            </div>
        </>
    )
}

WorkVideo.propTypes = {
    options: PropTypes.object.isRequired,
    onReady: PropTypes.func.isRequired
}

export default WorkVideo