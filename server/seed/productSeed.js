import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Product from "../models/Product.js";

dotenv.config();

const products = [
  {
    name: "Canon Camera EOS 2000, Black 10x Zoom",
    price: 998.0,
    oldPrice: 1128.0,
    image: "/images/camera.png",
    description:
      "Professional camera with high quality zoom, sharp image processing, and reliable performance for daily use.",
    category: "Electronics",
    brand: "Canon",
    rating: 4.5,
    orders: 154,
    stock: 15,
    featured: true,
  },
  {
    name: "GoPro HERO6 4K Action Camera - Black",
    price: 998.0,
    oldPrice: 1128.0,
    image: "/images/gopro.png",
    description:
      "Compact 4K action camera for travel, outdoor videos, and professional recording.",
    category: "Electronics",
    brand: "GoPro",
    rating: 4.7,
    orders: 154,
    stock: 18,
    featured: true,
  },
  {
    name: "Smartphone 12 Pro Max",
    price: 99.5,
    oldPrice: 128.0,
    image: "/images/phone.png",
    description:
      "Modern smartphone with large display, long battery life, and premium camera quality.",
    category: "Smartphones",
    brand: "Apple",
    rating: 4.8,
    orders: 75,
    stock: 30,
    featured: true,
  },
  {
    name: "Laptop Pro 15 inch",
    price: 899.0,
    oldPrice: 999.0,
    image: "/images/laptop.png",
    description:
      "Powerful laptop for office work, development, design, and multimedia use.",
    category: "Computer and tech",
    brand: "Samsung",
    rating: 4.6,
    orders: 89,
    stock: 12,
    featured: true,
  },
  {
    name: "Smart Watch Silver",
    price: 69.5,
    oldPrice: 89.0,
    image: "/images/watch.png",
    description:
      "Smart watch with fitness tracking, notifications, heart monitoring, and stylish design.",
    category: "Electronics",
    brand: "Pocco",
    rating: 4.3,
    orders: 120,
    stock: 20,
    featured: false,
  },
  {
    name: "Headset for Gaming with Mic",
    price: 88.9,
    oldPrice: 109.0,
    image: "/images/headset.png",
    description:
      "Comfortable gaming headset with microphone, noise reduction, and clear audio.",
    category: "Electronics",
    brand: "Lenovo",
    rating: 4.4,
    orders: 96,
    stock: 22,
    featured: false,
  },
  {
    name: "Mens Long Sleeve T-shirt Cotton Base",
    price: 98.0,
    oldPrice: 120.0,
    image: "/images/tshirt.png",
    description:
      "Classic men long sleeve t-shirt made with soft cotton and modern casual style.",
    category: "Clothes and wear",
    brand: "Apple",
    rating: 4.2,
    orders: 32,
    stock: 50,
    featured: true,
  },
  {
    name: "Leather Wallet for Men",
    price: 34.0,
    oldPrice: 45.0,
    image: "/images/wallet.png",
    description:
      "Premium leather wallet for men with clean design and multiple card slots.",
    category: "Accessories",
    brand: "Samsung",
    rating: 4.1,
    orders: 65,
    stock: 40,
    featured: false,
  },
  {
    name: "Blue Backpack",
    price: 99.0,
    oldPrice: 130.0,
    image: "/images/backpack.png",
    description:
      "Durable backpack for travel, school, and daily use with spacious compartments.",
    category: "Accessories",
    brand: "Pocco",
    rating: 4.6,
    orders: 81,
    stock: 35,
    featured: false,
  },
  {
    name: "Electric Kettle",
    price: 39.0,
    oldPrice: 55.0,
    image: "/images/kettle.png",
    description:
      "Fast heating electric kettle with safe design for home and office use.",
    category: "Home interiors",
    brand: "Lenovo",
    rating: 4.0,
    orders: 45,
    stock: 25,
    featured: false,
  },
  {
    name: "Soft Chair",
    price: 19.0,
    oldPrice: 35.0,
    image: "/images/chair.png",
    description:
      "Comfortable soft chair for home interior and office sitting area.",
    category: "Home interiors",
    brand: "Samsung",
    rating: 4.3,
    orders: 70,
    stock: 16,
    featured: false,
  },
  {
    name: "Kitchen Dishes Set",
    price: 39.0,
    oldPrice: 50.0,
    image: "/images/dishes.png",
    description:
      "Modern kitchen dishes set for daily use with clean and simple design.",
    category: "Home interiors",
    brand: "Apple",
    rating: 4.2,
    orders: 41,
    stock: 28,
    featured: false,
  },
];

async function seedProducts() {
  try {
    await connectDB();

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error(`Seed failed: ${error.message}`);
    process.exit(1);
  }
}

seedProducts();