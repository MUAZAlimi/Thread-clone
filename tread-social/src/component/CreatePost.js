import { AddIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

const CreatePost = () => {
  return (
    <>
        <Button 
            position={"fixed"}
            botton={10}
            right={10}
            leftIcon={<AddIcon/>}
        >
            Post
        </Button>
    </>
  )
}

export default CreatePost