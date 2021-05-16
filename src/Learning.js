import React from 'react'

const channels = [ 
    {id:1, link:'https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw', title:'Web Development Simplified' },
    {id:2, link:'https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q', title:'Dev Ed' },
]

const sites = [ 
    {id:1, link:'https://www.w3schools.com/html/default.asp', title:'W3Schools' },
    {id:2, link:'https://developer.mozilla.org/en-US/', title:'MDN' },
]

function Web () {
    return <div>
        <div>
        <h2> Channels </h2>
            <ul>
                {channels.map ((e)=><li key={e.id}><a href={e.link}> {e.title}</a> </li> ) }
            </ul>
        </div>
        <div>
        <h2> Sites </h2>
            <ul>
                {sites.map ((e)=><li key={e.id}><a href={e.link}>{e.title} </a></li> ) }
            </ul>
        </div>

    </div>
}

export default function Learning () {
    return <div>
        <Web />
    </div>
}
