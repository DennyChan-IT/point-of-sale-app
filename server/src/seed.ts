import mongoose from "mongoose";
import { MenuCategoryModel, MenuModel } from "./models";

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1/pointOfSaleApp");

    // Clear existing data
    await MenuModel.deleteMany({});
    await MenuCategoryModel.deleteMany({});

    // Create categories
    const foodCategory = await MenuCategoryModel.create({ name: "Foods" });
    const beverageCategory = await MenuCategoryModel.create({
      name: "Beverages",
    });

    // Seed menu items
    const menus = [
      {
        name: "Burger",
        category_id: foodCategory._id,
        price: 8.49,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwgLv0XfXLs6IBRAOi6krRIDC7lncLwFGy1jU6cxrKp2jEivPjWQclSquNQnRlD-7wvM&usqp=CAU",
      },
      {
        name: "Pizza",
        category_id: foodCategory._id,
        price: 12.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwgLv0XfXLs6IBRAOi6krRIDC7lncLwFGy1jU6cxrKp2jEivPjWQclSquNQnRlD-7wvM&usqp=CAU",
      },
      {
        name: "Coca Cola",
        category_id: beverageCategory._id,
        price: 1.99,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwgLv0XfXLs6IBRAOi6krRIDC7lncLwFGy1jU6cxrKp2jEivPjWQclSquNQnRlD-7wvM&usqp=CAU",
      },
    ];

    await MenuModel.insertMany(menus);
    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Failed to seed database:", err);
  } finally {
    process.exit(); // Exit the process after seeding
  }
}

seedDatabase();
