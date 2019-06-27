const mongoose =  require("mongoose");

// User Schema:
const ProductSchema =  mongoose.Schema({

  title: { 
    type: String, 
    required: true, 
    minlength: 2
  }, 

  price: { 
    type: Number, 
    required: true,
    minlength: 2,
    // Regex for checking price
    match: /^(\d+\.\d{1,2})/g
  },

  imgUrl: {
    type: String,
    required: true,
    // Regex Check for valid URL:
    match: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/ // No space at beginning or end
  },

  created_at: {
    type: Date,
    default: Date.now
  }
  
});

const Product = module.exports = mongoose.model("Product", ProductSchema);