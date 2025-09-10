import { Flex, Heading, Button} from "@chakra-ui/react";

const Navbar : React.FC = () => {
    return(
        <Flex bg="teal.500"
              p={4}
              justify="space-between"
              align="center"
              className="shadow-md"
        >
            <Heading size="5xl" color="white">
                Todos App
            </Heading>

            <Button colorScheme="pink" >+ New Task</Button>
        </Flex>
    );
};

export default Navbar;