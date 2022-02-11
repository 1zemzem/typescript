import React, { useState } from "react";

// type AuthUser = {
//   name: string;
//   email: string;
// };

// export const User = () => {
//   const [user, setUser] = useState< AuthUser | null >(null);
//   const handleLogin = () => {
//     setUser({
//       name: "hjnjnj",
//       email: "e-mnbbb",
//     });
//   };
//   const handleLogout = () => {
//     setUser(null);
//   };
//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleLogout}>Logout</button>
//       <div>User name is{user?.name}</div>
//       <div>User mail is{user?.email}</div>
//     </div>
//   );
// };

type AuthUser = {
    name: string;
    email: string;
  };
  
  export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
      setUser({
        name: "hjnjnj",
        email: "e-mnbbb",
      });
    };
    
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
        <div>User name is{user.name}</div>
        <div>User mail is{user.email}</div>
      </div>
    );
  };