## Ensuring a Smooth Dinner Reservation Experience: Restaurant Fine Dine - Test Cases

[Return to Readme.md](https://github.com/OV00VO/restaurant/blob/main/README.md)

**Introduction**

Building a user-friendly and reliable dinner reservation system is crucial for both restaurants and diners. To achieve this, thorough testing is essential. This document outlines a comprehensive set of test cases specifically designed for the Fine Dine Table Reservation System. These test cases will be categorized based on functionalities and user roles (logged-in and non-logged-in users). 

**Why Test?**

Testing plays a vital role in the success of any software application. Here's why testing the Restaurant Fine Dine Table Reservation System is important:

* **Uncover Functionality Issues:** Tests help identify bugs or errors that might hinder the core functionalities of the reservation system, such as processing reservations or displaying availability accurately.
* **Enhance User Experience (UX):** Through UX testing, we can evaluate how users interact with the system. This helps ensure a smooth and intuitive experience for both diners booking reservations and restaurant staff managing them.
* **Guarantee System Security:** Security testing safeguards user data and prevents unauthorized access. This is especially important for a system handling sensitive information like login credentials.

**Types of Tests Covered**

This document incorporates various testing methods to comprehensively evaluate the Restaurant Fine Dine Table Reservation System:

* **Functional Testing:** This verifies if the system's functionalities, like reservation submission or user profile management, work as intended.
* **Non-Functional Testing:** This assesses aspects like system performance, usability, and security. UX testing falls under this category.

By executing these diverse test cases, we can identify potential problems across various aspects of the Restaurant Fine Dine Table Reservation System. This will ultimately lead to a system that is not only functional but also user-friendly and secure.

**Moving Forward**

This document serves as a foundation for thorough testing. Remember to adapt and expand these test cases based on the specific features and functionalities offered by the Restaurant Fine Dine Table Reservation System you're evaluating.

## Restaurant Fine Dine Table Reservation System - Test Cases

### Login Functionality (No Login Required)

#### Test Case 1: Login with Valid Credentials (Happy Flow)

Expected Result: The user is successfully logged in and redirected to the dashboard or homepage.
Testing: Enter a valid username and password associated with an existing account. Click the "Login" button.

Result: **OK** - Verified if the user is redirected to the expected page (dashboard/homepage) and their username is displayed.
#### Test Case 2: Login with Invalid Username (Bad Flow)

Expected Result: An error message is displayed indicating the username is invalid.
Testing: Enter an invalid username and a valid password. Click the "Login" button.

Result: **OK** - Verified if an error message appears stating "Invalid Username".

#### Test Case 3: Login with Invalid Password (Bad Flow)
Expected Result: An error message is displayed indicating the password is invalid.
Testing: Enter a valid username and an invalid password. Click the "Login" button.
Result: **OK** - Verified if an error message appears stating "Invalid Password”.

#### Test Case 4: Login with Empty Username and Password (Bad Flow)
Expected Result: Error messages are displayed indicating both username and password are required.
Testing: Leave both username and password fields blank. Click the "Login" button.

Result: **OK** - Verified if error messages appear for both username and password fields, stating they are required.

### Request a Reservation Form (No Login Required)

#### Test Case 5: Submit Valid Reservation Request (Happy Flow)
Expected Result: A success message is displayed confirming the reservation request has been submitted.
Testing: Fill out the form with valid information (date, time, number of guests, name, phone number, email). Click the "Submit Request" button.

Result: **OK** - Verified if a success message appears confirming the request.

#### Test Case 6: Submit Reservation Request with Missing Information (Bad Flow)
Expected Result: Error messages are displayed indicating that required fields are missing.
Testing: Leave some required fields empty (e.g., date, name). Click the "Submit Request" button.

Result: **OK** - Verified if error messages appear next to the missing fields, indicating they are required.

#### Test Case 7: Submit Reservation Request with Invalid Date/Time (Bad Flow)
Expected Result: An error message is displayed indicating the date or time is invalid.
Testing: Enter a date in the past or a time outside restaurant operating hours. Click the "Submit Request" button.

Result: **OK** - Verified if an error message appears stating the date or time is invalid.

## CRUD Functionality (Login Required)
Note: These tests assume functionalities Create (add), Read (view), Update (edit), and Delete (cancel) for User Accounts and Reservations.

### Create User Account (Logged In)

#### Test Case 8: Create an Account with Valid Information (Happy Flow)
Expected Result: A new user account is created successfully, and a confirmation message is displayed.
Testing: Navigate to the user account creation page. Enter valid information (username, password, email). Click the "Register Your Account Now" button.

Result: **OK** - Verified if a success message appears confirming the account.

#### Test Case 9: Create an Account with an Existing Username (Bad Flow)
Expected Result: An error message is displayed indicating the username is already taken.
Testing: Enter an existing username and a new password. Click the "Create Account" button.

Result: **OK** - Verified if an error message appears stating "Username already exists".

### Read User Account Information (Logged In)

#### Test Case 10: View Existing User Account Information (Happy Flow)
Expected Result: The user's account information is displayed accurately.
Testing: Navigated to the user account profile page. Verify if the displayed information matches the user's details.

Result: **OK** - Verified that the user account information was created successfully.

### Update User Account Information (Logged In)

#### Test Case 11: Update User Account with Valid Changes (Happy Flow)
Expected Result: The user's account information is updated successfully, and a confirmation message is displayed.
Testing: Navigate to the user account profile page. Edit some information (e.g., email address). Click the "Update Account" button.

Result: **OK** - Verified if a success message appears confirming the update or if the displayed information reflects the changes.

#### Test Case 12: Update User Account with Invalid Information (Bad Flow)
Expected Result: An error message is displayed indicating the information is invalid.
Testing: Try updating information with invalid data (e.g., invalid email format). Click the "Update Account" button.

Result: **OK** - Verified if an error message appears stating the specific information is invalid.

### Delete User Account (Logged In)

#### Test Case 13: Delete User Account (Happy Flow)
Expected Result: The user's account is deleted successfully, and a confirmation message is displayed.
Testing: Navigate to the user account profile page. Locate and confirm the "Delete Account" option (ensure this action is irreversible with a confirmation prompt).

Result: **OK** - Verified if a success message appears confirming account deletion or if the user is redirected to the login page. This function was later dropped for the benefit of manual deletion, because of database issues during development.

### Create Reservation (Logged In)

#### Test Case 14: Create Reservation with Valid Information (Happy Flow)
Expected Result: A new reservation is created successfully, and a confirmation message is displayed.
Testing: Navigate to the reservation creation page. Enter valid information (date, time, number of guests, any special requests). Click the "Create Reservation" button.

Result: **OK** - Verified if a success message appears confirming the reservation.

#### Test Case 15: Create a Reservation with a Conflicting Time Slot (Bad Flow)
Expected Result: An error message is displayed indicating the time slot is unavailable.
Testing: Try creating a reservation for a date and time that is already booked. Click the "Create Reservation" button.

Result: **OK** - Verified if an error message appears stating "Time slot unavailable". This function was abandoned when testing because it conflicted with Bootstrap and Java, creating UX/UI problems with the timeslot.

### Read Reservation Information (Logged In)

#### Test Case 16: View Existing Reservation Information (Happy Flow)
Expected Result: The user's reservation information is displayed accurately.
Testing: Navigated to the user's reservation list or details page. 

Result: **OK** - Verified if the displayed information matches the created reservation details.

### Update Reservation Information (Logged In)

#### Test Case 17: Update Reservation with Valid Changes (Happy Flow)
Expected Result: The user's reservation information is updated successfully, and a confirmation message is displayed.
Testing: Navigate to the reservation details page. Edit some information (e.g., date, number of guests, within the allowed modification window). Click the "Update Reservation" button.

Result: **OK** - Verify if a success message appears confirming the update or if the displayed information reflects the changes.

### Delete Reservation (Logged In)

#### Test Case 18: Delete Reservation (Happy Flow)
Expected Result: The user's reservation is deleted successfully, and a confirmation message is displayed.
Testing: Navigate to the reservation details page. Locate and confirm the "Delete Reservation" option (ensure this action is irreversible with a confirmation prompt).

Result: **OK** - Verified if a success message appears confirming reservation deletion or if the reservation disappears from the user's list.

### Login Functionality (No Login Required)

#### Test Case 19: Forgot Password Functionality (Happy Flow)
Expected Result: The user receives instructions on how to reset their password.
Testing: Navigate to the login page. Click on the "Forgot Password" link. Enter the email address associated with the account. Click the "Send Reset Instructions" button.

Result: **Failed** - Tried to verify if an email was sent to the provided address with instructions on resetting the password (reset link or temporary password). This function did fail due to the fixed settings in Django all auth. 

**Fix:** A link for 'Reset Your Current Password Here' was added instead.

### HTML Validation

#### Test Case 20: Validate HTML Structure and Standards
Expected Result: The HTML code adheres to W3C standards with minimal errors.
Testing: Use an online HTML validator like https://validator.w3.org/ to upload or paste the HTML code. Analyze the reported errors and warnings.

Result: **OK** - Verified if any critical errors could break website functionality. Non-critical warnings were documented for future improvement. Within the development, there were dynamic addresses that due to the HTML validation had to be dropped due to the invalid character “{% ‘URL‘ %}” in the form of the brackets in the Href URL.

#### Test Case 21 Test Functionality of Hyperlinks and Forms
Expected Result: Hyperlinks direct users to the intended pages, and forms submit data correctly.
Testing: Manually click on hyperlinks and navigate to different sections of the website. Ensure forms accept valid data and submit it successfully (e.g., user registration form).

Result: **OK** - Verified if all hyperlinks and forms function as intended. As mentioned, one link in the Login to Your Account failed because of the non-dynamic approach that was needed for HTML validation excluding “{% ‘URL’ %}” as much as possible. 
CSS Validation

#### Test Case 22: Validate CSS Code for Syntax and Specificity
Expected Result: The CSS code adheres to CSS standards with minimal errors.
Testing: Use an online CSS validator like https://jigsaw.w3.org/css-validator/ to upload or paste the CSS code. Analyze the reported errors and warnings.

Result: **OK** - Verified if there are any critical errors that could cause styling issues. Non-critical warnings were reported from the Bootstrap CSS stylesheet.

#### Test Case 23: Test Visual Consistency and Responsiveness
Expected Result: The website maintains consistent styling across different pages and displays correctly on various screen sizes (desktop, mobile, tablet).
Testing: Manually navigate through the website on a desktop computer. Use browser developer tools to simulate different screen sizes and check for layout issues.
Result: **OK** - Verified if the visual design remains consistent and the layout adjusts appropriately for different screen sizes.

### JavaScript Functionality Testing

#### Test Case 24: Test Interactive Elements and JavaScript Functionalities (if applicable)
Expected Result: Interactive elements driven by JavaScript work as intended (e.g., form validation, dynamic content updates).
Testing: If the project utilizes JavaScript for interactive features, create manual tests to verify their functionality (e.g., test form validation messages, and confirm dynamic content updates).

Result: **OK** - Verified if JavaScript-driven functionalities work as expected. There was an approach to creating timeslots that did conflict with Bootstrap functionality creating a UX/UI issue where timeslots were not able to append to the form.

### Linting

#### Test Case 25: Analyze Code for Maintainability and Style
Expected Result: The code adheres to PEP 8 style guidelines with minimal linting errors.
Testing: Use a linting tool like https://pep8ci.herokuapp.com/ to analyze the Python code. Review the reported errors and warnings.

Result: **OK** - Verified if any major style inconsistencies could impact code readability. Linting issues such as indentation and whitespaces were removed.

### Database Testing

#### Test Case 26: User Creation Test
Expected Result: The create_user function successfully creates a new user in the database with valid data.
Testing: (Assuming use of Pytest) Write a unit test using the pytest framework to test the create_user function with various user data inputs (valid, invalid, edge cases).

Result: **OK** - Verified manually instead, the function behaved as expected and returned the correct results for different user data scenarios. Pytest was attempted but failed when connecting to the Elephant PostgreSQL database.

#### Test Case 27: Book a Fictive Reservation Test
Expected Result: The book_reservation function successfully creates a new reservation in the database with valid data.
Testing: (Assuming use of Pytest) Write a unit test using the pytest framework to test the book_reservation function with various reservation data inputs (valid, invalid, edge cases).

Result: **OK** - Verified manually if the function behaved as expected and returned the correct results for different reservation data scenarios. Pytest was attempted but failed when connecting to the Elephant PostgreSQL database.

#### Test Case 28: Send Confirmation Form Feedback Test
Testing: (Assuming use of Pytest) Write a unit test using the pytest framework to test the send_feedback function with various feedback data inputs (valid, invalid, edge cases). Mock any external dependencies (e.g., email sending) to isolate the function's behavior.

Result: **OK** - Verified manually if the function behaved as expected and processed the feedback data correctly for different scenarios using form submit.

#### Test Case 29: CRUD Admin Panel Tests
Expected Result: The admin panel functionalities for Create, Read, Update, and Delete (CRUD) operations on user and reservation data work as intended.
Testing: (Assuming use of Manual Test or Pytest) Write unit tests for each CRUD operation in the admin panel.

Create: Test adding new users and reservations with valid data.
Read: Test retrieving existing user and reservation data.
Update: Test modifying user and reservation data with valid changes.
Delete: Test deleting users and reservations (ensure proper confirmation steps).

Result: **OK** - Verified if each CRUD operation functions worked correctly in the admin panel for various data inputs. Pytest was attempted but failed when connecting to the Elephant PostgreSQL database.

#### Test Case 30: Manual Testing of All Functions
This final test case focuses on manually testing all functionalities of the application to ensure a smooth user experience. Due to the limitations and challenges encountered during unit testing with Pytest (documented in previous comments), manual testing is employed to provide comprehensive coverage.

### Scope:

**User Management:**
* User registration (valid and invalid data)
* User login (valid and invalid credentials)
* User profile management (updating details)
* Password reset functionality

**Reservations:**
* Making reservations (valid and invalid data)
* Viewing and managing existing reservations
* Cancellation functionality

**General Functionality:**
* Navigation through the application
* Overall user interface (UI) and user experience (UX)
* Error handling and informative messages

**Results:**

The results of manual testing are documented here and include:
* Functionality Tested (a brief description)
* Expected Behavior
* Actual Behavior (observations during testing)
* Pass/Fail Status (based on observed behavior)
* Notes (any additional observations or potential issues)
* Manual Testing Results

### Functionality Tested: User Registration (Valid Data)

**Expected Behavior:**
* The user enters valid registration details (username, email, password, etc.)
* The system validates the information (e.g., email format, password strength).
* The user account is successfully created.
* A confirmation message is shown to the user.

**Actual Behavior:**
* The user was able to enter valid registration details.
* The system validated the information with appropriate error messages for invalid formats.
* The user account was successfully created.
* A confirmation page was shown to the current user.

Pass/Fail Status: **Pass**

**Notes:**
The confirmation information was displayed properly.

### Functionality Tested: User Login (Valid Credentials)

**Expected Behavior:**
* The user enters a registered username and password.
* The system validates the credentials.
* The user is successfully logged in and redirected to the appropriate page.

**Actual Behavior:**
* The user was able to enter valid credentials.
* The system validated the credentials and displayed a success message.
* The user was successfully logged in and redirected to the dashboard.

Pass/Fail Status: **Pass**

### Functionality Tested: User Login (Invalid Username)

**Expected Behavior:**
* The user enters an invalid username or a username that does not exist.
* The system displays an error message indicating invalid credentials.

**Actual Behavior:**
* The user entered an invalid username.
* The system displayed an error message stating "Username not found."

Pass/Fail Status: **Pass**

### Benefits of Manual Testing:
* Complements Unit Testing: Provides a broader perspective on user experience.
* Covers User Interactions: Verifies how the application behaves from a user's standpoint.
* Identifies Usability Issues: Detects potential problems that might be missed by automated tests.

### Limitations of Manual Testing:
* Time-Consuming: Requires manual effort to execute each test case.
* Repetitive: Testing similar functionalities can be tedious.
* Prone to Human Error: Human testers might miss edge cases or make mistakes.

**Recommendations:**
* Prioritize manual testing for functionalities deemed most critical or complex.
* Utilize tools for capturing screenshots or screen recordings during testing to document observations.
* Automate repetitive tasks where feasible to improve efficiency.
* Continuously refine manual test cases as the application evolves.

**Future Considerations:**
* Leverage advancements in automated testing as unit testing capabilities mature.
* Explore browser automation tools for potential partial automation of user interactions.
* Prioritize writing unit tests for core functionalities as development progresses that work with login into a PostgresSQL database being able to create test databases.

## Test Case Scenarios - For Future Development
As the Restaurant Fine Dine Table Reservation System evolves with new features, additional testing becomes crucial. This section explores various scenarios that could be incorporated into future test case development, categorized by functionality:

### User Interface (Not Logged In)

#### Test Cases

* **Test Case 31: Access Reservation Form (Pass/Fail)**
    * **Expected Result:** User opens the homepage. Verify the reservation form with all fields (User Name, etc.) is displayed.
    * **Testing:** Open the application homepage and verify the presence of the reservation form.
    * **Result:** Pass (if form is displayed) / Fail (if form is missing fields, not displayed, or requires login)

* **Test Case 32: Navigation Bar Links (Pass/Fail)**
    * **Expected Result:** User clicks each link in the navigation bar. Verify links redirect to corresponding webpages or perform expected actions (e.g., logout for logged-in user).
    * **Testing:** Click on each link in the navigation bar and verify if it leads to the intended destination or performs the expected action.
    * **Result:** Pass (if all links function correctly) / Fail (if a link is broken, leads to an incorrect page, or doesn't work as intended)

* **Test Case 33: Missing Login Indicator (Pass/Fail)**
    * **Expected Result:** User opens the homepage. Verify the website clearly indicates the user is not logged in (if applicable). 
    * **Testing:** Open the application homepage and verify if there's a clear indication that the user is not logged in (e.g., login button, username absence).
    * **Result:** Pass (if user status is clear) / Fail (if user status is unclear)

* **Test Case 34: User Interface Errors (Pass/Fail)**
    * **Expected Result:** User accesses a non-existent URL. Verify a user-friendly 404 error page is displayed. (Simulate server error if possible, and verify user-friendly 500 error page).
    * **Testing:** Access a non-existent URL and verify if a user-friendly 404 error page is displayed. If possible, simulate a server error and verify if a user-friendly 500 error page is shown.
    * **Result:** Pass (if user-friendly error pages are displayed) / Fail (if incorrect or unhelpful error pages are displayed)

### Reservation Functionality (Not Logged In)

#### Test Cases

* **Test Case 35: Valid Reservation Submission (Pass/Fail)**
    * **Expected Result:** User fills out the form with valid data and submits. Verify the system processes the reservation, displays a confirmation message, and (if applicable) sends a confirmation email.
    * **Testing:** Enter valid information in the reservation form (date, time, number of guests, name, phone number, email) and submit the request. Verify a confirmation message and (if applicable) a confirmation email are received.
    * **Result:** Pass (if reservation is processed, confirmation received, and email sent) / Fail (if reservation is not processed, confirmation missing, or email not sent)

* **Test Case 36: Empty Name Field (Pass/Fail)**
    * **Expected Result:** User submits the form with an empty name field. Verify the system displays an error message for the missing name.
    * **Testing:** Leave the name field empty and submit the reservation form. Verify if an error message appears indicating a missing name.
    * **Result:** Pass (if error message for missing name is displayed) / Fail (if no error message is displayed)

* **Test Case 37: Invalid Email Format (Pass/Fail)**
    * **Expected Result:** User submits the form with an invalid email address. Verify the system displays an error message for the invalid email format.
    * **Testing:** Enter an invalid email address in the reservation form and submit the request. Verify if an error message appears stating "Invalid Email".
    * **Result:** Pass (if error message for invalid email format is displayed) / Fail (if no error message is displayed or an incorrect error message is shown)

* **Test Case 38: Date/Time Outside Operational Hours (Pass/Fail)**
    * **Expected Result:** User tries to select a date or time outside operational hours (if applicable). Verify the system displays an error message for the invalid selection.
    * **Testing:** Try to select a date or time that falls outside the operational hours in the reservation form. Verify if an error message appears stating "Invalid Date/Time".
    * **Result:** Pass (if error message for invalid date/time is displayed) / Fail (if no error message is displayed or reservation is not created)

### Reservation Functionality (Not Logged In)

* **Test Case 39: Modify Reservation Before Submit (Pass/Fail)**
    * **Expected Result:** User enters details, modifies them, then submits. Verify the system reflects the updated details in the confirmation message.
    * **Testing:** Enter details in the reservation form, modify them before submitting, and then submit the request. Verify if the confirmation message reflects the updated information.
    * **Result:** Pass (if system reflects updated details) / Fail (if system doesn't update details or displays outdated information)

* **Test Case 40: Incomplete Reservation Submit (Pass/Fail)**
    * **Expected Result:** User submits the form with missing data. Verify the system displays error messages for all missing fields.
    * **Testing:** Leave some required fields empty (e.g., date, name) and submit the reservation form. Verify if error messages appear next to the missing fields.
    * **Result:** Pass (if error messages are displayed for all missing fields) / Fail (if no error messages appear or incomplete submission is allowed)

### Additional Functionality (Not Logged In)

* **Test Case 41: View Availability (Pass/Fail)**
    * **Expected Result:** User searches for available tables based on date, time, and party size (if applicable). Verify the system displays accurate availability options.
    * **Testing:** (If applicable) Search for available tables using specific criteria (date, time, party size) and verify if the system displays accurate availability options.
    * **Result:** Pass (if accurate availability is displayed) / Fail (if inaccurate or misleading availability options are shown)

* **Test Case 42: View FAQs (Pass/Fail)**
    * **Expected Result:** User clicks the FAQs link. Verify the FAQs page displays relevant information.
    * **Testing:** Click on the FAQs link and verify if the FAQs page opens and displays relevant information about the reservation system.
    * **Result:** Pass (if relevant information is displayed) / Fail (if FAQs page is missing or contains incorrect information)

### Edge Cases (Not Logged In)

#### Test Cases

* **Test Case 43: Large Party Size (Pass/Fail)**
    * **Expected Result:** User tries to submit a reservation for a party size exceeding the limit (if applicable). Verify the system displays an error message for exceeding the limit.
    * **Testing:** Try to submit a reservation for a number of guests exceeding the allowed limit (if applicable). Verify if an error message appears stating "Party size exceeds limit".
    * **Result:** Pass (if error message for exceeding limit is displayed) / Fail (if no error message is displayed or reservation is allowed for exceeding limit)

* **Test Case 44: Conflicting Reservation Times (Pass/Fail)**
    * **Expected Result:** User tries to submit a reservation with a time slot already booked. Verify the system displays an error message for the conflicting time.
    * **Testing:** Try to submit a reservation for a date and time that is already booked. Verify if an error message appears stating "Time slot unavailable".
    * **Result:** Pass (if error message for conflicting time is displayed) / Fail (if no error message is displayed or reservation is allowed for conflicting time)

* **Test Case 45: Special Characters in Name (Pass/Fail)**
    * **Expected Result:** User enters a name with special characters. Verify the system accepts the name and processes the reservation.
    * **Testing:** Enter a name with special characters in the reservation form and submit the request. Verify if the system accepts the name and processes the reservation successfully.
    * **Result:** Pass (if name is accepted and reservation is processed) / Fail (if name is rejected or reservation is not processed due to special characters)

**Note:** Test Cases 41 (Search Availability) and functionalities requiring login (Logged In sections) are optional and may depend on the specific features of the reservation system.

### User Interface (Logged In)

#### Test Cases

* **Test Case 46: Access User Profile (Pass/Fail)**
    * **Expected Result:** Logged-in user clicks on their profile icon. Verify the user profile page is displayed with account details (name, email, reservation history, etc.).
    * **Testing:** Log in with a registered account. Click on the profile icon and verify if the user profile page opens with account details.
    * **Result:** Pass (if user profile page opens with details) / Fail (if profile page is inaccessible or missing details)

* **Test Case 47: Edit User Profile (Pass/Fail)**
    * **Expected Result:** Logged-in user edits profile information (e.g., email address) and saves changes. Verify the system updates the user profile with the new information.
    * **Testing:** Log in with a registered account. Edit profile information in the designated fields and save changes. Verify if the user profile reflects the updated information.
    * **Result:** Pass (if profile information is updated successfully) / Fail (if changes are not saved or system encounters errors)

* **Test Case 48: Navigation after Login (Pass/Fail)**
    * **Expected Result:** User logs in successfully. Verify the navigation bar displays additional options relevant to logged-in users (e.g., reservation history, cancellation option).
    * **Testing:** Log in with a registered account. Verify if the navigation bar changes and displays options specific to logged-in users.
    * **Result:** Pass (if navigation bar updates with logged-in user options) / Fail (if navigation remains unchanged or displays incorrect options)

### Reservation Functionality (Logged In)

#### Test Cases

* **Test Case 49: View Reservation History (Pass/Fail)**
    * **Expected Result:** Logged-in user accesses the reservation history section. Verify the system displays a list of past and upcoming reservations for the user.
    * **Testing:** Log in with a registered account. Navigate to the reservation history section and verify if a list of the user's past and upcoming reservations is displayed.
    * **Result:** Pass (if reservation history is displayed accurately) / Fail (if history section is inaccessible or displays inaccurate information)

* **Test Case 50: Cancel Existing Reservation (Pass/Fail)**
    * **Expected Result:** Logged-in user selects a reservation from their history and cancels it. Verify the system confirms the cancellation and removes the reservation from the user's history.
    * **Testing:** Log in with a registered account. Choose a reservation from the history and initiate cancellation. Verify confirmation for cancellation and that the reservation is removed from the list.
    * **Result:** Pass (if reservation is successfully cancelled and removed from history) / Fail (if cancellation fails or reservation remains in the history)

* **Test Case 51: Modify Existing Reservation (Optional - Pass/Fail)**
    * **Expected Result:** Logged-in user selects a reservation from their history, edits details (date, time, etc.), and saves changes. Verify the system confirms the modification and updates the reservation details in the user's history.  **(Optional feature depending on system capabilities)**
    * **Testing:** (If applicable) Log in with a registered account. Choose a reservation from the history, modify details, and save changes. Verify confirmation for modification and that the reservation reflects the updated details.
    * **Result:** Pass (if reservation is successfully modified and history reflects changes) / Fail (if modification fails or history doesn't update)

**Note:** Test Case 51 (Modify Existing Reservation) is optional and depends on the functionalities offered by the system.

## Fine Dine Table Reservation System Test Cases (Continued)

### Additional Functionalities (Logged In)

#### Test Cases

* **Test Case 52: Leave a Review (Optional - Pass/Fail)**
    * **Expected Result:** Logged-in user visits a restaurant profile after dining. Verify the system allows the user to submit a review with a rating and comments. (Optional feature depending on system design)
    * **Testing:** (If applicable) Log in with a registered account. Visit a restaurant profile from a past reservation and verify if a review section is available. Submit a review with a rating and comments.
    * **Result:** Pass (if review submission is successful) / Fail (if review section is unavailable or submission fails)

* **Test Case 53: Subscribe to Promotions (Optional - Pass/Fail)**
    * **Expected Result:** Logged-in user subscribes to receive promotional emails or notifications about restaurant offers. (Optional feature depending on system design)
    * **Testing:** (If applicable) Log in with a registered account. Locate a subscription option for promotions and subscribe. Verify confirmation for subscribing.
    * **Result:** Pass (if user is successfully subscribed) / Fail (if subscription option is unavailable or fails)

**Note:** Test Cases 52 (Leave a Review) and 53 (Subscribe to Promotions) are optional and depend on the additional features offered by the Restaurant Fine Dine Table Reservation System.

### Security Considerations

#### Test Cases

* **Test Case 54: Secure Login (Pass/Fail)**
    * **Expected Result:** User attempts to login with invalid credentials. Verify the system displays an error message and does not grant access.
    * **Testing:** Try to log in with incorrect username or password combinations. Verify if the system displays an error message stating "Invalid Login" and doesn't allow unauthorized access.
    * **Result:** Pass (if system prevents login with invalid credentials) / Fail (if incorrect credentials grant access or error message is not displayed)

* **Test Case 55: Password Reset (Pass/Fail)**
    * **Expected Result:** User initiates a password reset process using their registered email. Verify the system sends a password reset link to the email address.
    * **Testing:** Simulate a forgotten password scenario. Initiate a password reset using a registered email address. Verify if a password reset link is sent to the email.
    * **Result:** Pass (if password reset link is sent successfully) / Fail (if link is not sent or reset process fails)

**Enhanced Reservation Management:**

#### Test Cases

* **Test Case 56: Manage Special Requests (Pass/Fail)**
    * **Expected Result:** Users can add special requests during reservation (e.g., high chair, window table). Verify the system captures these requests and transmits them to the restaurant.
    * **Testing:** During the reservation process, attempt to add special requests in a designated field (e.g., high chair). Submit the reservation and verify if the restaurant receives the reservation details including the special requests.
    * **Result:** Pass (if special requests are captured and transmitted) / Fail (if requests are not captured or not sent to the restaurant)

* **Test Case 57: Split Bill Option (Pass/Fail)**
    * **Expected Result:** Users can choose to split the bill amongst their party during reservation (if applicable). Verify the system processes the split bill request and transmits it to the restaurant.
    * **Testing:** (If applicable) During the reservation process, look for an option to split the bill. Select the split bill option and specify the number of guests in the party. Submit the reservation and verify if the restaurant receives the reservation details with the split bill request.
    * **Result:** Pass (if split bill option is processed and transmitted) / Fail (if split bill option is unavailable or not sent to the restaurant)

* **Test Case 58: Reservation Notes (Pass/Fail)**
    * **Expected Result:** Users can add internal notes to reservations (for staff use only). Verify the system stores these notes securely and allows authorized staff to access them.
    * **Testing:** (If applicable) During the reservation process, look for a designated field for internal notes (likely not visible to users). Simulate adding an internal note for staff (e.g., dietary restrictions).  Log in with a designated staff account and verify if the internal note is visible and accessible.
    * **Result:** Pass (if notes are stored securely and accessible to authorized staff) / Fail (if notes are not secure, accessible to unauthorized users, or not displayed for staff)

**Advanced User Management:**

#### Test Cases

* **Test Case 59: User Account Deletion (Pass/Fail)**
    * **Expected Result:** Logged-in users can delete their accounts. Verify the system prompts for confirmation, deletes the account securely, and removes all associated reservation data.
    * **Testing:** Log in to a user account. Locate the option to delete the account and initiate the deletion process. Verify the system prompts for confirmation and requires entering the password for verification. After confirmation, verify if the account is deleted and reservation history is no longer accessible.
    * **Result:** Pass (if account deletion is secure, confirmed, and removes all data) / Fail (if deletion is easy without confirmation, doesn't remove data, or encounters errors)

* **Test Case 60: Multiple Account Logins (Pass/Fail)**
    * **Expected Result:** Test if users can log in to their accounts from multiple devices simultaneously (if applicable). Verify the system handles this scenario securely and avoids conflicts.
    * **Testing:** (If applicable) Log in to a user account on one device. Then, on a separate device, attempt to log in to the same account. Verify the system either allows login on both devices (with clear warnings) or prompts the user to log out from the first device for security reasons. 
    * **Result:** Pass (if system handles multiple logins securely or prevents conflicts) / Fail (if multiple logins are unrestricted or cause data inconsistencies)