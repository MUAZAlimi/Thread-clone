import UserHeader from "../component/UserHeader"
import UserPosts from "../component/UserPosts"

const UserPage = () => {
  return (
    <>
      <UserHeader/>
      <UserPosts likes={200} postImg={'/post1.png'} replies={50} postTitle={"hello everyone"}/>
      <UserPosts likes={10} postImg={'/post2.png'} replies={20} postTitle={"hello my country people "}/>
      <UserPosts likes={3} postImg={'/post3.png'} replies={1} postTitle={"hello what up"}/>
    </>
  )
}

export default UserPage
