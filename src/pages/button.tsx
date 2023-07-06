import Navbar from "@/utils/navbar";

export default function Button(){
    return(
        <div className="button-page-parent">
            <header>
                <Navbar/>
            </header>
            <h3>Awesome button</h3>
            <div className="button-container">
                <button className="button-19" role="button">Button</button>
            </div>
        </div>
    )
}