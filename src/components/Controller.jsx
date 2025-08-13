import React from 'react'

const Controller = ({ onClickButton }) => {

    const buttonValues = [-100, -10, -1, 1, 10, 100]

    return (
        <div>
            {buttonValues.map((btn, i) => (
                <button key={i}
                onClick={()=>onClickButton(btn)}
                >
                    {btn>0? `+${btn}`:btn}
                </button>
            ))}

        </div>
    )
}

export default Controller