# Restaurant Point of Sale

![App Screenshot](./POS%20screenshot.png)

**Restaurant Point of Sale** is a web-based point-of-sale system for restaurants, enabling users to browse menu items, add orders, process payments, and print receipts in a simple, intuitive interface.

---

## Features

- **Order Management:** Browse menu categories (Foods & Beverages) and add items to an order cart.
- **Checkout & Payment:** Calculate totals, accept customer payment, compute change, and record transactions.
- **Order History:** View previous orders and navigate between them.
- **Built-in Calculator:** Quick-entry modal for precise payment amounts with denomination buttons.
- **Receipt Printing:** Generate and print styled receipts directly from the browser.

---

## Demo

View it live: [Live Demo](https://point-of-sale-app-dc.vercel.app/)

---

## Tech Stack

- **Frontend:** HTML5, Bootstrap 5 (static `index.html`)
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB with Mongoose ODM

---

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/point-of-sale-app.git
   cd point-of-sale-app

   ```

2. **Install Server Dependencies**

   ```bash
   cd server
   npm install

   ```

3. **Configure Environment**

   In the `server/` folder, create a file named `.env` with these two lines:

   ```bash
   MONGODB_URI=your_mongodb_uri
   PORT=8000

   ```

4. **Seed Database (optional)**

   ```bash
   npm run seed

   ```

5. **Run Locally**

   ```bash
   npm run dev

   ```

   - Static front-end `index.html` lives at `/`.
   - API lives at `http://localhost:8000/api/v1/menus`, `/orders`, etc.

---

## Contact

Have questions or feedback? Feel free to reach out!

- Email: [denny.tanuji@gmail.com](mailto:denny.tanuji@gmail.com)
- LinkedIn: [Denny Chan](https://www.linkedin.com/in/denny-chan-it/)

Thank you for checking out Restaurant Point of Sale! Stay tuned — more updates, features, and improvements are coming soon. 🚀
