import { useEffect, useState } from "react";
import axios from "axios";

export default function GetApiHook(url){
    const [mydata, setMydata] = useState();

    useEffect(() => {
        axios.get(url).then((response)=>{
        //   console.log('GetApiHook is called ',response.data.movies);
        setMydata(response.data.movies);
        console.log("GetApiHook Succesfylly set state of data")
        }).catch(err => console.log(err))
      }, []);

      return {mydata}
}