import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { URL_API } from "./consts";
import { Ticket } from "./Ticket";
import ticketType from "./interfaces";

export default function App() {
  const [data, setData] = useState<ticketType[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((resData) => {
        setData(resData);
        setLoad(true);
      });
  }, []);

  useEffect(() => {
    if (load) {
      fetch("http://localhost:9000/save", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <VStack h="100vh" bg="primary" align="strach">
      <Box as="main" overflow="auto">
        {load && (
          <Flex p="10" gap="4" wrap="wrap">
            {data.map((single, index) => (
              <Ticket
                key={index}
                ticketData={single}
                updateColor={(value: string) => {
                  data[index]["color"] = value;
                  setData([...data]);
                }}
              ></Ticket>
            ))}
          </Flex>
        )}
      </Box>
    </VStack>
  );
}
