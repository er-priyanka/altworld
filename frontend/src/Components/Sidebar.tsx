import { Box, Button, Divider, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import { CiBoxes } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Sidebar:React.FC = () => {
  return (
    <Stack 
    w={{md:'20%'}}
    boxSizing='border-box'
    padding='25px'
    fontFamily={'sans-serif'}
    >
                <Flex
                alignItems='center'
                gap='10px'
                borderBottom='1px'
                borderColor='gray.200'
                padding='20px'
                >
                    <Box transform = 'rotate(180deg)'>
                        <CiBoxes fontSize='1.5rem' />

                    </Box>
                    <Text
                    fontWeight='bold'
                    fontSize='14px'
                    >Hi, AltWorld</Text>
                </Flex>

                
                <Flex
                alignItems='center'
                gap='10px'
                padding='20px'
                >
                    <Box 
                    borderRadius='5px' 
                    bgColor='white' 
                    padding='5px'>
                        <FaHome color='#4FD1C5' />

                    </Box>
                    <Text
                    fontWeight='bold'
                    fontSize='12px'
                    >Dashboard</Text>
                </Flex>

                <Stack
                bgColor='#4FD1C5' 
                borderRadius='15px'
                padding='15px'
                textAlign='left'
                color='white'
                >
                    <Box 
                    bgColor='white'
                    w='fit-content'
                    borderRadius='5px'
                    padding='4px'
                    color='black'
                    marginBottom='10px'
                    >
                        <IoMdAdd />
                    </Box>
                    <Text
                    fontWeight='bold' 
                    >
                        New Assignment?
                    </Text>
                    <Text
                    noOfLines={2}
                    fontSize='14px'
                    >
                        Select from pro-defined questions to have a quick tunaround.
                    </Text>
                    <Button
                    fontSize='14px'
                    borderRadius='10px'
                    >Create New Assignment</Button>
                </Stack>
            </Stack>
  )
}

export default Sidebar;