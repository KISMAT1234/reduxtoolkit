import {useSelector} from "react-redux";



function DisplayUsers(){

const data= useSelector((state)=>{
   return state.users;
})

console.log(data)

    return(
        <>
        {
          data.map((user, id)=>{
            return <li key={id}>
                {user}
            </li>
          })
        }

        </>
    )
}

export default DisplayUsers;