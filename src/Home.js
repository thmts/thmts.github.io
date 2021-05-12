import React from 'react'


const topics = [
    "versioning",
    "Monitoring",
    "Project tracking",
    "Automatic differenciation",
]

const puzzle = [
    "Color point connections",
    "Reversi",
    "Traveling Salesman Problem" /* http://labo.algo.free.fr/defi250/defi_des_250_villes.html */
]

export default function Home () {
    return <div>
        <h1>Home</h1>
        <div>
            <div>Topics</div>
            <ul>
                {topics.map (e => <li key={e}>{e}</li>)}
            </ul>
            <div>Puzzles </div>
            <ul>
                {puzzle.map (e => <li key={e}>{e}</li>)}
            </ul>
        </div>
    </div>
}