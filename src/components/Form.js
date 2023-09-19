import React, {useState} from 'react'


export default function Form(props) {

  const upcase= () =>{
    let newup = text.toUpperCase();
    settext(newup);
    props.showAlert("success", "converted to uppercase!");
  }

  const lowcase= () =>{
    let newlow = text.toLowerCase();
    settext(newlow);
    props.showAlert("success", "converted to lowercase!");
  }

  const clear= () =>{
    let newcl = "";
    settext(newcl);
    props.showAlert("success", "text cleared!");
  }

  const handleon= (event) =>{
    console.log("on change")
    settext(event.target.value);

  }

  const [text, settext] = useState('');

  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleon} id="Textarea" rows="6"></textarea>
      </div>
      <button type="button" disabled={text.length===0} className="btn btn-secondary mx-2" onClick={upcase}>convert into uppercase</button>
      <button type="button" disabled={text.length===0} className="btn btn-secondary mx-2" onClick={lowcase}>convert into lowercase</button>
      <button type="button" disabled={text.length===0} className="btn btn-secondary" onClick={clear}>clear text</button>

      <div className='container my-3'>
        <h1>Text Summary</h1>
        <p>{text.length} characters and {text.split(" ").filter((ele)=>{return ele.length!==0}).length} words</p>
      </div>

    </div>
  )
}
