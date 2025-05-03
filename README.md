
# Project Title

🧠 Tasky Backend

Tasky is a scalable and collaborative backend service for managing user tasks, file uploads, and document sharing. Built with Node.js, Express, MongoDB, and integrated with Cloudinary, Docker, and Kubernetes for a production-ready environment.

## 🔧 Tech Stack

| Layer         | Technology               |
|---------------|--------------------------|
| Backend       | Node.js, Express.js      |
| Database      | MongoDB + Mongoose       |
| Auth          | JWT                      |
| Uploads       | Cloudinary + Multer      |
| Email         | Nodemailer (notifications) |
| Validation    | Custom + Zod (optional)  |
| Deployment    | Docker, Kubernetes (YAML)|
| Testing       | Jest                     |

---

Project Structure

```bash
TASKY-BACKEND/
│
├── .github/                  # GitHub workflows
│
├── db/                       # DB connection setup
│   └── index.js
│
├── deploy/                   # Kubernetes YAML files
│   ├── cluster.yml
│   ├── deployment.yml
│   ├── service.yml
│   └── tasky-ingress.yml
│
├── middlewire/              # Custom middleware
│   ├── Cloudinery.js
│   ├── emailnotification.js
│   └── userauthentication.js
│
├── routes/                  # Express routers
│   ├── Data.js
│   ├── test.js
│   └── user.js
│
├── test/                    # Jest test cases
│   └── index.test.js
│
├── utils/                   # Utilities (e.g., multer config)
│   ├── index.js
│   └── multer.js
│
├── .env                     # Environment variables
├── docker-compose.yaml      # Docker services
├── dockerfile               # Docker build
├── index.js                 # Entry point
├── package.json
└── README.md

```
---
🚀 Setup & Installation

🔐 Clone & Install

```bash
git clone https://github.com/nitishrai1/tasky-backend.git
cd tasky-backend
npm install
```
---
🥪 Testing
```bash
npm run test
```
---
🐳 Docker Usage

🏗️ Build Image

```bash
docker build -t tasky-backend .
```

🥪 Run with Docker Compose
```bash
docker-compose up
```
---
☘️ Kubernetes Deployment

```bash

Apply all Kubernetes configs:
```
Access via NodePort or Ingress as defined in tasky-ingress.yml.
---
📨 API Endpoints
🧑 User Routes (/user)

```bash
Method	Endpoint	                  Description
POST	/signin	                      Login user with sign-in limit
POST	/forgot-password	          Trigger forgot password email
POST	/reset-password	              Reset password via token
GET	    /unreadNotification	          Get unread notifications
GET	    /allNotification	          Get all notifications
GET	    /todos	                      Get user todos
GET  	/alltodos	                  Get all todos (admin use)
GET	    /UserProfile	              Get current user profile
POST	/updatePhoto	              Upload/update profile photo
POST	/changename	                  Change user's name
POST	/sent-Chat-Link	              Send chat invite link
GET	    /newtask	                  Get new tasks
POST	/updateTask	                  Update task status
PUT	    /completed	                  Mark task as completed
GET	    /allUsers	                  Get all registered users
GET	    /topUsers	                  Get top-performing users
GET	    /testing	                  Test route
POST	/upload-profile-picture	      Upload profile image
```
---

📁 Data Routes (/data)

```bash
Method	   Endpoint	               Description
POST	/upload-projectfile	       Upload project document
POST	/save-projectDetails	   Save project details
GET	    /allUser	               Get all users (admin)
GET	    /title	                   Get title (project/task-related)
GET	    /notification/:developerId Get notifications by developer ID
POST	/updateNotification	       Update a notification as read
```
---

📌 Key Features

✅ JWT-based authentication

📌 Cloudinary-powered file uploads (PDF, DOC)

📩 Email notifications on document share

📄 RESTful API endpoints

🥪 Unit tests with Jest

☁️ Docker + K8s production setup

---

✨ Future Enhancements

🛡️ RBAC (Admin, Client, Developer)

📨 Notifications dashboard

📊 Admin analytics

📥 File preview support

🧠 AI smart suggestions for tasks

---
🤝 Contributing

Fork the repo
```bash

Create your feature branch: git checkout -b feat/AmazingFeature

Commit your changes: git commit -m 'feat: Add amazing feature'

Push to the branch: git push origin feat/AmazingFeature

Open a pull request
```
---
📨 Contact

```
Email: nitishraigkp007@gmai.com📍
GitHub: nitishrai1
```