import React from "react";
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
//importan redux
import { useSelector } from "react-redux";

const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={"row"} align={"center"}>
            <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
                bg={iconBg}
            >
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

function Profile() {
    const navigate = useNavigate();

    const { firstName, lastName, email } = useSelector(
        (state) => state.userSlice.value
    );
    return (
        <Container maxW={"5xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Heading>Your Profile</Heading>
                    <Text color={"gray.500"} fontSize={"lg"}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue(
                                    "gray.100",
                                    "gray.700"
                                )}
                            />
                        }
                    >
                        <Feature text={`First Name: ${firstName}`} />
                        <Feature text={`Last Name: ${lastName}`} />
                        <Feature text={`Email: ${email}`} />
                        <Link color={"blue.400"} onClick={() => navigate("/")}>
                            Back to home
                        </Link>
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={"md"}
                        alt={"feature image"}
                        src={
                            "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        }
                        objectFit={"cover"}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    );
}

export default Profile;
