import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Auth() {
        if (localStorage.getItem('role') !== 1) {
            alert("access dinied")
        }
    return (
        <div>Access Denied</div>
        
    );
}
  
export default Auth;
