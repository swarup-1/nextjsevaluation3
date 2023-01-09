import { SettingsIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={{background:"#1A202C", color:"white" ,border:"1px solid red",display:"flex", justifyContent:"space-between",padding:"0px 20px" , width:"100%", height:"80px"}} >
        <Flex gap="30px" justifyContent="center" alignItems="center" >
            <Link href="/" >Swarup Kadoli</Link>
            <Link href="/projects" >Projects</Link>
            <Link href="/experience" >Experience</Link>
        </Flex>
        <Flex gap="30px" justifyContent="center" alignItems="center">
            <IconButton aria-label='Search database' colorScheme="gray" color="black" icon={<SettingsIcon />} />
            <div style={{width:"50px" }}>
            <Image alt="image" style={{borderRadius:"50%"}} src="https://avatars.githubusercontent.com/u/112791873?v=4" />
            </div>
        </Flex>
    </div>
  )
}

export default Navbar