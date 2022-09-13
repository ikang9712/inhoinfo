import React from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import { IconButton, Icon } from '@chakra-ui/react';
import { IoMusicalNotes } from "react-icons/io5";

const MusicPlayer = () => {
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div 
        style={{ display: 'inline-block'}}
        initial={{y:-20, opacity:0}}
        animate={{y:0, opacity:1}}
        exit={{y:20, opacity:0}}
        transition={{duration:0.3}}
        >
            <IconButton aria-label="Toggle theme"
            icon={<Icon as={IoMusicalNotes}/>}
            mr={2}
            onClick={musicControl()}
            >
            </IconButton>
        </motion.div>
    </AnimatePresence>
    )
}

export default MusicPlayer