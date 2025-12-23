import  {createContext, useState}  from 'react';

export const UserContext = createContext(null);


export default function userProvider({children})
{

const[user , setUser]=useState({

    name:'ovi',
    family:'aghaei',
    role:'admin'


})
return(

    <UserContext.Provider  value={{user , setUser}}>

        {children}


    </UserContext.Provider>
)


}
