import { Box, Button, Container, Flex, Heading, Image, Stack, Tab, Table, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandidateDetails from './CandidateDetails';
import candidatesData from "../Data/db.json";
import Sidebar from './Sidebar';
import { MdEdit } from "react-icons/md";
import CandidateList from './CandidateList';

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

// const baseUrl = "https://altworld-backend.vercel.app";

// const getData = async(): Promise<Candidate[]> =>{
//     const res = await axios.get<Candidate[]>(`${baseUrl}/candidates`);
    
//     const data = await res.data;
//     return data;
// }

const Dashboard: React.FC = () => {
    const [data, setData] = useState<Candidate[]>(candidatesData.candidates);
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    const [error, setError] = useState<string | null>(null);

    

  return (
    <Box  bgColor="#F8F9FA">
        <Flex>
            <Sidebar />

            <Box
            w={'80%'}
            padding='20px' 
            >
                <Stack 
                textAlign='left'
                gap='5px'
                >
                    <Text 
                    color='gray.400'
                    fontSize='12px'
                    >
                        Pages / <span style={{color:'black'}}>Assignment</span>
                    </Text>

                    <Heading color="blackAlpha.800" fontSize='14px'>Sales BDE</Heading>
                </Stack>

                <Flex
                padding='20px 0'
                gap={'10px'}
                // border={'1px'}
                >
                    {/* first stack */}
                    <Stack 
                    w={{lg:'30%'}}
                    bgColor='white'
                    padding='10px'
                    borderRadius='10px'
                    boxShadow='base'
                    >
                        {/* top view */}
                        <Flex
                        justifyContent='space-between'
                        alignItems='center'
                        >
                            <Heading color="blackAlpha.800" fontSize='1.1rem'>Sales BDE</Heading>
                            <Flex
                            alignItems='center'
                            gap='8px'
                            fontSize='1.1rem'
                            >
                                <Text
                                fontWeight='500'
                                color='green.400'
                                >Active</Text>
                                <Box
                                bgColor='white'
                                borderRadius='5px'
                                padding='5px'
                                fontSize={'12px'}
                                boxShadow='md'
                                >
                                    <MdEdit />
                                </Box>
                            </Flex>
                        </Flex>

                        <Box fontSize={'14px'}
                         fontWeight='500' 
                         color={'gray.500'}
                        >
                            <Flex
                            justifyContent={'space-between'}
                            >
                                <Text
                                >Assignment Link</Text>
                                <Text
                                color={'blue.400'}
                                >https://tiny.url/asknakdna/</Text>
                            </Flex>
                            <Flex
                            justifyContent={'space-between'}
                            >
                                <Text>Assignment Hour</Text>
                                <Text>3 hours</Text>
                            </Flex>

                            <Flex
                            justifyContent={'space-between'}
                            >
                                <Text>Assignment Ends at</Text>
                                <Text>11 March 2024</Text>
                            </Flex>
                        </Box>

                        

                        <Tabs variant='unstyled'
                        marginTop='20px'
                        >
                            <TabList
                            >
                                <Tab
                                 fontSize='12px'
                                 fontWeight='bold'
                                 color='blackAlpha.700'
                                _selected={{boxShadow:'md', borderRadius:"10px" }}
                                >TO REVIEW</Tab>
                                <Tab
                                fontSize='12px'
                                fontWeight='bold'
                                color='blackAlpha.700'
                                _selected={{boxShadow:'md', borderRadius:"10px" }}
                                >SHORTLISTED</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <CandidateList setCandidate={setCandidate} data = {data} />
                                </TabPanel>
                                <TabPanel>
                                    <CandidateList setCandidate={setCandidate} data = {data} />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                     
                        
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