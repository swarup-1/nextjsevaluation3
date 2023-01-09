import { Heading, Text, Box } from '@chakra-ui/react'
import React from 'react'

const Experience = () => {
  return (
    <div>
            <Box >
              <Heading p="15px" fontSize="20px" >Experience</Heading>
              <Box p="15px">
                <Text>Full Stack Web Development [Full-Time]</Text>
                <Text>Masai School</Text>
                <Text>July 2022 - Pursuing</Text>
              </Box>
              <Box p="15px">
                <Text>Bachelor of Computer Application</Text>
                <Text>Shivraj College, Gadhinglaj.</Text>
                <Text>[Shivaji University, Kolhapur]</Text>
                <Text>May/2019 - July-2022</Text>
              </Box>
              <Box p="15px">
                <Text>HSC [12th Board]</Text>
                <Text>M. R. Jr College, Gadhinglaj,</Text>
                <Text>Dist. Kolhapur</Text>
                <Text>Jun/2018 - July-2019</Text>
              </Box>
            </Box>
    </div>
  )
}

export default Experience