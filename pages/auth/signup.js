import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";

import Head from "next/head";
import React from "react";

import Header from "../../components/FrontPage/Header";

export default function Signup() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Head>
        <title>Cona | Get Started</title>
      </Head>
      <Box>
        <Header />
        <Box display={"flex"} flexDirection={"column"} maxWidth={1132}>
          <Box role={"presentation"} height={55}></Box>
          <Box
            marginRight={{ base: 5, md: 20, lg: 60 }}
            marginLeft={{ base: 5, md: 20, lg: 60 }}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box
              paddingTop={{ base: 10, md: 0 }}
              display="flex"
              flexDirection={"column"}
              mb={5}
            >
              <Heading
                fontSize={{ base: "2xl", md: "5xl" }}
                fontFamily={"inherit"}
                mb={1}
              >
                Create an account
              </Heading>
              <Text fontSize={"md"}>All fields * are required</Text>
            </Box>
            <Box>
              <form>
                <Box display={"flex"} flexDirection={"column"}>
                  <Box
                    display={{ base: "block", md: "flex" }}
                    flex
                    flexDirection={"row"}
                    marginBottom={5}
                  >
                    <FormControl marginRight={5} isRequired>
                      <FormLabel>First name</FormLabel>
                      <Input
                        id="firstName"
                        type={"text"}
                        focusBorderColor={"primary"}
                        size={"lg"}
                      />
                    </FormControl>

                    <FormControl
                      marginRight={5}
                      marginTop={{ base: 5, md: 0 }}
                      isRequired
                    >
                      <FormLabel>Last name</FormLabel>
                      <Input
                        id="lastName"
                        type={"text"}
                        focusBorderColor={"primary"}
                        size={"lg"}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={5}>
                    <FormControl paddingRight={{ base: 0, md: 5 }} isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        id="email"
                        type={"email"}
                        focusBorderColor={"primary"}
                        size={"lg"}
                      />
                    </FormControl>
                  </Box>
                  <Box mb={5}>
                    <FormControl paddingRight={{ base: 0, md: 5 }} isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          id="key"
                          type={show ? "text" : "password"}
                          focusBorderColor={"primary"}
                          size={"lg"}
                          placeholder={"Password"}
                        />
                        <InputRightElement width="">
                          <Button
                            h="2.90rem"
                            mt={1.5}
                            mr={0.19}
                            size={"sm"}
                            onClick={handleClick}
                          >
                            {show ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </Box>
                  <Box mb={5} display="flex">
                    <Checkbox size={"lg"}></Checkbox>
                    <Text ml={5} fontSize={"18px"} lineHeight="short">
                      I certify that I am 18 years of age or older, agree to the{" "}
                      <Link color={"primary"} textDecoration="none">
                        User Agreement,
                      </Link>{" "}
                      and acknowledge the{" "}
                      <Link color={"primary"} textDecoration="none">
                        Privacy Policy.
                      </Link>
                    </Text>
                  </Box>
                  <Box>
                    <Button
                      size="md"
                      height="55px"
                      width="98%"
                      background={"primary"}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
