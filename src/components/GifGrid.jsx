import { GifItem } from './GifItem';
import { useFetchGifts } from '../hooks/useFetchGifts';

export const GifGrid = ({ categoria  } ) => {


    const {imagen, isLoading} =useFetchGifts(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                {
                    imagen.map((img) => (
                        <GifItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>

        </>

    )
}
