import { Box, Button, Flex, Heading, Image, Input, Progress, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';

interface Candidate {
  name: string;
  email: string,
  avatar: string;
  score: number;
  communication:number;
  behavioural:number;
  "situation handling": number;
  about: string;
  experience:string;
  hobbies: string;
  introduction:string;
  interview:string;
  id: number;
}

interface CandidateDetailsProps {
  candidate: Candidate | null;
}

// const getData = async(id): Promise<CandidateDetailsProps[]> =>{
//   const res = await axios.get<CandidateDetailsProps[]>(`http://localhost:3001/candidates/${id}`)
  
//   const data = await res.data;
//   return data;
// }


const CandidateDetails: React.FC<CandidateDetailsProps> = ({ candidate }) => {
  
  if(!candidate){
    return <Text>No Candidate selected</Text>
  }

  return (
    <Flex>
      <Stack
        w={'68%'} 
        bgColor='white'
        padding='10px'
        borderRadius='10px'
        boxShadow='base'
        >
          <Flex
          alignItems='center' 
          justifyContent="space-between"
          >
            <Flex gap='10px'
            alignItems='center'
            >
              <Image
              w="70px"
              h="70px"
              borderRadius='10px'
              src={ candidate.avatar} />
                <Stack
                textAlign='left'
                gap='2px'
                >
                  <Heading fontSize='14px'>{candidate.name}</Heading>
                  <Text fontSize='12px'>{candidate.email}</Text>
                </Stack>
            </Flex>

            <Box>
              <Text 
              fontWeight='bold' 
              color={(candidate.score >=50)?"green.400":"orange.400"} >{candidate.score}%</Text>
            </Box>
          </Flex>

          <Stack>
            <Flex>
              <Text>Behavioural</Text>
              {/* <Progress value={80} /> */}
              <input type='range' style={{
                background: 'linear-gradient(to right, blue, yellow)',
                borderColor: 'blue',
                // outline:'none'
              }} value={candidate.behavioural*10} />
              <Text>{candidate.behavioural}/10</Text>
            </Flex>

            <Flex>
              <Text>Communication</Text>
              {/* <Progress value={80} /> */}
              <input type='range' style={{
                background: 'linear-gradient(to right, blue, yellow)',
                borderColor: 'blue',
                // outline:'none'
              }} value={candidate.communication*10} />
              <Text>{candidate.communication}/10</Text>
            </Flex>

            <Flex>
              <Text>Situation Handling</Text>
              {/* <Progress value={80} /> */}
              <input type='range' style={{
                background: 'linear-gradient(to right, blue, yellow)',
                borderColor: 'blue',
                // outline:'none'
              }} value={candidate["situation handling"]*10} />
              <Text>{candidate["situation handling"]}/10</Text>
            </Flex>
              
          </Stack>

          <Stack>
            <Heading>About</Heading>
            <Text>{candidate.about}</Text>
          </Stack>

          <Stack>
            <Heading>Experience</Heading>
            <Text>{candidate.experience}</Text>
          </Stack>
          <Stack>
            <Heading>Hobbies</Heading>
            <Text>{candidate.hobbies}</Text>
          </Stack>
          <Stack>
            <Heading>Introduction</Heading>
            <Text>{candidate.introduction}</Text>
          </Stack>

          <Button>SHORTLIST</Button>
        </Stack>
    </Flex>
    
  )
}

export default CandidateDetails;