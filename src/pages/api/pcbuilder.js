const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://gadgetGalaxy_pcbuilder_user:5LUmQihFEVhACHWG@cluster0.mlxaon5.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    console.log(`Database Connection Established`);

    const pcbuilderCollection = client
      .db("gadgetGalaxy_pcbuilder")
      .collection("pcbuilder");

    // if (req.method === "GET") {
    //   const pcBuilderInfo = await pcbuilderCollection.find({}).toArray();
    //   res.send({ message: "success", status: 200, data: pcBuilderInfo });
    // }
  } finally {
  }
}

export default run;
