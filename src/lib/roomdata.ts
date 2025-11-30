export interface Room {
  id: number;
  roomName: string;
  details: string;
  image: string;
}

export const roomData: Room[] = [
  {
    id: 1,
    roomName: "The Standard Room",
    details: "16 SQ | Clean and efficient",
    image: "/images/rooms/standard.jpg",
  },
  {
    id: 2,
    roomName: "The Deluxe Room",
    details: "24 SQ | Ideal for longer stays",
    image: "/images/rooms/deluxe.jpg",
  },
  {
    id: 3,
    roomName: "The VIP Room",
    details: "Premium | Private, premium stays",
    image: "/images/rooms/vip.jpeg",
  },
];
