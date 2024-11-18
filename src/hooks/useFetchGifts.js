import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifts = (categoria) => {
  
    const [imagen, setimagen] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGif(categoria);
        setimagen(newImages);
        setisLoading(false);
    }


    useEffect(
        () => { getImages() },
        []
    );

    return {
        imagen,
        isLoading
    }
}
