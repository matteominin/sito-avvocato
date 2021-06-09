import React from 'react'

function FormazioneCard(props) {
    return (
        <>
        <tr className="formazione__item">
            <td>{props.data.date}</td>
            <td>{props.data.title}</td>
            <td>{props.data.text}</td>
        </tr>
        <tr className="mobile">
            <td>
                <span>{props.data.title} {props.data.date}</span>
                <p> {props.data.text}</p>
            </td>
        </tr>
        </>
    )
}

export default FormazioneCard
