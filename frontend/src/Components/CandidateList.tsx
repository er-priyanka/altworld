import { Flex, Heading, Image, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react';

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
  
  interface CandidateDataProps {
    data: Candidate[] | null;
    setCandidate: (candidate: Candidate | null) => void;
  }

const CandidateList:React.FC<CandidateDataProps> = ({ data, setCandidate }) => {
    // const [candidate, setCandidate] = useState<Candidate | null>(null);


    if(!data){
        return <Text>No Candidate found</Text>
    }
  return (
    <Table variant='unstyled'>
    <Thead>
        <Tr>
            <Th  color={'gray.400'}>CANDIDATE</Th>
            <Th  color={'gray.400'}>SCORE</Th>
        </Tr>
    </Thead>
    <Tbody>
        {
            data && data.map((el, i) =>(
                <Tr
                
                _hover={{
                    bgColor: "blackAlpha.100"
                }} 
                 key={i} onClick={()=>setCandidate(el)}>
                    <Td>
                        <Flex 
                        alignItems='center'
                        gap='5px'
                        >
                            <Image
                            w='50px'
                            h={'50px'}
                            borderRadius='10px'
                             src={el.avatar} />
                            <Stack
                            textAlign='left'
                            gap='2px'
                            >
                                <Heading
                                fontSize='14px'
                                color="blackAlpha.800"
                                >{el.name}</Heading>
                                <Text color="gray.500" fontSize='12px'>{el.email}</Text>
                            </Stack>
                        </Flex>
                    </Td>

                    <Td
                    fontWeight='bold'
                    color={(el.score>=50)? "green.400" : "orange.400"} 
                    >{el.score}%</Td>
                </Tr>
            ))
        }
    </Tbody>
</Table>
  )
}

export default CandidateList