import React, {useState} from 'react'

function TextUtiles(props) {

    const upperCase = () =>{
        let newText  = text.toUpperCase();
        setText(newText);
        props.alert('Text converted in Uppercase','success');
    }
    const lowerCase = () =>{
        let newText  = text.toLowerCase();
        setText(newText);
        props.alert('Text converted in Lowercase','success');
    }
    const clearText = () =>{
        let newText  =(' ');
        setText(newText);
        props.alert('Text Cleard','success');
    }
    const onchangeHandeler =(event)=>{
        setText(event.target.value);
    }


    const [text, setText] = useState('Enetr Your Text Here')
  return (
    <div className='container' style={props.style}>
      <form>
        <div className="form-group">
            <h2 className='mx-2'>Enter Yor Text Here</h2>
            <textarea className="form-control border" onChange={onchangeHandeler} style={props.style} id="Textarea1" rows="8" value={text}></textarea>
        </div>
        <div className="container my-2">
            <button type="button" onClick={upperCase} className="btn btn-primary mx-1">Convert to UpperCase</button>
            <button type="button" onClick={lowerCase} className="btn btn-primary mx-1">Convert to LowerCase</button>
            <button type="button" onClick={clearText} className="btn btn-primary mx-1">Clear Text </button>
        </div>

        </form>
        <div className="container my-2">
            <h3>Text Analysis</h3>
            <p>Total characters-{text.length}, Words- {(text.split(' ').length)-1}, Reading Time - {(0.008*text.split(' ').length)-0.008} Minutes</p>
            <h3>Text Preview</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default TextUtiles