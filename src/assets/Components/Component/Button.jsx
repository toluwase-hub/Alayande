import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button
        style={{
            
        }}
        onClick={props.action}
        >
            {props.ButtonText}
        </button>
    </div>
  )
}

export default Button