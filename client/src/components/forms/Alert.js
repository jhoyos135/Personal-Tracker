import React, {useState, useEffect} from 'react';
import classNames from 'classnames';

function Alert(props) {

    

    const [classes, setClasses] = useState(props.alertState)

    useEffect(() => {
        setClasses(!classes)
    }, [])

    
    let alertClass = ["scale-transition"];
    if(!classes) {
      alertClass.push('pop');
    }

    return (
        

    <div className={`main_msg ${alertClass.join(' ')}`} >
     <div 
     className="msg msg-error z-depth-3"> { props.msg }</div> 
    </div>
     
  )
}

export default Alert
