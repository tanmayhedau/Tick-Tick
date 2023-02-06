// const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);

// const connectDB = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`mongodb is connected`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };
 
// module.exports = connectDB;


//alternate method
// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer()
