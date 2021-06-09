import React from 'react'

function FormazioneCard(props) {
    return (
        <tr className="formazione__item">
            <td>{props.data.date}</td>
            <td>{props.data.title}</td>
            <td>{props.data.text}</td>
        </tr>
    )
}

export default FormazioneCard
