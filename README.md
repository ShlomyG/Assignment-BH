# Assignment-BH
Interactive Users Page RN

Technology
----------
- React-Native
- Typescript
- Redux-Toolkit

Usage
-------------
- Navigate to the Home Screen to view the list of users and their data.
- Click on a user card to see their posts and edit them if needed.
- Remove user or post in 'x' click
= Click on geolocation coordinates to view the user's location on the map.

API CALLS
--------------
Get All Users Data:
- This call retrieves all user data.

Get Posts By User ID:
- This call fetches posts associated with a specific user ID.
- The retrieved posts are stored in the cache.
- A check is implemented to ensure data existence in the cache, preventing redundant calls and optimizing performance.  

Installation
-----------
- Clone the repository: git clone https://github.com/yourusername/your-repo.git
- Install dependencies: npm install
- Install iOS Pods: cd ios && pod install
- Run the app metro: npm start
- Run Build iOS Env in Xcode
- Run Build Android Env in Android Studio

Usage
-------------
- Navigate to the Home Screen to view the list of users and their data.
- Click on a user card to see their posts and edit them if needed.
- Click on geolocation coordinates to view the user's location on the map.
