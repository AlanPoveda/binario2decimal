import React, { useState } from 'react';

function Input(){
    const [input, setInput] = useState()
    
    const handleChange = event =>{
        setInput(event.target.value);
    }

    const calculo = ()=>{

        const binario = [128,64,32,16,8,4,2,1]
        const arrayBinario = input.split('');
        let resposta = 0

        //console.log(arrayBinario.length)
        for (let i = 0; i < arrayBinario.length; i++){

            if (parseInt(arrayBinario[i]) == 1){
                resposta += binario[i];
            }
        }console.log(resposta)

    
        //console.log(arrayBinario)
        //console.log(binario)


    }

    return(
        <div> 
            <input typre='number'className='entrada-de-dados' placeholder='Coloque o número binário aqui'
            onChange={handleChange}
            ></input>
            <button className='botao-input' onClick={calculo}>Transformar</button>

        </div>
    )
}

export default Input