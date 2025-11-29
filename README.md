# CrowdfundPro-Campaign-Donor-Management-API
Backend for managing crowdfunding campaigns, donors, payments (mock), and analytics.
CrowdfundPro – Campaign & Donor Management API

CrowdfundPro is a Node.js + Express + MongoDB backend that powers crowdfunding platforms with campaign creation, donation tracking, authentication, and real-time statistics.
Built for developers who want a production-ready API foundation for fundraising apps.

⭐ Features
🔐 Authentication & Roles

JWT-based login & registration

User roles: Admin and User

Password hashing with bcrypt

🎯 Campaign Management

Create, update, delete (admin only)

Target amount, deadline, tags

Auto-update campaign status:

active

completed

expired

💰 Donation System

Add donations to any campaign

Automatically updates raised amount

Fake payment confirmation (mock)

Donor tracking (name, email, amount)

📊 Analytics

Campaign statistics API returns:

Total raised

Target amount

% completed

🧱 Tech Stack

Node.js

Express.js

MongoDB & Mongoose

JWT (jsonwebtoken)

bcryptjs

morgan

dotenv

cors

📁 Folder Structure
crowdfundpro-api/
│── config/
│   └── db.js
│── models/
│   ├── User.js
│   ├── Campaign.js
│   └── Donation.js
│── middleware/
│   └── auth.js
│── routes/
│   ├── authRoutes.js
│   ├── campaignRoutes.js
│   └── donationRoutes.js
│── server.js
│── package.json
│── .env (not included)

🔧 Installation & Setup
1️⃣ Clone the project
git clone https://github.com/<your-username>/crowdfundpro-api.git
cd crowdfundpro-api

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Start server
Development mode:
npm run dev

Production mode:
npm start


Server will run by default on:

http://localhost:5000

🔌 API Endpoints
🔐 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login & get JWT token
🎯 Campaigns
Method	Endpoint	Access	Description
POST	/api/campaigns/	Admin	Create campaign
GET	/api/campaigns/	Public	Get all campaigns
GET	/api/campaigns/:id/stats	Public	Campaign statistics

You can filter campaigns by status:

GET /api/campaigns?status=active
GET /api/campaigns?status=completed
GET /api/campaigns?status=expired

💰 Donations
Method	Endpoint	Description
POST	/api/donations/	Add a donation to a campaign
Example donation request:
{
  "campaignId": "67300c8cd5f4af98393a28cd",
  "amount": 500,
  "donorName": "John Doe",
  "donorEmail": "john@example.com"
}

📊 Campaign Progress Calculation

The API calculates:

percentCompleted = (raisedAmount / targetAmount) * 100


Status auto-updates when:

Raised amount >= target → completed

Deadline passes → expired

🧪 Testing Tools

You can test API using:

Postman

Thunder Client (VS Code)

cURL

REST Client plugin

🛠️ Future Enhancements

Stripe / Razorpay real payments

Admin dashboard

Email notifications

Real-time donation updates (Socket.io)

React frontend integration

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to submit a PR.

📜 License

This project is licensed under the MIT License.

💡 Author

Abhinava Karthik CY
Node.js Developer | Full-Stack Enthusiast
GitHub: <https://github.com/Oib-sip-karthik>
