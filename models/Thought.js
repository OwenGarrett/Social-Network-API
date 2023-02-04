// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const thoughtSchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  createdAt: { type: Date, default: Date.now },
  userName: { type: String, required: true, },
  friends: [ { type: Schema.Types.ObjectID, ref: "User", }, ],

  // Use built in date method to get current date
 reactions: [reaction],

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }

});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
  const Thought = model('Thought', ThoughtSchema);
  
  module.exports = Thought;