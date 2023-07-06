import Navbar from "@/utils/navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Card(){
    const [show, setShow] = useState(true);

    function unShow(){
        setShow(false);
    }

    return(
        <div onClick={unShow}>
            <header>
                <Navbar/>
            </header>

            <AnimatePresence>
                {show && (
                    <motion.div
                        exit={{
                            y: -1000
                        }} 
                        transition={{
                            duration: 1
                        }}
                        className="blog"
                    >
                        <div className="title-box">
                            <h3>
                                Gorgeous card
                            </h3>
                            <hr/>
                            <div className="intro">
                                Framer motion
                            </div>
                        </div>  
                        <div className="info">
                            <span>
                                Simple card to show how framer motion is sexy
                            </span>
                        </div>
                            <div className="footer">
                                <div className="icon-holder">
                                    <span>
                                        <i className="fa fa-comment-o"></i>
                                    <span>no ?</span>
                            &nbsp
                                        <i className="fa fa-calendar"></i>
                                        <span>06.07.2023</span>
                                    </span>
                            </div>
                        </div>
                <div className="color-overlay"></div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}