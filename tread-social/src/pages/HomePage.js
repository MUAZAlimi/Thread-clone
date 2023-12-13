import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import Post from "../component/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";

const HomePage = () => {
  const [posts, setPosts] = useRecoilState(postsAtom)
  const showToast = useShowToast()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      const getFeedPosts = async () => {
        setLoading(true)
        setPosts([])
        try {
          const res = await fetch("/api/posts/feed");
          const data = await res.json();
          if (data.error) {
            showToast("Error", data.error, "error")
            return;
          }
          console.log(data)
          setPosts(data)
        } catch (err) {
          console.log(err)
          showToast("Error", err.message, "error");
        } finally{
          setLoading(false);
        }
      }
      getFeedPosts()
  }, [showToast, setPosts]);
  
  return (
    <>
      {!loading && posts.length === 0  && (
        <Text>Pls follow a user to see feed posts</Text>
      )}
      {loading && (
        <Flex justifyContent={"center"}>
            <Spinner size={"xl"}/>
        </Flex>
      )}

      {posts.map(post => (
        <Post key={post._id}  post={post} postedBy={post.postedBy}/>
      ))}
    </>
  );
};

export default HomePage;
