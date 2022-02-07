import React, { useState } from "react";
import "./LoginC.css";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
  Heading,
} from "@chakra-ui/react";

const LoginC = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    // console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      // console.log(JSON.stringify(data));
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    // <Flex
    //   align={"center"}
    //   justify={"center"}
    //   bg={useColorModeValue("gray.50", "gray.800")}
    // >
    //   <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
    //     <Stack align={"center"}>
    //       <Heading fontSize={"4xl"}>Sign in to your account</Heading>
    //       <Text fontSize={"lg"} color={"gray.600"}>
    //         to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
    //       </Text>
    //     </Stack>
    //     <Box
    //       rounded={"lg"}
    //       bg={useColorModeValue("white", "gray.700")}
    //       boxShadow={"lg"}
    //       p={8}
    //     >
    //       <Stack spacing={4}>
    //         <FormControl id="email" isRequired>
    //           <FormLabel>Email Address</FormLabel>
    //           <Input
    //             value={email}
    //             type="email"
    //             placeholder="Enter Your Email Address"
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </FormControl>
    //         <FormControl id="password">
    //           <FormLabel>Password</FormLabel>
    //           <InputGroup size="md">
    //             <Input
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               type={show ? "text" : "password"}
    //               placeholder="Enter password"
    //             />
    //             <InputRightElement width="4.5rem">
    //               <Button h="1.75rem" size="sm" onClick={handleClick}>
    //                 {show ? "Hide" : "Show"}
    //               </Button>
    //             </InputRightElement>
    //           </InputGroup>
    //         </FormControl>
    //         <Stack spacing={10}>
    //           <Stack
    //             direction={{ base: "column", sm: "row" }}
    //             align={"start"}
    //             justify={"space-between"}
    //           >
    //             <Checkbox>Remember me</Checkbox>
    //             <Link color={"blue.400"}>Forgot password?</Link>
    //           </Stack>

    //           <Button
    //             bg={"blue.400"}
    //             color={"white"}
    //             _hover={{
    //               bg: "blue.500",
    //             }}
    //             onClick={submitHandler}
    //             isLoading={loading}
    //           >
    //             Login
    //           </Button>
    //           <Button
    //             variant="solid"
    //             colorScheme="red"
    //             width="100%"
    //             onClick={() => {
    //               setEmail("guest@example.com");
    //               setPassword("123456");
    //             }}
    //           >
    //             Get Guest User Credentials
    //           </Button>
    //         </Stack>
    //       </Stack>
    //     </Box>
    //   </Stack>
    // </Flex>

    <VStack spacing="30px" className="container" w="400px" mt="50px" mb="50px">
      <Heading>Login to see more things</Heading>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default LoginC;
