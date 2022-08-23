import { Box, Button, FormLabel, Input, Textarea } from "@chakra-ui/react";

export default function Contact({contactRef}) {
  return (
    <>
      <Box
      ref={contactRef}
        maxW='1200px'
        bg='white'
        borderRadius='10px'
        display='flex'
        h={{ base: "fit-content", md: "490px" }}
        mt={{ base: "50px", md: "150px" }}
        mb='70px'
        py={{ base: 5, md: 10 }}
        px={{ base: 4, md: 12 }}
        mx={{ base: "10px", md: "auto" }}
        justifyContent='space-between'
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
      >
        <Box
          fontSize={{ base: "25px", md: "45px" }}
          fontWeight='bold'
          w={{ base: "100%", md: "50%" }}
        >
          Si quieres realizar un pedido personalizado o tienes alguna consulta,
          déjanos un mensaje y nos pondremos en contacto contigo.
        </Box>
        <Box
          w={{ base: "100%", md: "50%" }}
          maxW='444px'
          display='flex'
          flexDirection='column'
          gap={3}
        >
          <Box>
            <FormLabel mb='0'>Nombre</FormLabel>
            <Input h='43px' _focusVisible={{borderColor: 'brand.300'}}/>
          </Box>
          <Box>
            <FormLabel mb='0'>Email</FormLabel>
            <Input h='43px' _focusVisible={{borderColor: 'brand.300'}}/>
          </Box>
          <Box>
            <FormLabel mb='0'>Mensaje</FormLabel>
            <Textarea h='128px' resize='none' _focusVisible={{borderColor: 'brand.300'}}/>
          </Box>
          <Button
            bg='brand.400'
            color='white'
            w={{ base: "100%", md: "fit-content" }}
            borderRadius='50px'
            marginLeft='auto'
            _hover={{boxShadow: '4px 4px 8px -4px rgb(0 0 0 / 70%)'}}
          >
            Enviar mensaje
          </Button>
        </Box>
      </Box>
    </>
  );
}
