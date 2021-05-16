import React from 'react'
import Calculator from './Calculator'


const topics = [
    "versioning",
    "Monitoring",
    "Project tracking",
    "Automatic differenciation",
]

const puzzle = [
    "Color point connections",
    "Reversi",
    "Traveling Salesman Problem"
]

const todos = () => {
        return <div>
        <Calculator />
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

export default function Projects () {
    return <div><h1>
        Projects
        <a href='/attempt.html'> Towards a static page. </a>
    </h1>
    </div>
}
