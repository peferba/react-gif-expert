import { useState } from "react"


export const AppCategorias = ({onNewCategorias}) => {

    const [inputCategoria, setInputCategoria] = useState('')

    const onInputChange = ({ target }) => {
        setInputCategoria(target.value);
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if( inputCategoria.trim().length <=1) return;

        setInputCategoria('');
        onNewCategorias(inputCategoria.trim());
        

    }


    return (
        <form 
            onSubmit= { onSubmit}
        >
            <input
                type="text"
                placeholder="Ingrese la categoria"
                value={inputCategoria}
                onChange={onInputChange}
            />
        </form>

    )
}
