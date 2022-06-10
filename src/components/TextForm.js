import React,{useState} from 'react';


export default function TextForm(props) {

    const clickhandler = ()=>{
        //console.log("clik event fired" + text);
        const settxt= text.toUpperCase();
        setText(settxt);
        props.showAlert("Data has converted to upper case","success")
    }
    const handlelowClick = ()=>{
        const lotext = text.toLowerCase();
        setText(lotext);
        props.showAlert("Data has converted to lower case","success")
    }
    const onchangHandler= (event)=>{
        setText(event.target.value)
    }
    const [text,setText]= useState("");


    const clearTextClick=()=>{
        setText('');
        props.showAlert("Text cleared","success")
    }

    const copyTextClick=()=>{
        var copyText = document.getElementById("mybox");
        /* Select the text field */
        copyText.select();           
         /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        props.showAlert("Text Copied","success")
    }

    const removeExtraSpace=()=>{
       const newString = text.replace(/\s+/g,' ').trim();
        setText(newString);
        props.showAlert("Extra space removed","success")
    }

    return (
        <>
    <div className='mx-4'>
   <h3 style={{color : props.mode==='dark'?'white':'black'}}>{props.title}</h3>
    <div className="mb-3">     
      <textarea value={text} onChange={onchangHandler} className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}}  rows="8" id="mybox"/>
    </div>

    <button style={{color : props.mode==='dark'?'white':'black'}} className='btn btn-primary mx-2 my-2' onClick={clickhandler} >Convert To Upper Case</button>
    <button style={{color : props.mode==='dark'?'white':'black'}} className='btn btn-primary mx-2 my-2' onClick={handlelowClick}>Convert to lower case</button>

    <button style={{color : props.mode==='dark'?'white':'black'}} className='btn btn-primary mx-2 my-2' onClick={clearTextClick}>Clear Text</button>
    <button style={{color : props.mode==='dark'?'white':'black'}} className='btn btn-primary mx-2 my-2' onClick={copyTextClick}>Copy Text</button>
    <button style={{color : props.mode==='dark'?'white':'black'}} className='btn btn-primary mx-2 my-2' onClick={removeExtraSpace}>Remove Extra Space</button>




     </div>

     <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
         <h2>your text summary</h2>
         <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} character</p>
         <h3>Reading Time</h3>
         {0.008* text.split(" ").length}           
           <h3>Preview</h3>
           <p >{text}</p>
     </div>
     </>
  );
}
