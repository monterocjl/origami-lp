import { IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function ArrowRight({ goToNext }) {
  return (
    <>
      <IconButton
        icon={<ArrowForwardIcon />}
        bg='white'
        borderRadius='50px'
        h='30px'
        w='30px'
        minW='30px'
        color='brand.400'
        fontSize='xl'
        _hover={{ bg: "brand.200" }}
        position='absolute'
        top='47%'
        right={{ base: "3px", md: "-18px" }}
        zIndex='1'
        onClick={goToNext}
        boxShadow='3px 3px 5px -4px rgb(0 0 0 / 15%)'
      />
    </>
  );
}
