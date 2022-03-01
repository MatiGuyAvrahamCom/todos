interface ticketType {
  name: string;
  color: string;
  id: string;
  items: { name: string; checked: boolean }[];
}

export default ticketType;
