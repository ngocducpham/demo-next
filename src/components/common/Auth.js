import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

function Auth({ accessType, children }) {
    const { data: session } = useSession();

    useEffect(() => {
        if(accessType === accessRouteTypeEnum.REQUIRE_LOGIN && (!session || session.error == "RefreshAccessTokenError")){
            signOut();
        }
    }, [session]);

    return children;
}

export default Auth;
