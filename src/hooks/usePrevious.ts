import {useRef} from "react";

const usePrevious = (value:any) => {
    const currentRef = useRef(value);

    const previousRef = useRef()

    if(currentRef.current !== value){
        previousRef.current = currentRef.current
    }

    return previousRef.current

}
