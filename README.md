# AgriGPT UI - Frontend CI/CD Pipeline & Kubernetes Deployment

A production-ready automated CI/CD pipeline for the **AgriGPT** frontend application, utilizing **Jenkins**, **Docker**, **Minikube (Kubernetes)**, and **AWS EC2**.

---

## 🚀 Architecture & Tech Stack
* **Version Control:** Git & GitHub
* **CI/CD Orchestrator:** Jenkins (Declarative Pipeline)
* **Containerization:** Docker & Docker Hub
* **Orchestration & Deployment:** Kubernetes (Minikube)
* **Cloud Infrastructure:** AWS EC2 (Ubuntu)
* **Frontend Framework:** React, Vite, Tailwind CSS, TypeScript

---

## 📋 Pipeline Stages (`Jenkinsfile`)
1. **Checkout SCM:** Pulls the latest source code from the main GitHub branch.
2. **Build & Test:** Installs dependencies (`npm install`) and builds the production bundle (`npm run build`).
3. **Docker Build:** Builds an optimized multi-stage Docker image of the frontend.
4. **Push Image:** Securely pushes the tagged image to Docker Hub using stored Jenkins credentials.
5. **Minikube Deployment:** Automatically applies Kubernetes manifest files (`deployment.yaml` and `service.yaml`) to the local cluster.
6. **Verification:** Validates that the Kubernetes pods and services are running successfully.

---

## 📂 Project Structure
```text
├── k8s/
│   ├── deployment.yaml    # Kubernetes Deployment configuration
│   └── service.yaml       # Kubernetes NodePort/ClusterIP service
├── public/                # Static assets
├── src/                   # React application source code
├── Dockerfile             # Container definition
├── Jenkinsfile            # Automated CI/CD pipeline script
└── package.json           # Project dependencies & scripts
