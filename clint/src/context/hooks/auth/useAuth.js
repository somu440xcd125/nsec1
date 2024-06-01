// import { useSelector } from 'react-redux'

// export const useAuth = () => {
//     const user=useSelector(state=>state.auth.currentUser)
//     const {username}=useSelector(state=>state.auth.currentUser)

//     // console.log(user)
//   return {
//     isAuth:username!==null,
//     username
//   }
// }


import { useSelector } from 'react-redux';

export const useAuth = () => {
  const currentUser = useSelector(state => state.auth.currentUser);

  return {
    isAuth: !!currentUser.username,
    username: currentUser.username,
    role: currentUser.role // Assuming `role` is a field in the currentUser object
  };
};
