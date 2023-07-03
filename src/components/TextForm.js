import React, {useState} from 'react'               // used {rfc}

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = ()=>{
        // console.log('Uppercase was clicked' + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClearClick = ()=>{
        let newText = ' '
        setText(newText)
    }
    // const handleCopyClick = ()=>{
    //     let text = document.getElementById("mybox")
    //     text.select();
    //     navigator.clipboard.writeText(text);
    // }
    const handleCopyClick = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to the Clipboard", "success")
      };
      
    const handleOnChange = (event)=>{
        console.log('Handeled onChange function')
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here ');
    return (
        <>
        <div className='container my-4' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='my-4'>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
            </div>
            <button disabled={text.trim().length === 0} className="btn btn-primary mx-2 my-2 !important" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.trim().length === 0} className="btn btn-primary mx-2 my-2 !important" onClick={handleLoClick}>Convert to Lowercase</button>
            <br></br>
            <button disabled={text.trim().length === 0} className="btn btn-primary mx-2 my-2 !important" onClick={handleClearClick}>Clear</button>
            <button disabled={text.trim().length === 0} className="btn btn-primary mx-2 my-2 !important" onClick={handleCopyClick}>Copy</button>
            
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            {/* <p> {text.split(" ").length - 1} words and {text.length} characters</p> */}
            <p>{0.008 * (text.split(" ").length - 1)} Minutes to read</p>
            <p>{text.split(/\s+/).filter(word => word !== '').length} words and {text.length} characters</p>
            <h2>Preview</h2>
            {/* <p>{text.length>0?text:"Enter something to Preview it here"}</p> */}
            {/* <p>{text=='Enter text here '?text=' ':"Enter something to Preview it here"}</p> */}
            {/* <p>{text === 'Enter text here ' ? setText('') : 'Enter something to Preview it here'}</p> */}
            <p>{text === 'Enter text here ' ? 'Nothing to Preview' : text}</p>
        </div>
        </>
    )
}
