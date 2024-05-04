import { Box, Button, Flex, Heading, Image, Input, Progress, Stack, Text } from '@chakra-ui/react';
import ProgressBar from '@ramonak/react-progress-bar';
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

const flexStyleProps = {
  
}
const CandidateDetails: React.FC<CandidateDetailsProps> = ({ candidate }) => {
  
  if(!candidate){
    return <Text>No Candidate selected</Text>
  }

  return (
    <Flex w={{base:"100%", md:'70%'}}
    bgColor='white'
    padding='10px'
    borderRadius='10px'
    boxShadow='base'
    gap='10px'
    direction={{base:'column', md:"row"}}
    >
      <Stack
        w={{base:'100%', md:'55%'}} 
       
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
                  <Heading color="blackAlpha.800" fontSize='14px'>{candidate.name}</Heading>
                  <Text color="gray.500" fontSize='12px'>{candidate.email}</Text>
                </Stack>
            </Flex>

            <Box>
              <Text 
              fontWeight='bold'
              fontSize={{lg:'xl'}} 
              color={(candidate.score >=50)?"green.400":"orange.400"} >{candidate.score}%</Text>
            </Box>
          </Flex>

          <Stack>
            <Flex 
            w={'100%'} 
            justifyContent={'space-between'}
            alignItems={'center'}
            fontWeight='bold'
            textAlign={'left'}
            >
              <Text
              color={'gray.500'}
              w={'30%'}
              fontSize={'14px'}
              >Behavioural</Text>
              <Progress
              width='50%'
              borderRadius='15px'
              colorScheme={(candidate.behavioural > 6) ? "blue" : "orange"}
              value={candidate.behavioural*10}
               />
              <Text
              color={(candidate.behavioural>6)?"green.400":"orange.400"}
              >{candidate.behavioural}/10</Text>
            </Flex>

            <Flex
            w={'100%'} 
            justifyContent={'space-between'}
            alignItems={'center'}
            fontWeight='bold'
            textAlign='left'
            >
              <Text
              w={'30%'}
              color='gray.500'
              fontSize={'14px'}
              >Communication</Text>
              <Progress borderRadius='15px' width={'50%'} value={candidate.communication * 10} />
              
              <Text
              color={candidate.communication>6 ? "green.400" : "orange.400"}
              >{candidate.communication}/10</Text>
            </Flex>

            <Flex
            w={'100%'} 
            justifyContent={'space-between'}
            alignItems={'center'}
            fontWeight='bold'
            textAlign={'left'}
            >
              <Text 
              color='gray.500'
              w={'30%'}
              // border="1px"
              fontSize={'14px'}
              >Situation Handling</Text>
              {/* <Progress value={80} /> */}
              <Progress
              width={'50%'}
              borderRadius={'15px'}
              colorScheme={(candidate["situation handling"] > 6) ? "blue" : "orange"}
              value={candidate["situation handling"]*10}
              
               />
              <Text 
              
              color={(candidate["situation handling"]>6) ? "green.400" : "orange.400"}
              >{candidate["situation handling"]}/10</Text>
            </Flex>
              
          </Stack>

          <Stack
          textAlign={'left'}
          marginTop='20px'
          >
            <Heading color="blackAlpha.800" fontSize={'1rem'}>About</Heading>
            <Text fontSize={'14px'} color={'gray.500'}>{candidate.about}</Text>
          </Stack>

          <Stack textAlign={'left'}>
            <Heading color="blackAlpha.800" fontSize={'1rem'}>Experience</Heading>
            <Text fontSize={'14px'} color={'gray.500'}>{candidate.experience}</Text>
          </Stack>
          <Stack
          textAlign={'left'}
          >
            <Heading color="blackAlpha.800" fontSize={'1rem'}>Hobbies</Heading>
            <Text fontSize={'14px'} color={'gray.500'}>{candidate.hobbies}</Text>
          </Stack>
          <Stack           
          textAlign={'left'}
          >
            <Heading color="blackAlpha.800" fontSize={'1rem'}>Introduction</Heading>
            <Text fontSize={'14px'} color={'gray.500'}>{candidate.introduction}</Text>
          </Stack>

          <Button 
          w={'80%'}
          margin={'20px auto'}
          bgColor='#4FD1C5'
          color='white'
          _hover={{
            bgColor: "teal.400"
          }}
          >SHORTLIST</Button>
      </Stack>

        <Box w={{base:'100%', md:'45%'}} >
          <Image 
          w={'100%'}
          h={'100%'}
          border="1px"
          borderColor={'gray.50'}
          borderRadius={'10px'}
           src={candidate.avatar} />
        </Box>
    </Flex>
    
  )
}

export default CandidateDetails;