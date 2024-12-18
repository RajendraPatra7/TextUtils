import React from "react";

function Alert(props) {

    // To Make The "S" capital in 'success' !
    
    const capitalaize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <div style={{height : '50px'}} >
    {props.alertMsg && <div className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalaize(props.alertMsg.type)}</strong> : {props.alertMsg.msg}
      
    </div>}
    </div>
  );
}

export default Alert;
