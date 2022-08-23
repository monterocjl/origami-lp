import { Box, Image, Icon, IconButton, Menu, MenuList, MenuItem, MenuButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoCart } from "react-icons/io5";

export default function Header({contactRef, aboutUsRef}) {

  const goToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const goToAboutUs = () => aboutUsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return (
    <>
      <Box
        maxW='1200px' mx='auto' height='65px' display='flex' alignItems='center' justifyContent='space-between'px='10px'
      >
        <Image height='20px' src='/images/logo_header.png' alt='Logotipo Plantari' />
        <Box display={{ base: "none", md: "flex" }} gap={5} fontWeight='600'>
          <Box onClick={goToContact}>Contacto</Box>
          <Box onClick={goToAboutUs}>¿Quiénes somos?</Box>
        </Box>
        <Box display='flex' alignItems='center' gap={3}>
          <Icon fontSize='2xl' color='brand.400' display={{ base: "none", md: "block" }} as={IoCart}
          />
          <Menu>
            <MenuButton
              as={IconButton} color='brand.400' fontSize='2xl' p={1} icon={<HamburgerIcon />}
              bg='none' _hover={{ bg: "brand.200" }} _focus={[]}
              _active={{ bg: "brand.200" }} display={{ base: "block", md: "none" }}
            />
            <MenuList bg='brand.100' zIndex='100'>
              <MenuItem _hover={{ bg: "brand.200" }} _focus={[]} fontWeight='600' onClick={goToContact}
              >
                Contacto
              </MenuItem>
              <MenuItem _hover={{ bg: "brand.200" }} fontWeight='600' onClick={goToAboutUs}>
                ¿Quiénes somos?
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
}
