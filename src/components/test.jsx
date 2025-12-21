import React , {useContext, userContext} from 'react' ;
import UserContext from './context/context';

function Test(props) {

    const {user} = useContext(UserContext);
  return (
    <div   style={{textAlign:'center'}}>

            {/* <span>{props.username}</span> */}
      

             <li>{user.name}</li>
             <li>{user.role}</li>
             <li>{user.address}</li>
    </div>
  )
}

export default Test
