const express = require("express");
const router = express.Router();
const Product = require("../../models/Product")

// *NOTE* All routes have /api/products  in front of them: Example:  /create, is actually, api/product/create

// Test route:
router.get("/test", (req,res) => {
  res.json({ message: "Success", data: "API WORKS!" });
})

// Index Route: Get all Products
router.get("/", (req, res) => {
  Product.find({}, (err, product) => {
    if (err) {
      res.json({ message: "Error", error: err });
    }
    else {
      res.json({ message: "Success", data: product });
    }
  });
});

// Create Product Route:
router.post("/create", (req, res) => {
  const { title, price, imgUrl } = req.body;

  const newProduct = {
    title: title,
    price: price,
    imgUrl: imgUrl
  }

  // Create Route:
  Product.create(newProduct, (err, product) => {
    if (err) {
      res.json({ message: "Error", error: err });
    }
    else {
      console.log("Product price being saved as: ", product.price.toFixed(2));
      res.json({ message: "Success", data: product });
    }
  });
}),

// Show Product by ID Route:
router.get("/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      res.json({ message: "Error", error: err });
    }
    else {
      res.json({ message: "Success", data: product });
    }
  });
});

// Update/change product by ID Route:
router.put("/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      res.json({ message: "Error", error: err });
    }
    else {
      product.set(req.body);
      product.save((err) => {
        if (err) {
          res.json({ message: "Error", error: err });
        }
        else {
          res.json({ message: "Success", data: product });
        }
      });
    }
  });
});

// Delete route:
router.delete("/:id/delete", (req, res) => {
  Product.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.json({ message: "Error", error: err });
    }
    else {
      res.json({ message: "Success", msg: "Product Destroyed!" });
    }
  });
});

module.exports = router;