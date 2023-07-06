import Navbar from "@/utils/navbar";
import image from "../assets/space.jpg"
import Image from "next/image";

export default function Card(){
    return(
        <div>
            <header>
                <Navbar/>
            </header>
            
            <div className="blog">
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
            </div>
        </div>
    )
}