import mongoose from 'mongoose';

function connect() {
  // Ensure that you're referencing the environment variable correctly
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log('Error connecting to MongoDB:', err);
    });
}

export default connect;
    