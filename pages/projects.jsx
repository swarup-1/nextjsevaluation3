import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { TbGitFork, TbStar } from "react-icons/tb";
const Proejcts = ({projectdata}) => {
    let data=projectdata.items
  console.log('projectdata:', data)
  return (
    <div>
        <Box border="1px solid green" height="1000px" width="90%" margin="auto" >
            <Heading>Projects</Heading>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
                {data.map((el)=>(
                    <Link href={el.html_url} border="1px solid black" key={el.id} >
                        <Flex justifyContent="space-between" >
                            <Box>
                                <Heading size='md'>{el.name}</Heading>
                                <Text>{el.full_name}</Text>
                                <div style={{display:"flex"}} >
                                <Flex gap="10px" m="10px"><TbStar /> {el.stargazers_count}</Flex>
                                <Flex gap="10px" m="10px"><TbGitFork />{el.forks}</Flex>
                                </div>
                            </Box>
                            <Box>
                                <Text>{el.language}</Text>
                            </Box>
                        </Flex>
                    </Link>
                    ))}
        </SimpleGrid>

        </Box>
    </div>
  )
}
export async function getServerSideProps(context) {
    let res = await fetch("https://api.github.com/search/repositories?q=user:swarup-1+fork:true&sort=updated&per_page=10&type=Repositories")
    let data = await res.json()
    console.log('datas:', data)
    return {
      props: {
        projectdata:data
    },
  }
}
export default Proejcts