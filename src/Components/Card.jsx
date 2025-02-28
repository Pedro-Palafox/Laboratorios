import React from "react"

export const PokemonCard = ({id, setup, punchline = []}) => {
    return (
        <section style = {{height:200}}>
            <h2 className="text-capitalize">#{id} - { setup }.............. {punchline}</h2>
            { /*imagenes */ }
            <div>{
            }
            </div>
        </section>
    )
}
