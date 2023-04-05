import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AdminFormContent = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const createEvent = async () => {
        try {
            const data = {
                name: document.getElementById("name").value,
                date: document.getElementById("date").value,
                venue: document.getElementById("venue").value,
                total_quota: document.getElementById("quota").value,
                price: document.getElementById("price").value,
            };

            //untuk menghandle request bearer header
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };

            const url = "http://localhost:2000/event/create";
            const result = await axios.post(url, data, config);

            //untuk mereset kembali form

            document.getElementById("name").value = "";
            document.getElementById("date").value = "";
            document.getElementById("venue").value = "";
            document.getElementById("quota").value = "";
            document.getElementById("price").value = "";

            //memberikan alert
            alert(result.data.message);
        } catch (err) {
            alert(err.response.data);
        }
    };

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w={500}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Create an Event
                    </Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <VStack>
                            <FormControl id="name" isRequired>
                                <FormLabel>Event Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="date" isRequired>
                                <FormLabel>Event Date</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="venue" isRequired>
                                <FormLabel>Venue</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="quota" isRequired>
                                <FormLabel>Quota</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="price" isRequired>
                                <FormLabel>Ticket Price</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </VStack>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                onClick={createEvent}
                            >
                                Create Event
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                <Link
                                    color={"blue.400"}
                                    onClick={() => navigate("/")}
                                >
                                    Back to home
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};
