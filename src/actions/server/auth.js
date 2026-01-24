"use server";
import { collections, dbConnect } from "@/lib/dbConnect";
// import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

// export const postUser = async (payload) => {
//   const { email, password, name, photourl, photoupload } = payload;

//   if (!email || !password || !name ) {
//     return {
//         success: false
//     }
//   }

//   const isExist = await dbConnect(collections.USERS).findOne({email});
//   if (isExist) {
//     return {
//       success: false,
//     };
//   }

//   const newUser = {
//     provider: "credentials",
//     name,
//     email,
//     photo: photourl || photoupload,
//     password: await bcrypt.hash(password, 14),
//     role: "user",
//   };

//   const result = await dbConnect(collections.USERS).insertOne(newUser);

//   return {
//     ...result,
//     insertedId: result.insertedId?.toString(),
//   };
// };

export const postUser = async (payload) => {
  const { email, password, name, photourl } = payload;

  if (!email || !password || !name) {
    return { success: false };
  }

  const usersCollection = await dbConnect(collections.USERS);

  const isExist = await usersCollection.findOne({ email });
  if (isExist) {
    return { success: false };
  }

  const newUser = {
    provider: "credentials",
    name,
    email,
    photo: photourl,
    password: await bcrypt.hash(password, 14),
    role: "user",
    createdAt: new Date(),
  };

  const result = await usersCollection.insertOne(newUser);

  return {
    success: true,
    insertedId: result.insertedId.toString(),
  };
};

export const loginUser = async (payload) => {
  const { email, password } = payload;

  if (!email || !password) return null;

  const collection = await dbConnect(collections.USERS);
  const user = await collection.findOne({ email });

  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return null;

  return { ...user, _id: user._id.toString() };
};