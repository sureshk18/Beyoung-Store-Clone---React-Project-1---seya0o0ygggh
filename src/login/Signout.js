import React, { useEffect, useState } from 'react';
import { useUser } from './UserProvider';
import { useNavigate, Link } from 'react-router-dom';

function Logout() {
    const { signOutContext } = useUser();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("userInfo");
        signOutContext();
        setIsLoggedIn(false);

        navigate('/');
    }, [signOutContext, navigate]);

    return (
        <div>
            {
                !isLoggedIn ? (
                    <Link to="login" ></Link>
                ) : (
                    <h1 style={{ marginTop: '90px' }}>hello</h1>
                )}
        </div>
    );
}

export default Logout;
