import React,{useState} from 'react'

export default function TextForm(props) {
    var upercase  = () =>{
        console.log("text change" + Text);
        // setText("Tou click to upercase" + Text);
        let newtext = Text.toUpperCase();
        setText(newtext);
        props.showalert("This Text is Upper case","success");
      }

      var lowercase = () =>{
        let newtext = Text.toLowerCase();
        setText(newtext);
        props.showalert("This Text is Lower case","success");
      }

      var cleartext = () => {
        let newtext = "";
        setText(newtext);
        props.showalert("This Text is Clear","success");

      }

    var handleonchange = (event) =>{
      console.log("on change");
        setText(event.target.value);
    }
    const [Text, setText] = useState("Enter a texts");
 
  return (
    <>
   <div className='container' style={{color: props.mode === 'dark' ? 'white':'gray'}}>
    <h2>{props.heading}</h2>
<div className="container">
    <label htmlFor="">Text Aria</label>
<textarea name="form-control" id="my-box" onChange={handleonchange} value={Text}
style={{backgroundColor: props.mode === 'dark' ? 'gray':'white',
color: props.mode === 'dark' ? 'white':'gray'
}}
cols="150" rows="10"></textarea>
</div>
<button className="btn btn-danger  mx-5"   onClick={upercase}>Clickupercase</button>
<button className="btn btn-warning  mx-1"  onClick={lowercase}>Clicklowercase</button>
<button className="btn btn-secondary  mx-1"  onClick={cleartext}>Clear text</button>


   </div>
   <div className="container" style={{color: props.mode === 'dark' ? 'white':'gray'}}>
    <h1>Your text summary</h1>
    <p>{Text.split(" ").length} words and characters is {Text.length}</p>
    <p>{0.008 * Text.split(" ").length} minutes to read</p>
    <h2>preview</h2>
    <p>{Text.length > 0 ? Text : "Enter something to preview"}</p>

   </div>
   </>
  )
}
