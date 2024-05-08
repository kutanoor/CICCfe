
import mongoose from 'mongoose';


// MongoDB URL
const dbUrl =
  "mongodb+srv://mosajjid1:mosajjid@cluster0.wyyfeo0.mongodb.net/CICC?retryWrites=true&w=majority";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose ;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // Usi existing database connection if already connected
  if ( cached.conn ) {
    return cached.conn;
  }

  if (!cached.conn && cached.promise) {
    cached.conn = await cached.promise;
    return cached.conn;
  }

  // Connect to the database
  try {
    cached.promise = mongoose.connect(dbUrl);
    cached.conn = await cached.promise;
    console.log('Database connected...');
    return cached.conn;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
};


export default connectDB;
