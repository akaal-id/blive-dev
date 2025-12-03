export interface Room {
  id: number;
  roomName: string;
  details: string;
  images: string[];
}

export const roomData: Room[] = [
  {
    id: 1,
    roomName: "The Standard Room",
    details: "16 SQ l Clean and efficient",
    images: [
      "/images/rooms/StandardA-1.jpg",
      "/images/rooms/StandardA-3.webp"
    ],
  },
  {
    id: 2,
    roomName: "The Deluxe Room",
    details: "24 SQ l Ideal for longer stays",
    images: ["/images/rooms/Deluxe A.webp", "/images/rooms/Deluxe B.webp"],
  },
  {
    id: 3,
    roomName: "TS Room",
    details: "Rooms for Private, premium stays",
    images: ["/images/rooms/ts-1.webp", "/images/rooms/ts-2.webp"],
  },
  {
    id: 4,
    roomName: "Pool Villa 1",
    details: "Rooms for Private, premium stays",
    images: ["/images/rooms/VIP 1-A.webp", "/images/rooms/VIP 1-B.webp"],
  },
  {
    id: 5,
    roomName: "Pool Villa 2",
    details: "Rooms for Private, premium stays",
    images: ["/images/rooms/VIP 2-A.webp", "/images/rooms/VIP 2-B.webp"],
  },
];
