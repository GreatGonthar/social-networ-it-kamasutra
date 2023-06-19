import React, { useContext } from "react"
import { GlobalContext } from "../Weather"

export const WithGlobalState = (Component) => (props) => {
    const {state} = useContext(GlobalContext)
    return <Component {...{...props, state}}/>

}