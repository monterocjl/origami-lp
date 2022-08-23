import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@chakra-ui/react";

export default function Layout({ children, contactRef, aboutUsRef }) {
  return (
    <>
      <Box bg='brand.100' minH='100vh'>
        <Box>
          <Header contactRef={contactRef} aboutUsRef={aboutUsRef}/>
          {children}
          <Footer />
        </Box>
      </Box>
    </>
  );
}
