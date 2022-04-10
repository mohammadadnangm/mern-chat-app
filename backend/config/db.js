const mongoose = require("mongoose");
const colors = require("colors");

//live mongoDB
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     });

//     console.log(
//       `Live MongoDB Connected: ${conn.connection.host}`.cyan.underline
//     );
//   } catch (error) {
//     console.log(`Error: ${error.message}`.red.bold);
//     process.exit();
//   }
// };

// locall
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.LOCAL_MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });

    console.log(
      `Local MongoDB Connected: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
