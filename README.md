# About Hospital-API
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status

# Technology Stack
Express, MongoDB, PostMan

# Setup Project

1. Install npm and then all its packages after making a clone using : 
```
npm install
```

 2. Run the project
 ```
 npm start
 ```
 
 # Directory Structure
 
 ```
 Hospital-API
    |------ config
    |         |--- mongoose.js
    |         |--- environment.js
    |         |--- passport-jwt-strategy.js
    |
    |------ controllers
    |         └--- doctors_controllers.js
    |         |--- patients_controller.js
    |         |--- reports_controller.js
    |
    |------ models
    |         └--- doctor.js
    |         |--- pateints.js
    |         |--- report.js
    |
    |------ routes
    |         └--- index.js
    |         |--- patients.js
    |         |--- doctors.js
    |         |--- reports.js
    |
    |------ .gitignore
    |------ index.js
    |------ package.json
    |------ package-lock.json
    └------ README.md
```
