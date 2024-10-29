import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const useAuthRedirection = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        
        const userCredentials = localStorage.getItem("userCredentials");
        const pathname = location.pathname;

        if (pathname === '/login') {
            
            if (userCredentials) {
                navigate("/home")
            }
        } else {
            
            if (!userCredentials) {
                navigate("/login")
            }
        }
  

    }, [navigate, location]);
}

export default useAuthRedirection;