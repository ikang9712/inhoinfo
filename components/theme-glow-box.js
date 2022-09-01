import { motion } from "framer-motion"
const ThemeGlowBox = ({children, fromColor, toColor}) => {

    return (
        <div>
            <motion.div 
                
                style={{
                    backgroundColor: fromColor,
                    display: "flex",
                    placeItems: "center",
                    placeContent: "center",
                    borderRadius: 8,
                    padding:10,
                    marginBottom: 5
                }}
                animate={{backgroundColor: [fromColor,toColor] }}
                transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default ThemeGlowBox