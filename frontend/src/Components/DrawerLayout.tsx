import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import Sidebar from './Sidebar';
import { MdMenu } from "react-icons/md";

const DrawerLayout:React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

    return (
    <>
        <Button
        // ref={btnRef}
        // colorScheme='teal'
        onClick={onOpen}
        >
            <MdMenu />
        </Button>
        <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement='left'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <Sidebar/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </>
  )
}

export default DrawerLayout;