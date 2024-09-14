## Project Name: Restaurant-Table-Reservation

![Restaurant Table Reservation](restaurant/images/home1.png)


## Projects - GitHub Repository:
[Link to project GitHub repository](https://github.com/OV00VO/restaurant)

## Projects - Herouko APP:
[Link to deployed Heroku app](https://restaurant-fine-dine-19f92102eee1.herokuapp.com)

### Table of Contents
01. [Introduction:](#01-introduction)
02. [User Experience Design (UX) and User Interface Design:](#02-ux-and-ui)
03. [Features:](#03-features)
04. [Technologies Used:](#04-technologies-used)
05. [Data Schema and Relationships:](#05-data-schema-and-relationships)
06. [Testing:](#06-testing)
07. [Deployment:](#07-deployment)
08. [References/Credits:](#08-references-and-credits)
09. [Contributing:](#09-contributing)
010. [License:](#10-licence)

## 01. Introduction

### Description:

## Restaurant Fine Dine: A Behind-the-Scenes Look
The Restaurant Fine Dine Table-Reservation project, streamlines reservation management for users. This Django application provides a comprehensive set of CRUD (create, read, update, delete) functionalities for reservations, including user information updates. Prioritizing robust validation, error handling, and security, the system leverages Django's built-in authentication (or the optional django-allauth package) to ensure secure user access. 

This comprehensive guide delves into the inner workings of Restaurant Fine Dine Table Reservation System, a web application designed to elevate the fine dining experience for both discerning guests and restaurant staff. We'll explore the user experience (UX), the development methodology used, the features implemented, and the testing procedures employed to ensure a seamless experience for everyone.


### Features:
**Enhancing the Fine Dining Experience**

Restaurant Fine Dine - Table Reservation System: A User-Friendly Table Reservation Management System.
The Restaurant Fine Dine Table Reservation app within the Restaurant-Table-Reservation project empowers users to manage their reservations seamlessly. Restaurant Fine Dine goes beyond just online reservations. It caters to the needs of both guests seeking a memorable dining experience and restaurant staff aiming for smooth operations. 

**A User-Centered Approach**

The user experience (UX) is at the heart of Restaurant Fine Dine. Guests can easily browse the menu, book tables, and register for an account to manage their reservations and preferences. Dietary restrictions and allergies can also be specified during the reservation process, ensuring a personalized dining experience.

**Streamlining Operations for Restaurant Staff**

Restaurant Fine Dine empowers restaurant staff with efficient reservation management tools. Admins can approve, delete, and manage booking requests, assign permission levels to staff members, and view all user reservations to prepare staff effectively. This streamlined workflow avoids conflicts and ensures a smooth operation.

**Building with Agility**

The development of Restaurant Fine Dine utilized an Agile methodology, specifically using Github Projects Kanban boards. This facilitated the creation of user stories, which represent desired functionalities, and their execution within focused sprints. The Kanban board structure provides clear visibility into project progress, with user stories categorized as "To Do," "In Progress," and "Done."

**Functionality at Your Fingertips**

Restaurant Fine Dine boasts a range of features designed to enhance the experience for both users and staff. Let's delve into some key functionalities:

* **An Inviting Home Page:**  The home page features an attractive layout that showcases the restaurant's ambiance and provides a clear navigation bar for easy access to menus, booking, and login options.

![Restaurant Table Reservation](restaurant/images/home1.png)

* *Below the Fold - Home*

![Restaurant Table Reservation](restaurant/images/home2.png)

***

* *Intuitive navbar - Shows **Not Logged in User***

![Restaurant Table Reservation](restaurant/images/navbar1.png)

***

* *Intuitive navbar - Shows **Logged in User***

***

![Restaurant Table Reservation](restaurant/images/navbar2.png)

***

* **A Visually Appealing Menu:**  The menu page is designed to be eye-catching, showcasing a variety of menu options in a user-friendly format.

![Restaurant Table Reservation](restaurant/images/menu1.png)

* *Below the Fold - Menu*

![Restaurant Table Reservation](restaurant/images/menu2.png)

* **More About Restaurant Fine Dine:** Fine Dine Restaurant isn't just about a meal; it's an experience.  Step into our world through our About Us page, where we unveil the philosophy behind our meticulous approach to fine dining.  Explore the story of our restaurant, the dedication of our team, and the passion that fuels our culinary creations.

![Restaurant Table Reservation](restaurant/images/about1.png)

* *Below the Fold - About Us*

![Restaurant Table Reservation](restaurant/images/about2.png)

* **Contact Restaurant Fine Dine:** Fine Dine Restaurant prioritizes seamless communication.  Our Contact Us page offers a variety of ways to connect with us, ensuring a smooth and effortless experience from reservation to visit.  Whether you prefer a quick online form, a friendly phone call, or a detailed email, we're here to answer your questions and guide you through the reservation process.  We're also active on social media, so feel free to connect with us there!

![Restaurant Table Reservation](restaurant/images/contact1.png)

* *Below the Fold - Contact Form*

![Restaurant Table Reservation](restaurant/images/contact2.png)

* *Below the Fold - Contact Information*

![Restaurant Table Reservation](restaurant/images/contact3.png)

***

* **Seamless Booking:**  The booking page provides a user-friendly interface for entering desired dates, times, and contact details. If the user is not logged in the navbar offers a Reservation Request form. From this Request form the user is stated that to register is beneficial.

![Restaurant Table Reservation](restaurant/images/request.png)

**Confirmation from Reservation Request Form**

![Restaurant Table Reservation](restaurant/images/confirmation.png)

***

* **Login and Account Management:**  Users can register for an account to manage their reservations, including viewing past experiences and editing or canceling existing reservations. This through the My Reservations page, that shows if the user is logged in.

**Register for an Account**

![Restaurant Table Reservation](restaurant/images/register.png)

**Login to the Account**

![Restaurant Table Reservation](restaurant/images/login.png)

**Logged in User, View of the 'My Reservation' page**

![Restaurant Table Reservation](restaurant/images/myreservations.png)

**Create a Reservation**

![Restaurant Table Reservation](restaurant/images/create.png)

**View/Read Reservation**

![Restaurant Table Reservation](restaurant/images/read.png)

**Update Reservation**

![Restaurant Table Reservation](restaurant/images/update.png)

**Delete Reservation** - Note: Each CRUD function has a similar message popup before altering information.

![Restaurant Table Reservation](restaurant/images/delete.png)

**Signout from Account**

![Restaurant Table Reservation](restaurant/images/signout.png)

* **Admin Reservation Management:** Admins have a dedicated section to view all user reservations, booked times, and user contact details. They can also update reservations and mark them as handled to avoid duplicate inquiries. 

**Future Enhancements**

Restaurant Fine Dine is constantly evolving. The development team is exploring features such as integrating bookings directly with the restaurant's reservation system, eliminating the need for manual staff intervention. Online ordering functionality for direct delivery from the restaurant menu is also on the horizon.

**Ensuring a Flawless Experience**

Thorough testing is paramount for a seamless user experience. Restaurant Fine Dine undergoes rigorous testing procedures, including functionality testing to ensure all features work as intended and responsiveness testing to guarantee optimal display across different devices and screen sizes.

![Restaurant Table Reservation](restaurant/images/home1.png)

**Redirection if Error 404 or 500 occurs**
 
![Restaurant Table Reservation](restaurant/images/404.png)

![Restaurant Table Reservation](restaurant/images/500.png)

**Deployment and Technology Stack**

Restaurant Fine Dine leverages a robust technology stack to deliver a high-performing and user-friendly experience. We'll explore the technologies used in a later section.

**A Collaborative Effort**

The development of Restaurant Fine Dine wouldn't have been possible without the contributions of various resources and individuals. I'll acknowledge them in a dedicated section later in this guide.

**Conclusion**

Restaurant Fine Dine represents a comprehensive solution for enhancing the fine dining experience for both guests and restaurant staff. By leveraging Agile methodologies, user-centered design principles, and a robust technology stack, it delivers a seamless and personalized experience that caters to the needs of all stakeholders. This document has provided a high-level overview of Restaurant Fine Dine. We'll delve deeper into specific aspects in the following sections.

## 02. UX and UI

### User Experience Design (UX) and User Interface Design (UI)

**User Epics:**

#### User Management: This epic would encompass all functionalities related to user accounts, including:
User registration and login
User profile management (edit details, preferences)
Account deletion (optional)

#### Reservation Management: This epic would cover everything related to making and managing reservations:
Search for available tables based on date, time, and party size
Make a reservation for a specific date and time
Modify existing reservations (date, time, party size)
Cancel a reservation

#### Table Management: This epic would focus on managing the restaurant's tables:
Create and edit tables (seating capacity, location)
Mark tables as unavailable (e.g., for maintenance)
View table layout and availability in real-time (optional)

#### Menu Management: This epic would handle everything related to the restaurant's menu:
Create and edit menu items (name, description, price, image)
Categorize menu items (appetizers, main courses, desserts)
Manage seasonal menus or specials (optional)

#### Review and Rating System: This epic would introduce a system for user reviews and ratings:
Allow users to leave reviews and ratings after dining
Display average rating and user reviews on the website/app
Manage review content and moderation (optional)

#### Waitlist Management: This epic would focus on managing waitlists for reservations:
Allow users to join a waitlist for full tables
Notify users when a table becomes available
Manage waitlist priority and queue (optional)

#### Analytics and Reporting: This epic would cover generating reports and analyzing data:
View reservation statistics (number of reservations, popular times)
Analyze customer demographics and preferences (optional)
Generate reports for business insights (optional)

#### Marketing and Promotions: This epic would address marketing and promotional features:
Display special offers and promotions on the website/app
Integrate with email marketing tools (optional)
Manage social media promotion campaigns (optional)

#### Payment Integration: This epic would involve integrating with a payment system:
Allow users to pay for reservations online (optional)
Securely process online payments
Manage payment refunds (optional)

#### Accessibility Features: This epic would focus on making the reservation system accessible:
Implement screen reader compatibility
Support keyboard navigation
Provide clear and concise user interface elements

#### User Stories:

#### User Stories for Restaurant Reservation System Epics
This outlines user epics and user stories categorized by the functionalities they address within the Restaurant Fine Dine project. Epics represent broad areas of functionality, while User Stories detail specific actions that users (customers and business owners) can perform within the system.

**Customer-Facing User Stories**

**Epic: Reservation Management**
* Search with Filters: As a customer, I want to search for available tables by filtering based on date, time, party size, and location (if applicable) to easily find a table that meets my needs.
* View Table Details: As a customer, I want to see details about available tables, such as location, seating capacity, and accessibility features, before making a reservation.
* Special Requests: As a customer, I want to be able to include special requests (e.g., high chair, window seat) during the reservation process to ensure a comfortable dining experience.
* Join Waitlist (Expands on future enhancement 1): As a customer, I want to join a waitlist for a fully booked time slot and receive a notification when a table becomes available.

**Epic: Review and Rating System**
Leave Review: As a customer, I want to leave a review for the restaurant after dining, including rating the food, service, and ambiance.
Read Reviews: As a customer, I want to read reviews left by other diners to get insights into the restaurant's offerings and atmosphere.

**Epic: Accessibility Features**
Mobile-Friendly Interface: As a customer, I want the reservation system to be accessible and user-friendly on all devices, including smartphones and tablets.
Business Owner User Stories:

**Epic: Reservation Management**
Manage Reservations: As a business owner, I want to view, modify, and cancel reservations through a dedicated management interface.

**Epic: Table Management Integration**
Integrate with Table Management System: As a business owner, I want the reservation system to integrate with my existing table management system to ensure accurate availability information.

**Epic: Analytics and Reporting**
View Reservation Trends: As a business owner, I want to view reports on reservation trends, including popular times, party sizes, and cancellation rates, to optimize operations.
Customer Insights (Expands on existing epic): As a business owner, I want to gain insights into customer demographics and preferences based on reservation data to improve marketing efforts.

**Epic: Waitlist Management**
Manage Waitlist Priority: As a business owner, I want to be able to manage the waitlist priority based on factors like arrival time or party size.
Staff Notifications: As a business owner, I want to receive notifications when a table opens up on the waitlist, allowing staff to efficiently seat waiting customers.

**Epic: Marketing and Promotions**
Promote Special Offers: As a business owner, I want to easily create and display special offers and promotions on the reservation system to attract customers.
Track Promotion Performance: As a business owner, I want to track the performance of marketing campaigns to see which promotions are most effective in driving reservations.

**Additional Considerations:**
User stories for Payment Integration and Staff Accounts can be further detailed based on specific implementation plans (e.g., online payment options, staff roles and permissions).
As the project evolves, consider user stories related to loyalty programs, online ordering, and table management features like merging or splitting tables.

#### Implemented in the Project:

#### User Stories - Customer

01. (USC_01) - As a customer, I want to see the available dates and times for booking a table at a restaurant so I can choose a convenient slot.

02. (USC_02) - As a customer, I want to specify the number of people in my party when booking a table so the restaurant can prepare accordingly.

03. (USC_03) - As a customer, I want to be able to easily fill out a booking form with my name, contact information, and to specify the occasion (e.g., birthday dinner, anniversary).

04. (USC_04) - As a customer, I want the option to create, modify or cancel my reservation online in case my plans change, with clear instructions on any cancellation policies.

05. (USC_05) - As a customer, I want to receive a confirmation with the details of my reservation, including the date, time, number of people, the occasion or special request (if applicable).

06. (USC_06) - As a customer, I want to be able to access my booking history and manage my reservations online, including the ability to view upcoming reservations, modify details (if allowed), or cancel reservations.

07. (USC_07) - As a customer, I want to see the restaurant's menu and pricing information online before making a reservation so I can make an informed decision.

**Additional User Stories - Not Implemented**

08. (USC_08) - As a customer, I want to search for restaurants by location, cuisine type, or specific keywords so I can easily find restaurants that meet my preferences.

09. (USC_09) - As a customer, I want to be able to read reviews and ratings left by other diners to get an idea of the restaurant's atmosphere, food quality, and service.

10. (USC_10) - As a customer, I want to be able to subscribe to a restaurant's mailing list or loyalty program to receive updates about promotions, special events, or new menu items.

11. (USC_11) - As a customer, I want to be able to see the estimated wait time for a table if reservations are not available at my preferred time.

12. (USC_12) - As a customer, I want to receive a confirmation email with the details of my reservation, including the date, time, number of people, and any special requests.

#### User Stories - Business Owner

01. (USBO_01) - As a business owner or staff member, I want to have the possibility to administrate reservations using an administration or staff account.

02. (USBO_02) - As a business owner or staff member, I want to allow customers to easily contact and submit table requests online through the Restaurant Fine Dine Table Reservation platform.

03. (USBO_03) - As a business owner or staff member, I want to receive notifications and manage reservations through a user-friendly interface, allowing me to confirm bookings, communicate with customers, and update reservation status.

04. (USBO_04) - As a business owner or staff member, I want to be able to offer promotions and special deals through the Restaurant Fine Dine Table Reservation  platform to attract new customers and encourage repeat business.

05. (USBO_05) - As a business owner or staff member, I want to be able to manage my restaurant's profile on the Restaurant Fine Dine Table Reservation platform, including updating information like opening hours, contact details, and photos.

**Additional User Stories - Business Owner or Staff Member - Not Implemented**

06. (USBO_06) - As a business owner or staff member, I want to have control over my restaurant's availability by setting online reservation time slots and managing table capacity to avoid overbooking.

07. (USBO_07) - As a business owner or staff member, I want to access reports and analytics on reservation data to gain insights into customer behavior, peak dining times, and popular menu items.

08. (USBO_08) - As a business owner or staff member, I want to be able to mark tables as occupied or available to ensure accurate availability information for customers.

09. (USBO_09) - As a business owner or staff member, I want to be able to manage the waitlist for tables and notify customers when their table is ready.

10. (USBO_10) - As a business owner or staff member, I want to be able to see a live dashboard of upcoming reservations, including the date, time, name, contact information, and special requests of each party.

### User Acceptance Criteria (UAC)

#### (UC_1.0) User Registration & Login:

01. (UC_1.1) - Users can register for an account using a valid email address, password, and optional information like name and phone number.

02. (UC_1.2) - Users can log in using their registered email address and password.

03. (UC_1.3) - The system validates email format and password strength during registration.

04. (UC_1.4) - The login process should be secure (using hashed passwords).

#### (UC_2.0) Table Reservation: - Not Implemented

05. (UC_2.1) - Users can view available tables for a specific restaurant on a date and time.

06. (UC_2.2) - The system displays a calendar or similar interface for selecting a reservation date and time.

07. (UC_2.3) - The system prevents users from booking tables in the past or already booked slots.

08. (UC_2.4) - Users can specify the number of guests in their reservation. The system should validate that a valid number of guests is chosen (e.g., not zero).

09. (UC_2.5) - Upon successful reservation, the user receives a confirmation email with details like restaurant name, date, time, and number of guests.

#### (UC_3.0) Admin Functionalities:

10. (UC_3.1) - Admin users can view and manage all restaurant bookings.

11. (UC_3.2) - Admin users can update or cancel existing bookings.

12. (UC_3.3) - Admin users can add, edit, or delete restaurant information.

## 03. Features 

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

## 04. Technologies Used

### Getting Started:
Clone the Repository:
`git clone https://github.com/your-username/restaurant.git`

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

## 05. Data Schema and Relationships

Restaurant Fine Dine Table Reservation System offers specific user functionalities, focusing on basic CRUD (Create, Read, Update, Delete) operations and enhanced administrative control.

**Data Model:**
The system maintains the core data model from the previous description:

1. Customer: Represents a person making a reservation.

**Attributes:**
* id (primary key)
* name (text)
* email (text)
* phone_number (text)
* Reservation: Represents a booking for a table at a specific time.

**Attributes:**
* id (primary key)
* customer_id (foreign key referencing Customer)
* date (date)
* time (time)
* number_of_guests (integer)
* occasion (text - optional)
* agreed_to_terms (boolean)
* special_request (text - optional)

**Future Development:**

Table: Represents a dining table status or prefered table.

**Attributes:**
* status (text) - (e.g., pending, confirmed, cancelled)
* table_id (foreign key referencing Table - optional)

Table: Represents a dining table with a seating capacity.

**Attributes:**
* id (primary key)
* seating_capacity (integer)

**Relationships:**
The relationships between these entities remain the same:
* One-to-Many: A customer can have many reservations (one-to-many relationship between Customer and Reservation tables established through the customer_id foreign key).
* One-to-Many (Optional): A reservation can be for one table (one-to-many relationship between Reservation and Table tables established through a potential foreign key table_id).

**User Functionalities:**
* Create: Users can submit new reservation requests with details like date, time, number of guests, and optional information (occasion, special request).
* Read: Users can view their existing reservations (requires user login).
* Update: Users can modify details of their existing reservations (subject to availability and potentially within a specific timeframe before the reservation).
* Delete: Users can cancel their own reservations (within a specific timeframe before the reservation).

**Administrative Functionalities:**

All CRUD operations: Administrators can Create, Read, Update, and Delete all data within the system, including:
* Customer information
* Reservation details

User Management: Administrators can create, edit, and delete user accounts.

Additional Considerations:
* Implement a secure user authentication system for login and managing reservations.
* Designate clear user roles (e.g., user, administrator) with restricted access levels.
* Define timeframes for users to modify or cancel their reservations.
* Consider functionalities like email confirmations for reservations and modifications (optional).
* Explore integrating with a table management system for assigning tables to reservations (optional).

**Focus on Core Functionalities:**
This approach prioritizes core CRUD functionalities for users while granting administrators full control over the system and user management. This ensures data integrity and allows for streamlined reservation management.

## 06. Testing

When developing this project there was issues with the uploaded Cloudinary images, I could not find a workaround for this, or load the images through static in the Django project image folder. It was not possible to get the CSS to work on Heroku either, only in the development and with the Debug True mode. During the project, both database and other got corrupted when trying to add user functionalites for the reservations system. Even though special settings in both Django and in Heroku Config Var. There could be a database rights issue or anything else. The image itself is connected and resulting with a 200 server code in Chrome Developer mode, but when running the database in local environment it posts a 500 server code. **Note: These issues was later resolved in the updated and published version here.**

#### Test Scenarios for Reservation Form - Login Required

**Scenario 1: Valid Input**
Description: All fields are filled with valid data.

Test Steps:
* Enter a valid name: John Doe.
* Enter a valid email: john.doe@example.com.
* Enter a valid phone number: +1234567890.
* Enter a valid number of guests: 4.
* Select a valid future date (e.g., 2024-09-20).
* Select a valid time within the restaurant's opening hours (e.g., 19:00).
* Enter a valid occasion: Birthday.
* Check the terms checkbox.
* Submit the form.

Expected Result: The form should submit successfully, and the reservation details should be adjusted if needed, with the user seeing a confirmation message with the reservation details.

**Scenario 2: Invalid Name**
Description: The name field is invalid (e.g., less than 2 parts or contains invalid characters).

**Test Steps:**
* Enter an invalid name: John.
* Enter valid email, phone number, guests, date, time, and occasion.
* Check the terms checkbox.
* Submit the form.

Expected Result: The form should not submit. An alert should display: "Please enter a valid full name."

**Scenario 3: Invalid Email**
Description: The email field is invalid (e.g., incorrectly formatted).

Test Steps:
* Enter a valid name, phone number, guests, date, time, and occasion.
* Enter an invalid email: john.doe@com.
* Check the terms checkbox.
* Submit the form.

Expected Result: The form should not submit. An alert should display: "Please enter a valid email address."

**Scenario 4: Invalid Phone Number**
Description: The phone number field is invalid (e.g., incorrect format).

Test Steps:
* Enter a valid name, email, guests, date, time, and occasion.
* Enter an invalid phone number: 12345.
* Check the terms checkbox.
* Submit the form.

Expected Result: The form should not submit. An alert should display: "Please enter a valid phone number."

**Scenario 5: Invalid Number of Guests**
Description: The number of guests is outside the valid range.

Test Steps:
* Enter a valid name, email, phone number, date, time, and occasion.
* Enter an invalid number of guests: 0 or 101.
* Check the terms checkbox.
* Submit the form.

Expected Result: The form should not submit. An alert should display: "Please enter a number of guests between 1 and 100."

**Scenario 6: Invalid Date**
Description: The selected date is in the past or is a Sunday.

Test Steps:
* Enter a valid name, email, phone number, number of guests, time, and occasion.
* Select a past date or a Sunday (e.g., 2024-09-15 for a past date or 2024-09-22 for a Sunday).
* Check the terms checkbox.
* Submit the form.

Expected Result: The form should not submit. The date should be adjusted to the next valid date, and the user should be prompted with a message to confirm the adjusted reservation details.

**Scenario 7: Invalid Occasion**
Description: The occasion description is too short.

Test Steps:
* Enter valid name, email, phone number, guests, date, and time.
* Enter an invalid occasion: AB.
* Check the terms checkbox.
* Submit the form.

Expected Result: The form should not submit. An alert should display: "Please describe your occasion."

**Scenario 8: Terms Checkbox Unchecked**
Description: The terms checkbox is not checked.

Test Steps:
* Enter valid name, email, phone number, guests, date, time, and occasion.
* Do not check the terms checkbox.
* Submit the form.

Expected Result: The submit button should be disabled, and the form should not submit. The submit button should be enabled when the checkbox is checked.

**Scenario 9: Time Out of Booking Hours**
Description: The selected time is not within the allowed booking hours or is too close to closing time.

Test Steps:
* Enter valid name, email, phone number, guests, date, and occasion.
* Select a time that is too close to closing hours (e.g., 13:45 or 22:30).
* Check the terms checkbox.
* Submit the form.

Expected Result: The form should not submit. An alert should display with a message indicating that the time is not bookable due to closing hours restrictions.

**Scenario 10: Time Slot Adjustment**
Description: Adjusted time is provided if the initially selected time is not available.

Test Steps:
* Enter valid name, email, phone number, guests, occasion, and a time that is not available.
* Select a valid date.
* Check the terms checkbox.
* Submit the form.

Expected Result: The form should not submit. The time should be adjusted to the next available slot, and the user should be prompted with confirmation details including the adjusted time.

#### For more in-depth testing scenarios and results, please see the [README_testing.md](README_testing.md)

There was also a problem to get a mockup based on the published Heroku app see:

https://ui.dev/amiresponsive?url=https://restaurant-fine-dine-19f92102eee1.herokuapp.com/

Testing Frameworks:

#### HTML:

https://validator.w3.org/

I conducted manual testing on the HTML code to ensure it adheres to web standards. This involved verifying the overall structure, checking for proper nesting of elements, and confirming the presence of closing tags. Additionally, I tested the functionality of hyperlinks and forms, ensuring they link to the correct destinations and submit data as expected. To be mentioned is that there is functions that could not properly be replaced to functions in the validator for instance functions for navbar and some of the database connections on the projects pages, without risking the overall function.

#### CSS:

https://jigsaw.w3.org/css-validator/

My manual testing of the CSS focused on the visual appearance of the application. I checked for consistent styling across different pages, ensuring elements like buttons, menus, and text adhere to the intended design. Additionally, I tested the responsiveness of the layout on various screen sizes (desktop, mobile, tablet) to confirm proper display across devices. However there is a problem loading this to Heroku, and functions works in development mode but not as a deployed Heroku app. None of the troubleshooting I was able to found was able to offer a solutiong to fix these issues. **Note: These issues was later resolved in the updated and published version here.**

#### JavaScript:

https://validatejavascript.com/
https://jshint.com/

For JavaScript, I tested interactive elements and functionalities driven by JavaScript code, however this is not inluded to this project because of the functions could be created with bootstrap and django functions. This included checking features like form validation (client-side), dynamic content updates (if any), and user interface animations or transitions. For further development some of the future functions would benefit from this where it is applicable. And because of the above issues in the project with both Cloudinary, CSS and all the other static issues, I tried to develop without extra functions.

#### Linting:

https://pep8ci.herokuapp.com/

While not strictly manual testing, I used a pep 8 linting tool called CI Python Linter to analyze the code for potential issues and stylistic inconsistencies. This helped identify areas where the code could be improved for readability and maintainability. The linting tool might have flagged unused variables, improper indentation, or coding practices that deviate from recommended styles.

#### Unit Database Testing: 
Unittest (built-in with Python) or pytest Unit tests focus on individual functions and modules, ensuring they behave as expected with various inputs. For this project 
PyTest was used, but not all with success in all functions, there was database access issues and some functions and test had to be removed due to not compatible, but also that in some cases I could not find the proper information for a solution and a manual testing method was instead used in most cases.

* Unittest
https://docs.python.org/3/library/unittest.html

* Pytest
https://docs.pytest.org/

Tested functionalities like:
* User creation
* Book a fictive reservation
* Send confirmation form feedback
* CRUD based administration (Create, Read Update, Delete)

## 07. Deployment

### Deployment to Heroku:
Create a Heroku Account: `https://signup.heroku.com/`
Install the Heroku CLI: `https://devcenter.heroku.com/`

### Create a New Heroku App:
`heroku create restaurant-fine-dine`

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

## 08. References and Credits

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

## 09. Contributing
It is appreciated for contributions from the community to add to this projects foundation for our collective knowledge! If you have bug fixes, improvements, or new features, feel free to submit a pull request. Here's a suggested workflow for contributing:

### Fork the Repository:
Visit the project repository on GitHub: `https://github.com/<your-username>/`Restaurant-Table-Reservation.
Click the "Fork" button to create your own copy of the repository.

### Clone Your Fork:
Open a terminal window and navigate to your desired local directory.

### Use git clone to clone your forked repository:

`git clone https://github.com/OV00VO/restaurant.git`

## Create a New Branch:

### Navigate to your cloned directory:
`cd restaurant`

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

## 10. Licence

### Licence
This project is licensed under the terms of the MIT License:
[LICENSE.md](LICENSE.md)

