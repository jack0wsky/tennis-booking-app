import { Sports, Place } from "./types";

export const PLACES: Place[] = [
  {
    id: "1",
    name: "Ace's Arena",
    reviews: { average: "4.2", amount: 15 },
    reviewsList: [
      {
        author: {
          name: "John",
        },
        content: "Awesome (place) with a lot of free courts and great services",
        rate: 5,
      },
      {
        author: {
          name: "Anna",
        },
        content: "Awesome (place) with a lot of free courts and great services",
        rate: 4,
      },
    ],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          { type: "clay", coverage: "on air" },
          { type: "hard", coverage: "covered" },
          { type: "hard", coverage: "on air" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Backhand Boulevard",
    reviews: {
      average: "3.9",
      amount: 7,
    },
    reviewsList: [],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          {
            type: "clay",
            coverage: "on air",
          },
          {
            type: "clay",
            coverage: "on air",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Courtly Charm",
    reviews: {
      average: "4.8",
      amount: 25,
    },
    reviewsList: [],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          {
            type: "hard",
            coverage: "covered",
          },
          {
            type: "hard",
            coverage: "on air",
          },
          {
            type: "clay",
            coverage: "covered",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Deuce's Den",
    reviews: {
      average: "3.5",
      amount: 12,
    },
    reviewsList: [],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          {
            type: "clay",
            coverage: "covered",
          },
          {
            type: "clay",
            coverage: "on air",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Forehand Fields",
    reviews: {
      average: "4.4",
      amount: 18,
    },
    reviewsList: [],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          {
            type: "hard",
            coverage: "on air",
          },
          {
            type: "clay",
            coverage: "covered",
          },
          {
            type: "clay",
            coverage: "on air",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Grand Slam Greens",
    reviews: {
      average: "4.6",
      amount: 22,
    },
    reviewsList: [],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          {
            type: "hard",
            coverage: "covered",
          },
          {
            type: "hard",
            coverage: "on air",
          },
        ],
      },
    ],
  },
  {
    id: "8",
    name: "Smash Studios",
    reviews: {
      average: "4.1",
      amount: 13,
    },
    reviewsList: [],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          {
            type: "hard",
            coverage: "covered",
          },
          {
            type: "clay",
            coverage: "on air",
          },
          {
            type: "hard",
            coverage: "on air",
          },
        ],
      },
    ],
  },
  {
    id: "9",
    name: "Rally Rink",
    reviews: {
      average: "4.5",
      amount: 20,
    },
    reviewsList: [],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          {
            type: "hard",
            coverage: "on air",
          },
          {
            type: "hard",
            coverage: "on air",
          },
        ],
      },
    ],
  },
  {
    id: "10",
    name: "Ace's Palace",
    reviews: {
      average: "4.9",
      amount: 30,
    },
    reviewsList: [],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          {
            type: "clay",
            coverage: "covered",
          },
          {
            type: "hard",
            coverage: "on air",
          },
        ],
      },
      {
        type: Sports.Tennis,
        name: "Squash",
        courts: [
          {
            type: "hard",
            coverage: "on air",
          },
        ],
      },
    ],
  },
  {
    id: "11",
    name: "Backspin Boulevard",
    reviews: {
      average: "3.8",
      amount: 6,
    },
    reviewsList: [],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          {
            type: "clay",
            coverage: "covered",
          },
        ],
      },
      {
        type: Sports.Tennis,
        name: "Squash",
        courts: [
          {
            type: "hard",
            coverage: "covered",
          },
        ],
      },
    ],
  },
  {
    id: "12",
    name: "Smashville",
    reviews: {
      average: "4.3",
      amount: 17,
    },
    reviewsList: [],
    sports: [
      {
        type: Sports.Tennis,
        name: "Tennis",
        courts: [
          {
            type: "hard",
            coverage: "on air",
          },
          {
            type: "clay",
            coverage: "on air",
          },
        ],
      },
      {
        type: Sports.Tennis,
        name: "Squash",
        courts: [
          {
            type: "hard",
            coverage: "on air",
          },
          {
            type: "hard",
            coverage: "covered",
          },
        ],
      },
    ],
  },
];
