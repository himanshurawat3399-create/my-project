import { Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
    return(
        <Flex bg="teal.500" p={4} justify="center" className="shadow-md">
            <Heading size="md" color="white">
                Todos App
            </Heading>
        </Flex>
    );
};

export default Navbar;