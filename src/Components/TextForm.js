import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        const newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLoClick=()=>{
        const newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success")
    }
    const handleTiClick=()=>{
        const newText= text.bold()
        setText(newText)
        props.showAlert("Converted to Bold","success")
    }
    const handleResetClick=()=>{
        const newText="";
        setText(newText)
        props.showAlert("Reset","success")
    }
    const handleCopy=()=>{
        var copyText= document.getElementById("textbox")
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copied","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText]= useState(""); 

    return (
        <div>
            <div className="mb-3 mt-3">
                <h1 className= {`text-${props.mode==="light"?"dark":"light"}`}> {props.name}</h1>
                <textarea className="form-control" placeholder="Enter the text" value={text} onChange={handleOnChange} 
                style={{ backgroundColor: props.mode==="light"? "white" : "black",
                         color: props.mode==="light"? "black" : "white" }} id="textbox" rows="8"></textarea>
                <button disabled={text.length===0} className="btn btn-primary mt-2 ms-2" onClick={handleUpClick}>Click me to Get in UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mt-2 ms-2" onClick={handleLoClick}>Click me to Get in LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mt-2 ms-2" onClick={handleTiClick}>Click me to Get in Bold</button>
                <button disabled={text.length===0} className="btn btn-danger mt-2 ms-2" onClick={handleResetClick}>Click me to Reset</button>
                <button disabled={text.length===0} className="btn btn-danger mt-2 ms-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className={`mb-5 container text-${props.mode==="light"?"dark":"light"}`}>
            <h1>Your Text Details are Here:</h1>
                    <p> {text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
                <p>Reading Time: {0.0076*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes </p>
                <h3>Preview:</h3>
                <p> {text.length>0 ? text : "Enter the Text in TextArea to Preview it"}</p>
            </div>
        </div>
    )
}
