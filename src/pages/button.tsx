import Navbar from "@/utils/navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Button(){
    const [show, setShow] = useState(false);

    function handleClickShow() {
        setShow(true);
    }

    function handleClickDontSchow(){
        setShow(false);
    }

    return(
        <div className="button-page-parent">
            <header>
                <Navbar/>
            </header>
            <h3>Awesome button</h3>

            <div className="button-container">
                <motion.button
                    onClick={handleClickShow}
                    whileHover={{
                        opacity: 1.1,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)"
                    }}
                    transition={{
                        duration: 3,
                        type: "spring"
                    }}
                    initial={{
                        y: -250
                    }} 
                    animate={{
                        y: -10,
                    }}
                    className="button-19" 
                    role="button"
                >
                    &apos;Click me&apos;
                </motion.button>

                {show && (
                    <motion.h1
                        initial={{
                            y: 300
                        }}
                        animate={{
                            y: -20
                        }}
                    >
                        I'm beautiful no ?
                    </motion.h1>
                )}
            </div>
        </div>
    )
}