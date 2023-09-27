import { type } from '@testing-library/user-event/dist/type';
import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation';
import React from 'react'
import { useState, useEffect } from 'react';


function CaseConverter() {
    let [txt, setTxt] = useState("");

    function change(e) {
        setTxt(e.target.value)



        if (txt != "") {
            setLine_count(txt.split("\n").length)

            try {
                let r_S = txt.match(/\S+/g);
                setWord_count(r_S.length)
            }
            catch (error) {
                console.log(error)
            }

            setCharacter_count(txt.length)

        }


        else {
            setLine_count("0")

            setWord_count("0")
            setCharacter_count("0")
        }
    }



    function upperCase() {
        ;
        let newText = txt.toUpperCase();
        setTxt(newText);
    }

    function clearText() {
        setTxt("");
    }

    function copyText() {

        if (txt == "") {
            setSpan("")
        }
        else {

            navigator.clipboard.writeText(txt);
            setSpan("Copy To Clipboard")
            setSpan_styling({
                color: "white",
                // border : "1px solid #208000",
                backgroundColor: "#208000",
                width: "700px"
            })
        }
    }

    function Capitilized() {

        try{
            if (txt !== "") {
                // setTxt("")
                // console.log(typeof txt)
                let lowerAll = txt.toLowerCase();
                let ary_txt = lowerAll.match(/\S+/g);
                let element = ""
    
                for (let i = 0; i < ary_txt.length; i++) {
                    element += ary_txt[i][0].toUpperCase() + ary_txt[i].substring(1) + " ";
    
                }
    
                let cptl = element.toString()
                setTxt(cptl.trim());
    
    
            }
            else {
                setTxt("")
            }
        }

        catch(error){
            console.log(error)
        }

       


        //    console.log(ary_txt)
        // console.log(ary_txt);

        // let x = a.length;
        // console.log(x);


        // let [element , setElement ] = useState("");







        // for( let i = 0 ; i < a.length ; i++)
        // {
        //    var  capital =  a[i][0].toUpperCase() + a[i].substring(1);
        //     // console.log(capital);


        //     // console.log(capital)
        //     // setTxt(capital);
        // }


    }

    function InVeRsE() {
        // let lengthTXT = txt.length;

        // console.log(lengthTXT);
        // console.log(txt[0]);

        // let get_txt = txt.toLowerCase();


        let smallTXT = txt.toLowerCase();
        let trimTXT = smallTXT.trim();
        console.log(trimTXT);
        let split_txt = trimTXT.split("");
        // console.log(split_txt[0])
        // console.log(split_txt);
        // console.log(typeof split_txt)
        let alterChar = "";


        for (let j = 0; j < split_txt.length; j++) {
            alterChar += split_txt[j].toUpperCase();
            j++
            alterChar += split_txt[j];
        }


        setTxt(alterChar.toString());
        // console.log(txt);
        // console.log(alterChar);
        // console.log(typeof alterChar)




    }

    function r_e_s() {

        try{
            if (txt != "") {
                let Remove_Extra_Spaces = txt.match(/\S+/g);
                console.log(Remove_Extra_Spaces.toString())
                let remove_coma = Remove_Extra_Spaces.toString();
    
                setTxt(remove_coma.replaceAll(",", " "))
            }
            else {
                setTxt("")
            }
        }
    catch(error){
        console.log(error)
    }

       

        //    setSpan(Remove_Extra_Spaces.toString() )
    }

    function Title_case() {

        try{
            if (txt != "") {
                let splitTxt = txt.match(/\S+/g);
                // console.log(splitTxt);
                // console.log(typeof splitTxt)
                let tilcs = "";
                for (let i = 0; i < splitTxt.length; i++) {
                    tilcs += splitTxt[i][0].toUpperCase() + splitTxt[i].substring(1).toLowerCase() + " ";
    
                }
    
                let tilecase = tilcs.trim();
                setTxt(tilecase);
            }
            else {
                setTxt("");
            }
        }
        catch(error){
            console.log("There is an error because input has null value")
        }
        

    }

    function alter_case() {
        let smallTXT = txt.toLowerCase();
        let trimTXT = smallTXT.trim();
        let split_txt = trimTXT.split("");
        // console.log(split_txt[0])
        // console.log(split_txt);
        // console.log(typeof split_txt)
        let alterChar = "";


        for (let j = 0; j < split_txt.length - 1; j++) {
            alterChar += split_txt[j];
            j++
            alterChar += split_txt[j].toUpperCase();
        }


        setTxt(alterChar.toString());
    }

    function sentence_case() {
        // console.log(txt[0]);
        // let trimTXT =  txt.trim();
        // // trimTXT.[0].toUpperCase() + trimTXT.split(1).toLowerCase()
        // console.log(trimTXT)
        // setTxt(trimTXT)

        try{
            if (txt != "") {
                let RemoveExtraSpaces = txt.match(/\S+/g);
                let Removed_EX = RemoveExtraSpaces.toString();
                let Remove_coma = Removed_EX.replaceAll(",", " ")
    
                let xyz = Remove_coma[0].toUpperCase() + Remove_coma.substring(1).toLowerCase()
                setTxt(xyz);
            }
    
            else {
                setTxt("")
            }
        }
        catch(error){
            console.log(error)
        }
       



    }

    function Add_comas() {

        try{
            if
            (txt != "") {
            let RemoveExtraSpaces = txt.match(/\S+/g);
            let Removed_EX = RemoveExtraSpaces.toString();
            let Remove_coma = Removed_EX.replaceAll(",", " ");

            setTxt(Remove_coma.replaceAll(" ", ","));
        }

        else {
            setTxt("")
        }
        }

        catch(error){
            console.log(error)
        }
        

        //  setTxt(txt.replaceAll(" " , ","));
    }

    // function space_check(){
    //     if ( txt != ""   )
    //     {


    //     //   console.log(txt.match(/ /g).length) 
    //       setSpan(txt.match(/ /g).length)

    //         // if ( txt.match(/ /g).length === null  )
    //         // {

    //         //     console.log(0)
    //         // }
    //         // else{
    //         //     console.log(txt.match(/ /g).length) 
    //         // }
    //     }
    //     else if( txt.match(/ /).length == null )
    //     {
    //         setSpan("zero")
    //     }
    //     else {
    //         setSpan("0")
    //         // console.log("null is!")
    //     }
    // }

    function Lower_Case() {

        try{
            if (txt != "") {

                let RemoveExtraSpaces = txt.match(/\S+/g);
                let Removed_EX = RemoveExtraSpaces.toString();
                let Remove_coma = Removed_EX.replaceAll(",", " ");
                // console.log(Remove_coma)
                setTxt(Remove_coma.toLowerCase());
            }
            else {
                setTxt("")
            }
        }
        catch(error){
            console.log(error)
        }
        
        // setTxt(txt.toLowerCase());
    }
    let [span, setSpan] = useState()

    useEffect(() => {
        setTimeout(
            () => {
                if (span != "") {

                    setSpan("")
                    setSpan_styling({})
                }
            }
            ,
            10000
        )


    },)

    let [span_styling, setSpan_styling] = useState({})


    

    let [line_count, setLine_count] = useState("0")
    let [word_count, setWord_count] = useState("0")
    let [character_count, setCharacter_count] = useState("0")


    function remove_coma() {
        setTxt(txt.replaceAll(",", " "))
    }
    return (
        <>
            <center>
                <div className='text_conversion container'  >
                    <div>
                        <textarea placeholder='Type or paste your content here....' onChange={change} value={txt} name="" id="" cols="50" rows="7" />
                    </div>

                    <div>
                        <button className='bg-warning' onClick={upperCase}  >Upper Case</button>
                        <button className='bg-warning' onClick={Lower_Case}  >Lower Case</button>
                        <button className='bg-warning' onClick={Capitilized} > Capitilized</button>
                        <button className='bg-warning' onClick={sentence_case} > sentence case</button>
                        <button className='bg-warning' onClick={Title_case} > Title case</button>
                        <button className='bg-warning' onClick={alter_case} > aLtErNaTe</button>
                        <button className='bg-warning' onClick={InVeRsE} > InVeRsE</button>
                        <button className='bg-warning' onClick={r_e_s} > Remove Extra Spaces</button>
                        <button className='bg-warning' onClick={clearText} >Clear Text</button>
                        <button className='bg-warning' onClick={copyText} > Copy To Clipboard</button>
                        {/* <button className='bg-warning' onClick={space_check} > space check</button>  */}
                        <button className='bg-warning' onClick={Add_comas} > Add comas</button>
                        <button className='bg-warning' onClick={remove_coma} > remove coma</button>
                    </div>

                    <div style={span_styling} >
                        <span  > {span} </span>
                    </div>
                    <div className=' text-light' style={{ fontWeight: "bold", fontSize: "20px" }}>
                        <span> Line Count :{line_count} </span>
                        &nbsp;
                        <span> word Count :{word_count} </span>
                        &nbsp;
                        <span> character Count :{character_count} </span>
                    </div>
                </div>

            </center>
        </>

    )
}

export default CaseConverter;