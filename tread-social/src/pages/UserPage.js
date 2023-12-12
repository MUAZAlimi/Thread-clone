import { useEffect, useState } from 'react';
import UserHeader from "../component/UserHeader";
import UserPosts from "../component/UserPosts";
import { useParams } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast';
import { Flex, Spinner } from '@chakra-ui/react';
import Post from '../component/Post';


const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  const [posts, setPosts] = useState([])
  const [fetchingPosts, setFetchingPosts] = useState(false)

  useEffect(() => {
     
    const getPosts = async () => {
      setFetchingPosts(true)
      try {
        const res = await fetch(`/api/posts/user/${username}`)
        const data = await res.json();
        console.log(data)
        setPosts(data)
      } catch (error) {
        showToast("Error", error.message, "error");
        setPosts([])
      }finally{
        setFetchingPosts(false)
      }
    }

    getPosts()
  }, [username, showToast]);

  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );
  }

  return (
    <>
      <UserHeader user={user} />
      {!fetchingPosts && posts.length === 0 && <h1>User has no post.</h1>}
      {fetchingPosts && (
        <Flex justifyContent={'center'} my={12}>
          <Spinner size={'xl'}/>
        </Flex>
      )}
      {posts.map((post) => (
        <Post key={post._id} post={post} postedBy={post.postedBy} />
      ))}
      {/* <UserPosts
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
      /> */}
    </>
  );
};

export default UserPage;
