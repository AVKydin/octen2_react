import {useState} from "react";

const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue)

    function toggleValue(valueState:boolean){
        setValue(value => !valueState)
    }

    return [value, toggleValue]
}
