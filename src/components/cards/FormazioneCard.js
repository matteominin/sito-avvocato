import React from 'react'

function FormazioneCard(props) {
    return (
        <>
        <tr className="formazione__item">
            <td>{props.data.date}</td>
            <td>{props.data.title}</td>
        </tr>
        <tr className="mobile">
            <td>
                <p className="date">{props.data.date}</p>
                <p className="title">{props.data.title}</p>
            </td>
        </tr>
        </>
    )
}

export default FormazioneCard
