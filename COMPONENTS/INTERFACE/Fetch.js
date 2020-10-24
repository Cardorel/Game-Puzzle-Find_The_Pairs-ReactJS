import {useEffect} from 'react';
import fetch from "isomorphic-unfetch";




export const FetchingData = async ( dispatchImage) => {
            //fetch the data
            const res = await fetch("http://localhost:3000/api/data");
            //Convert to Json
            const images = await res.json();
            //dispatch all data when is fetched
            dispatchImage(images);
}