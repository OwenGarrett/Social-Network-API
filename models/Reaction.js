// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const reactionSchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  reactionId: { type: Schema.Types.ObjectID, default: () => new Schema.Types.ObjectID(), },
  reactionBody: { type: String, required: true, maxLength: 280},
  userName: { type: String, required: true, },
  createdAt: { type: Date, default: Date.now },

}),

module.exports = ReactionSchema; 
 