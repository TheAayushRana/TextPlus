import React, { useState } from 'react'

export default function About(props) {
    const [myStyle] = useState({
        color: "black",
        background: "white"
    })
    // var modeText = "Dark Mode";
    // let DarktoLight = () => {
    //     if (myStyle.color === "white") {
    //         SetmyStyle({
    //             color: "black",
    //             background: "white"
    //         })
    //         modeText = "Dark Mode"
    //     }
    //     else {
    //         SetmyStyle({
    //             color: "white",
    //             background: "black"
    //         })
    //         modeText = "Light Mode"
    //     }
    // }
    return (
        <div className={`container pt-5 pb-5 text-${props.mode === "light" ? "dark" : "light"}`}>
            <div className="card bg-light text-dark" >
                <div className="card-body">
                    <h1 className="card-title">Welcome to the TextPlus Text Generator Tool</h1>
                    <p className="card-text">A very handy online text tool where you can play with your text. Change it to lower case, upper case letters & many more. Explore the options below:</p>
                </div>
            </div>
            <h3 className="container my-3">How can Be TextPlus Tool Helpful for You?</h3>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{ backgroundColor: props.mode === "light" ? "white" : "black" }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>What will Upper Case Button Do?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === "light" ? "white" : "black" }}>
                            The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
                            To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.
                            <br /><strong>THIS IS AN EXAMPLE OF UPPER CASE.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === "light" ? "white" : "black" }}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>What will Lower Case Button Do?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.
                            <br /><strong>this is an example of lower case.</strong>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={DarktoLight} type="button" className="btn btn-dark my-2">{modeText}</button> */}
        </div>
    )
}