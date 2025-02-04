# Particle41 DevOps Challenge Submission
  - Access the application via mentioned URL: a972394ff4e4246e6a385b3e84b72a74-2107980581.ap-south-1.elb.amazonaws.com

## 🌟 Overview

This project demonstrates a comprehensive DevOps workflow, showcasing:
- 🚀 Development of a minimal Node.js web service
- 🐳 Containerization using Docker
- ☁️ Cloud deployment on AWS EKS using Terraform
- 🌐 Internet-accessible application via AWS Elastic Load Balancer

## 📋 Table of Contents
- [Prerequisites](#-prerequisites)
- [Application Overview](#-application-overview)
- [Repository Structure](#-repository-structure)
- [Local Development](#-local-development)
- [Deployment Instructions](#-deployment-instructions)
- [Accessing the Application](#-accessing-the-application)
- [Cleanup](#-cleanup)
- [Troubleshooting](#-troubleshooting)

## 🛠 Prerequisites

### Required Tools
- **Docker** 🐳
  - [Installation Guide](https://docs.docker.com/get-docker/)
  - Verify: `docker --version`

- **Terraform** 🏗
  - [Installation Guide](https://developer.hashicorp.com/terraform/downloads)
  - Verify: `terraform --version`

- **AWS CLI** ☁️
  - [Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
  - Configure credentials: `aws configure`

- **kubectl** 🧩
  - [Installation Guide](https://kubernetes.io/docs/tasks/tools/)
  - Verify: `kubectl version --client`

### AWS Requirements
- AWS Account
- IAM User with sufficient permissions for:
  - EKS Cluster creation
  - VPC management
  - Load Balancer configuration

## 🌐 Application Overview

### SimpleTimeService

A minimalist Node.js web service that provides:
- Endpoint: `/`
- Response Format: JSON
- Includes current timestamp and client IP address

#### Example Response
```json
{
  "timestamp": "2023-10-05T12:34:56.789Z",
  "ip": "::ffff:10.0.1.5"
}
```

## 📂 Repository Structure

```
.
├── app/
│   ├── server.js            # Main application code
│   ├── package.json         # Node.js dependencies
│   ├── package-lock.json    # Dependency lockfile
│   └── Dockerfile           # Docker container definition
└── terraform/
    ├── main.tf              # Primary Terraform configuration
    ├── variables.tf         # Input variables
    ├── outputs.tf           # Terraform outputs
    └── terraform.tfvars     # Variable configurations
```

## 🚧 Local Development

### Build Docker Image
```bash
# Navigate to app directory
cd app

# Build Docker image
docker build -t simpletimeservice .

# Run container
docker run -d -p 8080:8080 --name simpletimeservice simpletimeservice

# Test application
curl http://localhost:8080/
```

## 🚀 Deployment Instructions

### Terraform Deployment
```bash
# Navigate to terraform directory
cd terraform

# Initialize Terraform
terraform init

# Review execution plan
terraform plan

# Apply configuration
terraform apply
# Type 'yes' when prompted
```

## 🌍 Accessing the Application

After deployment, retrieve the load balancer DNS:
```bash
# From terraform directory
terraform output load_balancer_dns

# Access via curl
curl http://<load-balancer-dns>/ 
DNS: a972394ff4e4246e6a385b3e84b72a74-2107980581.ap-south-1.elb.amazonaws.com
```

## 🧹 Cleanup

To avoid unnecessary AWS charges:
```bash
# Navigate to terraform directory
cd terraform

# Destroy infrastructure
terraform destroy
# Type 'yes' when prompted
```

## 🛠 Troubleshooting

### Common Issues
- **Docker Build Failures**: 
  - Ensure Docker daemon is running
  - Check network connectivity
  - Verify Dockerfile syntax

- **Terraform Deployment Errors**:
  - Confirm AWS credentials are correctly configured
  - Ensure sufficient IAM permissions
  - Check AWS region settings

- **Kubernetes Connectivity**:
  - Verify `kubectl` is configured
  - Check cluster status: `kubectl cluster-info`


---