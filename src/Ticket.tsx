import { Box, Checkbox, Heading, HStack, Stack, css } from "@chakra-ui/react";
import ticketType from "./interfaces";
import { COLORS_SET } from "./consts";

interface Props {
  ticketData: ticketType;
  updateColor: (value: string) => void;
}

export function Ticket(props: Props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      gap="5"
      border="1px"
      borderColor={props.ticketData.color === "primary" ? "secondary" : "none"}
      w="ticket.w"
      h="ticket.h"
      bg={props.ticketData.color}
      borderRadius="md"
      p="3"
    >
      <Heading
        contentEditable="true"
        suppressContentEditableWarning={true}
        as="h6"
        size="h6"
        fontWeight="500"
        color="text"
      >
        {props.ticketData.name}
      </Heading>
      <Stack flex="1" overflow="auto" className="scroller">
        {props.ticketData.items.map((single, index) => (
          <Checkbox key={index} color="text" defaultChecked>
            {single.name}
          </Checkbox>
        ))}
      </Stack>
      <HStack>
        {COLORS_SET.map((single, index) => (
          <Box
            key={index}
            onClick={() => props.updateColor(single)}
            w="6"
            h="6"
            bg={single}
            rounded="full"
            boxShadow="md"
            border={props.ticketData.color === single ? "1px" : "none"}
            borderColor="white"
            cursor="pointer"
          />
        ))}
      </HStack>
    </Box>
  );
}
