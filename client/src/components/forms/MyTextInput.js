import React from 'react'

const MyTextInput = (props) => {
        let handleChange = (event) => {
          if(props.onChange) {
            props.onChange(event)
          }
        }
        return(
          <p>
            <input type={props.type} value={props.value} name={props.name} onChange={handleChange} placeholder={props.placeholder}  />
          </p>
        )
      
}

export default MyTextInput
