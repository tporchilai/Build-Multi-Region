# 🌍 Multi-Region Disaster Recovery on AWS

## 🚀 Project Overview
This project demonstrates how to deploy a Node.js application across multiple AWS regions using AWS App Runner and GitHub integration, ensuring:
- **High availability**
- **Fault tolerance**
- **Reduced latency for global users**
- **Disaster recovery readiness**

## 🏗️ Multi-Region Architecture
<img width="1023" height="564" alt="multiregion" src="https://github.com/user-attachments/assets/0ed2f323-2bd3-41c3-b492-3228e41cefec" />


## ⚙️ Tech Stack
- **Backend**: Node.js (Express)
- **Cloud Platform**: AWS
- **Deployment Service**: AWS App Runner
- **Version Control**: GitHub
- **Regions Used:**
**1.us-east-1**
**2.us-west-2**


## 🛠️ Step-by-Step Implementation
 **1️⃣ Create Node.js App**
- Built a simple Express.js application
- Returns a response with region info

**2️⃣ Push Code to GitHub**
- Repository connected to AWS App Runner
- Enables automatic deployments

**3️⃣ Deploy in Primary Region (us-east-1)**
- Created App Runner service
- Verified application via public endpoint

**4️⃣ Deploy in Secondary Region (us-west-2)**
- Created a separate App Runner service
- Configured a new GitHub connection
Ensured both regions run independently

**5️⃣ Add Region Detection**

- Used environment variable:

          AWS_REGION
- Updated app to display active region

**6️⃣ Measure Latency**
- Tested response times from different regions
Region		Latency (ms)
us-east-1		265 ms
us-west-2	1034 ms


##  📊 Results & Insights
- Multi-region setup improves availability
- Latency depends on user proximity
- AWS App Runner simplifies deployment with:
- Built-in HTTPS
- Auto scaling
- CI/CD integration




