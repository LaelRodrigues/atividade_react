import { useState } from "react"

type QuantityType = {
    value: number
    min?: number
    max?: number
}

export default function Quantity(props: QuantityType) {
    const {value, min = 0, max = 10} = props
    const [quant, setQuant] = useState(value)

    const updateValue = (newValue: number) => {
        if(min <= newValue && newValue <= max) {
            setQuant(newValue => newValue +1)
            setQuant(newValue => newValue +1)
            setQuant(newValue => newValue +1)
        }
    } 

    return (
        <span>
            {quant}
            <button onClick={() => updateValue(quant + 1)}>+</button>
            <button onClick={() => updateValue(quant + 1)}>-</button>
        </span>
    )

}