import { Box, Image, Icon } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp, IoLogoTwitter, IoLogoPinterest } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box h='358px' bg='#082a20' color='#E0F0E5' px='10px'>
        <Box
          maxW='1200px'
          mx='auto'
          w='100%'
          h='100%'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          pt='70px'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            flexDirection={{ base: "column", md: "row" }}
            gap={6}
          >
            <Box>
              <Image
                height='20px'
                src='/images/logo_footer.png'
                alt='Logotipo Plantari'
              />
              <Box maxW='435px' mt='10px'>
                Tienda virtual en la que podrás encontrar una amplia variedad de
                plantas y materiales de jardinería.
              </Box>
            </Box>
            <Box mr='60px'>
              <Box fontSize='20px' fontWeight='500'>
                Redes sociales
              </Box>
              <Box display='flex' gap={2} mt={1}>
                <Icon fontSize='2xl' as={IoLogoWhatsapp} />
                <Icon fontSize='2xl' as={AiFillInstagram} />
                <Icon fontSize='2xl' as={IoLogoTwitter} />
                <Icon fontSize='2xl' as={IoLogoPinterest} />
                <Icon fontSize='2xl' as={FaFacebookF} />
              </Box>
            </Box>
          </Box>
          <Box textAlign='center' pb={2} fontSize='14px'>
            Copyright © LOGOTIPO E-commerce
          </Box>
        </Box>
      </Box>
    </>
  );
}
