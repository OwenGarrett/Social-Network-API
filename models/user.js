// Define Mongoose
const mongoose = require('mongoose');

// Create a new instance of the Mongoose schema to define shape of each document
const userSchema = new mongoose.Schema({
  // Add individual properties and their types
  // Setting required to true will disallow null values
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/, },
  thoughts: [ { type: Schema.Types.ObjectID, ref: "Thought", }, ],
  friends: [ { type: Schema.Types.ObjectID, ref: "User", }, ],

  // Use built in date method to get current date
  createdAt: { type: Date, default: Date.now },

  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }

});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
  
  const User = model('User', UserSchema);
  
  module.exports = User;


/*


// Using mongoose.model() to compile a model based on the schema
// 'Item' is the name of the model
// grocerySchema is the name of the schema we are using to create a new instance of the model
const Item = mongoose.model('Item', grocerySchema);

// Error handler function to be called when an error occurs when trying to save a document
const handleError = (err) => console.error(err);

// We use the model to create individual documents that have the properties as defined in our schema
Item.create(
  {
    item: 'banana',
    stockCount: 10,
    price: 1,
    inStock: true,
  },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = Item;