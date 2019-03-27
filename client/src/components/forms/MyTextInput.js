import React from 'react'

const MyTextInput = (props) => {
        let handleChange = (event) => {
          if(props.onChange) {
            props.onChange(event)
          }
        }
        return(
          <p>
            <input 
            type={props.type} 
            value={props.value} 
            name={props.name} 
            onChange={handleChange} 
            noValidate
            placeholder={props.placeholder}
            type={props.type}  />
          </p>
        )
      
}

export default MyTextInput
