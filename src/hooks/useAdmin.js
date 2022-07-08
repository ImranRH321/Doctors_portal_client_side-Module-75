import { useEffect } from "react";
import { useState } from "react";

const useAdmin = user => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] =  useState(true)

  useEffect(() => {
    console.log('user', user);
    console.log('user email', user.email);
    const email = user?.email;
    console.log(email);
    if(email){
        fetch(`http://localhost:5000/admin/${email}`, {
            method:'Get',
            headers: {
                'content-type': 'application/json',
               authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
        .then(data => {
          console.log('admin', admin);
          setAdmin(data.admin)
          setAdminLoading(false)
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
