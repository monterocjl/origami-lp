import { Box, Button } from "@chakra-ui/react";

export default function ContentBannerOne({ currentImage, index }) {
  return (
    <>
      <Box
        my={{ base: 9, md: 12 }} mx={{ base: 10, md: 12 }}
        maxW={{base: '296px', md: '400px'}} lineHeight={{ base: "30px", md: "50px" }}
        position='absolute' display='flex' flexDirection='column' gap={5}
        opacity={currentImage === index ? "1" : "0"} transition='all 0.5s ease'
        zIndex={currentImage === index ? "1" : "0"}
      >
        <Box fontSize={{ base: "28px", md: "41px" }} fontWeight='bold'>
          Descubre las mejores plantas para decorar tu <span style={{ color: "#107456" }}>hogar</span>.
        </Box>
        <Box fontSize={{ base: "23px", md: "33px" }} fontWeight='bold'>
          ¡Hasta 70% de dscto.!
        </Box>
        <Button
          bg='brand.400' color='white' w='fit-content' borderRadius='50px'
          fontSize={{ base: "23px", md: "26px" }} px={5}
          _hover={{boxShadow: '4px 4px 8px -4px rgb(0 0 0 / 70%)'}}
        >
          Ver ofertas
        </Button>
      </Box>
    </>
  );
}
