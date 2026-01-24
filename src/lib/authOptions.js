import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        const user = await loginUser({ email, password });
        return user;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      const collection = await dbConnect(collections.USERS);

      const isExist = await collection.findOne({ email: user.email });

      if (isExist) return true;

      const newUser = {
        provider: account?.provider,
        email: user.email,
        name: user.name,
        image: user.image,
        role: "user",
      };

      const result = await collection.insertOne(newUser);
      return result.acknowledged;
    },

    async jwt({ token, user, account }) {
      if (user) {
        const collection = await dbConnect(collections.USERS);
        const dbUser = await collection.findOne({ email: user.email });

        token.id = dbUser?._id?.toString();
        token.email = dbUser?.email;
        token.name = dbUser?.name;
        token.role = dbUser?.role;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        role: token.role,
      };
      return session;
    },
  },
};
