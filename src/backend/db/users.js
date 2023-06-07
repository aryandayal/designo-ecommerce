import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Aryan",
    lastName: "Dayal",
    email: "aryandayal@gmail.com",
    password: "1234",
    address: [
      {
        _id: uuid(),
        name: "Aryan dayal",
        street: "Patna",
        city: "Patna",
        state: "Bihar ",
        country: "India",
        zipCode: "800006",
        mobile: "999999999",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "hello",
    lastName: "world",
    email: "heloworld@gmail.com",
    password: "hello",
    address: [
      {
        _id: uuid(),
        name: "Hello World",
        street: "Compiler",
        city: "HardDisk",
        state: "CPU",
        country: "coumputer",
        zipCode: "010101",
        mobile: "0101010101",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
