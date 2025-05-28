import React from "react"

export default function Badge({children = "Badge", variant = "square", color = "gray"}) {

    const className = `badge-${variant} badge-${color}`


    return (
        <div className={"badge" + " " + className}> 
            {children}
        </div>
        
    )

}