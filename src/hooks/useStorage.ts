import {useEffect, useState} from "react";
import {type} from "node:os";

const useStorage = (key, localStorageObj, defaulValue) =>{
    const [value, setValue] = useState(()=>{

       let jsonValue =  localStorageObj.getItem(key);

       if(jsonValue!==null) return JSON.parse(jsonValue);
       if(typeof defaulValue === "function"){
           return defaulValue();
       } else {
           return defaulValue;
       }
    })

    useEffect(() => {
        if(value === undefined) return localStorageObj.removeItem(key)
        localStorageObj.setItem(key, JSON.stringify(value))
    }, [key, value, localStorageObj]);

    return [value, setValue]

}
