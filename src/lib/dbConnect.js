const uri = process.env.MONGODB_URI;
const db_name = process.env.DB_NAME;

export const collections = { USERS: "users", PRODUCTS: "products" };

const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = async (cname) => {
 if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  return client.db(db_name).collection(cname);
};
