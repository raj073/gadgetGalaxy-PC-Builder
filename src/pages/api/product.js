// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri =
//   "mongodb+srv://gadgetGalaxy_pcbuilder_user:5LUmQihFEVhACHWG@cluster0.mlxaon5.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run(req, res) {
//   try {
//     await client.connect();

//     console.log(`Database Connection Established`);

//     const pcbuilderCollection = client
//       .db("gadgetGalaxy_pcbuilder")
//       .collection("pcbuilder");

//     // if (req.method === "GET") {
//     //   const news = await pcbuilderCollection.find({}).toArray();
//     //   res.send({ message: "success", status: 200, data: news });
//     // }

//     if (req.method === "GET") {
//       const { productId } = req.query;
//       console.log("productid from product:", productId);
//       const product = await pcbuilderCollection.findOne({
//         _id: new ObjectId(productId),
//       });

//       // if (!product) {
//       //   res.status(404).json({ message: "Product not found" });
//       // } else {
//       //   res
//       //     .status(200)
//       //     .json({ message: "success", status: 200, data: product });
//       // }
//       res.send({ message: "success", status: 200, data: product });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error2" });
//   }
// }

// export default run;
