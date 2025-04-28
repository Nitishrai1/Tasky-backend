# Tasky-backend

<!-- checking the ci -->


📦 Local Machine
│
├── kind Cluster (Name: default)
│   ├── 🖥️ Control Plane Node (hostPort: 30007 → containerPort: 30008)
│   ├── 🧑‍💻 Worker Node 1     (hostPort: 30008 → containerPort: 30008)
│   └── 🧑‍💻 Worker Node 2     (hostPort: 30009 → containerPort: 30008)
│
└── 🚀 Kubernetes Components (inside the cluster)
    ├── 🧱 Deployment: `tasky-deployment`
    │   ├── 4 Replicas
    │   └── Pods
    │       └── Container:
    │           ├── Image: `nitishrai7070/tasky-backend:latest`
    │           ├── Port: 3000
    │           └── Env Var: MONGODB_URL
    │
    └── 🌐 Service: `tasky-service` (Type: NodePort)
        ├── Exposes port 3000 of Pods
        ├── TargetPort: 3000 (inside Pod)
        ├── NodePort: 30008 (cluster-wide access)
        └── Accessible via:
            • http://localhost:30007  (control plane mapped)
            • http://localhost:30008  (worker 1 mapped)
            • http://localhost:30009  (worker 2 mapped)





