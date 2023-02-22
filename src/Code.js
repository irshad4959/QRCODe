import {useState } from 'react';
import QRCode from 'react-qr-code';
function Code()
{
    const [value,setValue]= useState();
    const [back,setBack]  = useState('gray');
    const [fore,setFore]  = useState('red');
    const [size,setSize]  = useState(256);
     return(
        <div className="App">
            <center>
            <br />
            <br />
            <input 
            type="text" onChange={(e)=>setValue(e.target.value)} placeholder="Value of Qr-code"
            />
            <br />
            <br />
            <input type="text" onChange={(e)=>setBack(e.target.value)} placeholder="Background color"/>
            <br/>
            <br/>
            <input  type="text" onChange={(e)=>setFore(e.target.value)} placeholder="Forground color"/>
            <input type="number" onChange={(e)=>setSize(parseInt(e.target.vaule ===     ' '? 0: e.target.value, 10))} placeholder="Size of Qr-code"/>
            <br />
            <br />

            {value && (
                <QRCode 
                title ="QR-Code" 
                value ={value}
                bgColor={back}
                fgColor={fore}
                size={size === ' '? 0 : size}

                />
            )}
            </center>
        
        </div>
    );
}
export default Code;