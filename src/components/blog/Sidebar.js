import React from 'react'

function Sidebar(props) {
    return (
        <>
        <li><a href={"/blog/articoli/" +  props.data._id}>{props.data.title}</a></li>
        </>
    )
}

export default Sidebar
