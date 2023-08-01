"use client"

import React, { useState, createContext, useContext } from "react"

const CounterContext = createContext(null)

const CounterContextProvider = ({children} : {children: React.ReactNode}) => (
    <CounterContext.Provider value={useState(0)}>
        {children}
    </CounterContext.Provider>
)

const Container = () => (
    <div>
        <AddOneButton />
    </div>
)

const AddOneButton = () =>{
    const [, setCounter] = useContext(CounterContext)
    return(
        <div>
            <button className={'outline outline-1 outline-gray-500'} 
            onClick={()=> setCounter((v)=> v+1)}>Add one</button>
        </div>
    )
}

const Counter = () => { 
    const [counter] = useContext(CounterContext)
    return(
        <div>Counter : {counter}</div>
    )
    }

function CounterUseState(){
    return <CounterContextProvider>
        <Container />
        <Counter />
    </CounterContextProvider>

}

export default function CardPage(){
    return(
        <div>
            <CounterUseState />
            <CounterUseState />
        </div>
    )
}