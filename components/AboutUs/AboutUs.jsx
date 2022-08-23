import { Box, Image } from "@chakra-ui/react";

export default function AboutUs({aboutUsRef}) {
  return (
    <>
      <Box
        ref={aboutUsRef}
        h={{ base: "fit-content", md: "488px" }}
        bg='brand.200'
        w='100%'
        left='0'
        px='10px'
        py='20px'
      >
        <Box
          maxW='1200px'
          h='100%'
          display='flex'
          alignItems='center'
          mx='auto'
          position='relative'
          gap={{ base: "15px", md: "90px" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Image
            position={{ base: "unset", md: "absolute" }}
            top='-30px'
            h={{ base: "auto", md: "591px" }}
            w={{ base: "100%", md: "auto" }}
            src='/images/about-us.png'
            alt='About us'
          />
          <Box h='488px' minW='550px' display={{ base: "none", md: "block" }} />
          <Box
            fontSize={{ base: "20px", md: "30px" }}
            fontWeight='600'
            lineHeight={{ base: "27px", md: "37px" }}
          >
            <Box mb={7}>
              Somos Logotipo, una tienda virtual en la que podrás encontrar una
              amplia variedad de plantas y materiales para que le des vida a
              distintos espacios de tu hogar.
            </Box>
            <Box>
              Nos apasiona el mundo de la jardinería y buscamos entregar siempre
              productos de alta calidad.
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
