import { Box, Button, Container, Flex, Heading, Image, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandidateDetails from './CandidateDetails';

// const data = [
//     {

//     }
// ]

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

const baseUrl = "https://altworld-backend.vercel.app";

const getData = async(): Promise<Candidate[]> =>{
    const res = await axios.get<Candidate[]>(`${baseUrl}/candidates`);
    
    const data = await res.data;
    return data;
}

const Dashboard: React.FC = () => {
    const [data, setData] = useState<Candidate[]>([]);
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        getData().then(res=>{
            console.log(res);
            setData(res);
        }).catch(err=>{
            console.log(err);
            setError(err.message);
        });
 
    }, []);

  return (
    <Box>
        <Flex>
            <Stack>
                <Flex>
                    <Text>Hi, Altworld</Text>
                </Flex>

                <Flex>
                    <Text>Dashboard</Text>
                </Flex>

                <Stack>
                    <Text>
                        New Assignment?
                    </Text>
                    <Text>
                        Select from pro-defined questions to have a quick tunaround.
                    </Text>
                    <Button>Create New Assignment</Button>
                </Stack>
            </Stack>

            <Box>
                <Stack>
                    <Text>
                        Pages / <span>Assignment</span>
                    </Text>

                    <Heading>Sales BDE</Heading>
                </Stack>

                <Flex>
                    {/* first stack */}
                    <Stack>
                        {/* top view */}
                        <Flex>
                            <Heading>Sales BDE</Heading>
                            <Flex>
                                <Text>Active</Text>
                                <Button>Edit</Button>
                            </Flex>
                        </Flex>

                        <Box>
                            <Flex>
                                <Text>Assignment Link</Text>
                                <Text>https://tiny.url/asknakdna/</Text>
                            </Flex>
                            <Flex>
                                <Text>Assignment Hour</Text>
                                <Text>3 hours</Text>
                            </Flex>

                            <Flex>
                                <Text>Assignment Ends at</Text>
                                <Text>11 March 2024</Text>
                            </Flex>
                        </Box>

                        <Flex>
                            <Button>TO REVIEW</Button>
                            <Button>SHORTLISTED</Button>
                        </Flex>

                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>CANDIDATE</Th>
                                    <Th>SCORE</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    data && data.map((el, i) =>(
                                        <Tr key={i} onClick={()=>setCandidate(el)}>
                                            <Td>
                                                <Flex>
                                                    <Image src={el.avatar} />
                                                    <Stack>
                                                        <Heading>{el.name}</Heading>
                                                        <Text>{el.email}</Text>
                                                    </Stack>
                                                </Flex>
                                            </Td>

                                            <Td>{el.score}%</Td>
                                        </Tr>
                                    ))
                                }
                            </Tbody>
                        </Table>
                        
                    </Stack>
                    
                    {/* second column */}
                    <CandidateDetails candidate = {candidate} />
                </Flex>
                
            </Box>
        </Flex>
    </Box>
  )
}

export default Dashboard;