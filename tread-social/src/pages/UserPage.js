import { useEffect, useState } from 'react';
import UserHeader from "../component/UserHeader";
import UserPosts from "../component/UserPosts";
import { useParams } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast';

const UserPage = () => {
  const [ user, setUser ] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast()

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        
        if(data.error) {
          showToast("Error", data.error, "error")
          return;
        }
        setUser(data);

      } catch (error) {
        showToast("Error", error, "error")
      }
    }
    getUser()

  }, [username, showToast])
  if(!user) return null


  return (
    <>
      <UserHeader user={user} />
      <UserPosts
        likes={200}
        replies={70}
        postImg={"/post1.png"}
        postTitle={"Hello Kennymas"}
      />
      <UserPosts
        likes={100}
        replies={120}
        postImg={"/post2.png"}
        postTitle={"This is Great"}
      />
      <UserPosts
        likes={50}
        replies={250}
        postImg={"/post3.png"}
        postTitle={"Wow! Awesome"}
      />
    </>
  );
};

export default UserPage;
