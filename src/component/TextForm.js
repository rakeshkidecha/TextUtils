import React,{useState} from 'react';

export default function TextForm(props){

    const [text,setText] = useState("")
    const [words,setWords] = useState(0); 
    const [charactors,setCharactors] = useState(0);
    const [whiteSpace,setWhiteSpace] = useState(0);
    const [sentences,setSentences] = useState(0);

    function convertToUppercase(){
        if(text===""){
            props.showAlert("Plase Enter somthing!","warning");
            return;
        }
        setText(text.toUpperCase());
        props.showAlert("Text converted to uppercase!","success")
    }

    function convertLoverUppercase(){
        if(text===""){
            props.showAlert("Plase Enter somthing!","warning");
            return;
        }
        setText(text.toLowerCase());
        props.showAlert("Text convrted to lowercase!","success")
    }

    function clearText(){
        setText("");
        if(text===""){
            props.showAlert("Plase Enter somthing!","warning");
            return;
        }
        props.showAlert("Text cleared!","success")
        setCharactors(0);
        setWhiteSpace(0);
        setSentences(0);
        setWords(0);
    }

    const wordCounter = ()=>{
        if (text.trim() === "") {
            setWords(0);
        } else {
            const newWords = text.trim().split(/\s+/);
            setWords(newWords.length); 
        }
    }

    const carectorsCounter = ()=>{
        setCharactors(text.replace(/\s+/g,'').length);
    }

    const whiteSpaceCounter = async () => {
        console.log(`cdaf${text}dfda`);
        console.log(text.includes(" "))
        const spaces =text.match(/\s/g);
        console.log(spaces)
        setWhiteSpace(spaces ? spaces.length : 0);
    };

    const sentencesCountor=()=>{
        setSentences(text.split(/[.!?]+/g).length);
    }

    const copyText=(e)=>{
        if(text===""){
            props.showAlert("Plase Enter somthing!","warning");
            return;
        }
        console.log(text)
        navigator.clipboard.writeText(text);
        props.showAlert("Copied!","success");
    }

    requestAnimationFrame(() => {
        wordCounter();
    });

    function handleOnChange(e){
        console.log(e.target.value)
        setText(e.target.value);
        console.log(text)
        if(e.target.value===""){
            clearText();
        }else{
            wordCounter();
            carectorsCounter();
            whiteSpaceCounter();
            sentencesCountor();
        }
    }

    return (
        <>
            <div className={`${props.mode==="dark"?"text-white":props.mode==="red"?"text-danger":"text-black"}`}>
                <h3 className={`${props.mode==="dark"?"text-white":props.mode==="red"?"text-danger":"text-primary"}`}>{props.heading}</h3>
                <textarea  id="text" className={`form-control  border border-2 ${props.mode==="dark"?"text-white bg-black":props.mode==="red"?"text-white bg-danger":"text-balck bg-white"}`} onInput={handleOnChange} value={text} rows="7"></textarea>
                <button className='btn btn-primary my-2' onClick={convertToUppercase}>To UpperCase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={convertLoverUppercase}>To UpperCase</button>
                <button className='btn btn-primary my-2 mx-2' onClick={clearText}>Clear</button>
                <button className='btn btn-primary my-2' onClick={copyText}>Copy to Clipboard</button>
            </div>
            <h3 className={`${props.mode==="dark"?"text-white":props.mode==="red"?"text-danger":"text-primary"}`}>Text Summary</h3>
            <p className={`${props.mode==="dark"?"text-white":props.mode==="red"?"text-danger":"text-white"}`}>you read this in {0.008 * words} minuts</p>
            <table className={`table ${props.mode==="dark"?"table-dark":props.mode==="red"?"table-danger":"table-white"} table-bordered border-primary`}>
                <thead>
                    <tr>
                        <td>Words</td>
                        <td>Charactors</td>
                        <td>Sentents</td>
                        <td>Whitespace</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{words}</td>
                        <td>{charactors}</td>
                        <td>{sentences}</td>
                        <td>{whiteSpace}</td>
                    </tr>
                </tbody>
            </table>    
            <h3 className={`${props.mode==="dark"?"text-white":props.mode==="red"?"text-danger":"text-primary"}`}>Preview</h3>
            <p className={`my-4 ${!props.mode==="dark"?"text-white":props.mode==="red"?"text-danger":"text-black"}`}>{text===""?"Exnter above somthing to preview":text}</p>
        </>
    )
}