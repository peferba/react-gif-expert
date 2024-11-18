import { useState } from "react"
import { AppCategorias, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);

    const onAddCategorias = (newCategoria) => {
        if (categorias.includes(newCategoria)) return;
        setCategorias([newCategoria, ...categorias])
    }

    return (
        <>

            <h1>Hola mundo</h1>


            <AppCategorias
                // setCategorias = { setCategorias}
                onNewCategorias={(event) => onAddCategorias(event)}
            />


            {
                categorias.map(
                    (categoria) => (
                        <GifGrid
                            key={categoria}
                            categoria={categoria}
                        />
                    )


                )
            }


        </>
    )
}
