## Project Name: Restaurant-Table-Reservation

![Restaurant Table Reservation](restaurant/images/home1.png)


## Projects - GitHub Repository:
[Link to project GitHub repository](https://github.com/OV00VO/restaurant-table-reservation)

## Projects - Herouko APP:
[Link to deployed Heroku app](https://restaurant-table-reservation-1359a4e78b73.herokuapp.com/)

### Table of Contents
1. [Introduction:](#1-introduction)
2. [User Experience (UX):](#2-user-experience-ux)
3. [Features:](#3-features)
4. [Technologies Used:](#4-technologies-used) 
5. [Testing:](#5-testing)
6. [Deployment:](#6-deployment)
7. [References/Credits:](#7-references-and-credits)
8. [Contributing:](#8-contributing)
9. [License:](#9-licence)

## 1. Introduction

### Description:
The Restaurant-Table-Reservation project, powered by the Bookatable app, streamlines reservation management for users. This Django application provides a comprehensive set of CRUD (create, read, update, delete) functionalities for reservations, including user information updates. Prioritizing robust validation, error handling, and security, the system leverages Django's built-in authentication (or the optional django-allauth package) to ensure secure user access.

### Features:
Bookatable: A User-Friendly Reservation Management System
The Bookatable app within the Restaurant-Table-Reservation project empowers users to manage their reservations seamlessly.

---
Navbar - User signed in / logged in
---
![Navbar not signed in](restaurant/images/navbar1.png)
---
Navbar - User not signed in / logged in
---
![Navbar signed in](restaurant/images/navbar2.png)
---
Home
---
![Home](restaurant/images/home1.png)
---
Home - Below the Fold
---
![Home Below the Fold](restaurant/images/home2.png)
---
Menu
---
![Menu](restaurant/images/menu1.png)
---
Menu - Below the Fold
---
![Menu](restaurant/images/menu2.png)
---
Request a Table (Shows only when a user is not signed in)
---
![Request a Table](restaurant/images/request1.png)
---
Book a Table (Shows only when a user is signed in)
---
![Request a Table](restaurant/images/bookatable.png)
---
My Reservations - 1 reservation (Shows only when a user is signed in)
![My Reservations](restaurant/images/reservation1.png)
---
My Reservations - 2 reservations (Shows only when a user is signed in)
---
![My Reservations](restaurant/images/reservation2.png)
---
My Reservation - View
---
![View](restaurant/images/view.png)
---
My Reservation - Update / Edit
---
![Edit](restaurant/images/edit.png)
---
About
---
![About Below the Fold](restaurant/images/about1.png)
---
About - Below the Fold
---
![About Below the Fold](restaurant/images/about2.png)
---
Contact
---
![Contact Below the Fold](restaurant/images/contact1.png)
---
Contact - Below the Fold
---
![About Below the Fold](restaurant/images/contact2.png)
---
Register
---
![Register](restaurant/images/signup.png)
---
Login
---
![Login](restaurant/images/signin.png)
---
Logout
---
![Logout](restaurant/images/signout.png)
---

## 2. User Experience (UX)

Implemented:
1. As a customer, I want to see the available dates and times for booking a table at a restaurant so I can choose a convenient slot.
2. As a customer, I want to specify the number of people in my party when booking a table so the restaurant can prepare accordingly.
3. . As a customer, I want to be able to easily fill out a booking form with my name, contact information, and to specify the occasion.
4. As a customer, I want the option to modify or cancel my reservation online in case my plans change, with clear instructions on any cancellation policies.
5. As a customer, I want to receive a confirmation with the details of my reservation, including the date, time, number of people, and the occasion or special request.

Future enhancement that would benify the project:
1. As a customer, I want to be able to see the estimated wait time for a table if reservations are not available at my preferred time.
2. As a customer, I want to receive a confirmation email with the details of my reservation, including the date, time, number of people, and any special requests.
3. As a restaurant staff member or owner, I want to be able to see a live dashboard of upcoming reservations, including the date, time, name, contact information, and special requests of each party.
4. As a restaurant staff member, I want to be able to mark tables as occupied or available to ensure accurate availability information for customers.
5. As a restaurant staff member, I want to be able to manage the waitlist for tables and notify customers when their table is ready.

## 3. Features 

### Here's what it offers
1. Secure Login and Authentication: Choose between Django's built-in authentication or the optional django-allauth package for a secure login experience.
2. Comprehensive Reservation Management: Easily create, view, update, and cancel reservations (CRUD operations) through the user-friendly interface.
4. Flexible User Information Updates: Keep your profile information up-to-date with functionalities to edit and update personal details.
5. Robust Validation and Error Handling: The system ensures data integrity and a smooth user experience by validating inputs and gracefully handling any errors encountered.
6. Uncompromising Security: Rest assured, your information is protected with either Django's authentication or the django-allauth package, prioritizing user access security.

### Advanced Functionalities For Future Development:
* This section explores potential features to enhance your reservation system:
* Calendar Integration: Allow users to visualize their reservations on a calendar for better scheduling. Popular options include Django FullCalendar or integrating with external services like Google Calendar.
* Notifications & Reminders: Send automated emails or SMS notifications to users about upcoming reservations or confirmation requests. Utilize libraries like django-anymail or external email providers like SendGrid.
* Payment Integration: Integrate payment gateways like Stripe or PayPal to enable users to pay for reservations directly through the application.
* Resource Management: If your system involves multiple reservable resources (e.g., tables, rooms, equipment), create a dedicated model for them and implement reservation logic specific to each resource type.
* User Roles & Permissions: Implement a user role system (e.g., admin, user) to grant different access levels and manage reservation permissions for specific user categories.

### Scalability & Performance:
As your user base grows, consider these techniques to enhance scalability and performance:
* Caching Mechanisms: Utilize caching solutions like Django's built-in caching framework or Redis to improve response times for frequently accessed data.
* Database Optimization: Optimize database queries and schema design for efficient data retrieval and manipulation.
* Load Balancing: If deploying on multiple servers, implement load balancing to distribute incoming traffic and optimize resource utilization.

### Key Takeaway:
Bookatable provides a user-friendly and secure platform for managing restaurant table reservations.

## 4. Technologies Used

### Getting Started:
Clone the Repository:
`git clone https://github.com/your-username/restaurant-table-reservation.git`

Install Dependencies:
`pip install -r requirements.txt`

### Set Up a Development Environment:
Follow Django's official documentation: https://docs.djangoproject.com/en/5.0/

### Configure PostgreSQL Database:

Option 1: Using PostgreSQL 12 or Later
Install psycopg2-binary using `pip install psycopg2-binary`

Option 2: Using PostgreSQL 11.19 or Downgrading Django (if necessary)
`Install psycopg2-binary==2.9.3` (downgraded version compatible with PostgreSQL 11.19) in your requirements.txt. Update your database settings in settings.py to use psycopg2-binary.

Optional: Use ElephantSQL with PostgreSQL:
Create a free ElephantSQL account `(https://www.elephantsql.com/)` to get a PostgreSQL database URL.

Set the DATABASES settings in settings.py using the ElephantSQL URL.

### Run Database Migrations:
`python manage.py makemigrations`

`python manage.py migrate`

### Create a Superuser Account:
`python manage.py migrate`

### Run the Development Server:
`python manage.py runserver`

### Access the Application:
Open `http://127.0.0.1:8000/` in your web browser.

## 5. Testing

When developing this project there was issues with the uploaded Cloudinary images, I could not find a workaround for this, or load the images through static in the Django project image folder. It was not possible to get the CSS to work on Heroku either, only in the development and with the Debug True mode. During the project, both database and other got corrupted when trying to add user functionalites for the reservations system. Even though special settings in both Django and in Heroku Config Var. There could be a database rights issue or anything else. The image itself is connected and resulting with a 200 server code in Chrome Developer mode, but when running the database in local environment it posts a 500 server code. There was also a problem to get a mockup based on the published Heroku app. 

https://ui.dev/amiresponsive?url=https://restaurant-table-reservation-1359a4e78b73.herokuapp.com/

Testing Frameworks:

#### HTML:

https://validator.w3.org/

I conducted manual testing on the HTML code to ensure it adheres to web standards. This involved verifying the overall structure, checking for proper nesting of elements, and confirming the presence of closing tags. Additionally, I tested the functionality of hyperlinks and forms, ensuring they link to the correct destinations and submit data as expected. To be mentioned is that there is functions that could not properly be replaced to functions in the validator for instance functions for navbar and some of the database connections on the projects pages, without risking the overall function. 

#### CSS:

https://jigsaw.w3.org/css-validator/

My manual testing of the CSS focused on the visual appearance of the application. I checked for consistent styling across different pages, ensuring elements like buttons, menus, and text adhere to the intended design. Additionally, I tested the responsiveness of the layout on various screen sizes (desktop, mobile, tablet) to confirm proper display across devices. However there is a problem loading this to Heroku, and functions works in development mode but not as a deployed Heroku app. None of the troubleshooting I was able to found was able to offer a solutiong to fix these issues.

#### JavaScript:

https://validatejavascript.com/
https://jshint.com/

For JavaScript, I tested interactive elements and functionalities driven by JavaScript code, however this is not inluded to this project because of the functions could be created with bootstrap and django functions. This included checking features like form validation (client-side), dynamic content updates (if any), and user interface animations or transitions. For further development some of the future functions would benefit from this where it is applicable. And because of the above issues in the project with both Cloudinary, CSS and all the other static issues, I tried to develop without extra functions.

#### Linting:

https://pep8ci.herokuapp.com/

While not strictly manual testing, I used a pep 8 linting tool called CI Python Linter to analyze the code for potential issues and stylistic inconsistencies. This helped identify areas where the code could be improved for readability and maintainability. The linting tool might have flagged unused variables, improper indentation, or coding practices that deviate from recommended styles.

#### Unit Database Testing: 
Unittest (built-in with Python) or pytest Unit tests focus on individual functions and modules, ensuring they behave as expected with various inputs. For this project 
PyTest was used, but not all with success in all functions, there was database access issues and some functions and test had to be removed due to not compatible, but also that in some cases I could not find the proper information for a solution and a manual testing method was instead used in some cases.

* Unittest
https://docs.python.org/3/library/unittest.html

* Pytest
https://docs.pytest.org/

Tested functionalities like:
* User creation
* Book a fictive reservation
* Send confirmation form feedback
* CRUD based administration (Create, Read Update, Delete)

## 6. Deployment

### Deployment to Heroku:
Create a Heroku Account: `https://signup.heroku.com/`
Install the Heroku CLI: `https://devcenter.heroku.com/`

### Create a New Heroku App:
`heroku create restaurant-table-reservation`

### Set Up PostgreSQL on Heroku:
`heroku addons:create heroku-postgres:rtr`

### Configure Heroku Settings:
Create a .env file at the root of your project and add:

SECRET_KEY=your_secret_key
DATABASE_URL=postgres://user:password@host:port/database

### Use heroku config:set to set environment variables from the .env file:
heroku config:set <key>=<value>

### Security Considerations:

#### Prioritize robust security measures:
* Regular Updates: Keep Django and any third-party libraries updated to address security vulnerabilities.
* Secure Password Storage: Utilize Django's built-in password hashing mechanisms to store user passwords securely.
* CSRF Protection: Implement Django's CSRF (Cross-Site Request Forgery) protection to prevent unauthorized actions.
* Input Validation: Validate all user input to prevent malicious attacks like SQL injection.

### Further Enhancements:
* Integrate Analytics: Use tools like Google Analytics to track user behavior and identify potential areas for improvement.
* Feedback System: Implement a feedback mechanism to gather user input and guide further development.
* Accessibility Features: Ensure your application adheres to accessibility guidelines to cater to users with disabilities.
* Remember, this is a non-exhaustive list. The specific functionalities you incorporate will depend on your project's specific needs and goals.

## 7. References and Credits

### References
For a project in this range there is always inspirations and sometimes codes 
resused in some extent and so does this project. Previous Code Institute 
projects and other students solutions for other projects has been an inspiration 
and sometimes as a brick laying start. The main references are mentioned in the 
code but some contributors I mention here for further exploaration and ideas.

#### Code Institute Curriculum and Code Star Project: 
https://codeinstitute.net/

#### Database functions and navbar inspiration:
https://github.com/flatplanet/Django-CRM

#### Bootstrap styling inspiration and functions like navbar enhancements:
https://getbootstrap.com

#### Inspiration for the CRUD test function for the structure and backend:
https://www.pythonpool.com/python-unittest-vs-pytest/

### 8. Contributing
It is appreciated for contributions from the community to add to this projects foundation for our collective knowledge! If you have bug fixes, improvements, or new features, feel free to submit a pull request. Here's a suggested workflow for contributing:

### Fork the Repository:
Visit the project repository on GitHub: `https://github.com/<your-username>/`Restaurant-Table-Reservation.
Click the "Fork" button to create your own copy of the repository.

### Clone Your Fork:
Open a terminal window and navigate to your desired local directory.

### Use git clone to clone your forked repository:

`git clone https://github.com/OV00VO/restaurant-table-reservation.git`

## Create a New Branch:

### Navigate to your cloned directory:
`cd Restaurant-Table-Reservation`

## Create a new branch for your specific changes:

`git checkout -b <your-branch-name>`
Replace <your-branch-name> with a descriptive name that reflects your contribution (e.g., "fix-reservation-display-bug").

### Make Your Changes:
Make your code modifications within the branch.

### Commit Your Changes:
### Stage your changes using git add:
`git add <filename.py> <other-changed-files>`

### Commit your staged changes with a clear and concise commit message using git commit:
`git commit -m "Fixed reservation display bug in tables.html"`

## Push Your Changes:

### Push your committed changes to your forked branch on GitHub:
`git push origin <your-branch-name>`

### Create a Pull Request:
* Visit your forked repository on GitHub.
* Click on the "Pull requests" tab.
* Click the green "New pull request" button.
* Select your branch containing your changes and the branch you want to merge 
into (usually the main branch).
* Provide a clear and descriptive title and explanation of your changes in the 
pull request body.
* Click "Create pull request" to submit your contribution for review.

I deeply appreciate your contributions to the project!

## 9. Licence

### Licence
This project is licensed under the terms of the MIT License:
[LICENSE.md](LICENSE.md)

