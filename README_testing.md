## Restaurant Booking System Test Cases
### Login Functionality (No Login Required)
#### Test Case 1: Login with Valid Credentials (Happy Flow)
Expected Result: The user is successfully logged in and redirected to the dashboard or homepage.
Testing: Enter a valid username and password associated with an existing account. Click the "Login" button.
Result: OK - Verified if the user is redirected to the expected page (dashboard/homepage) and their username is displayed.
#### Test Case 2: Login with Invalid Username (Bad Flow)
Expected Result: An error message is displayed indicating the username is invalid.
Testing: Enter an invalid username and a valid password. Click the "Login" button.
Result: OK - Verified if an error message appears stating "Invalid Username".
#### Test Case 3: Login with Invalid Password (Bad Flow)
Expected Result: An error message is displayed indicating the password is invalid.
Testing: Enter a valid username and an invalid password. Click the "Login" button.
Result: OK - Verified if an error message appears stating "Invalid Password”.
#### Test Case 4: Login with Empty Username and Password (Bad Flow)
Expected Result: Error messages are displayed indicating both username and password are required.
Testing: Leave both username and password fields blank. Click the "Login" button.
Result: OK - Verified if error messages appear for both username and password fields, stating they are required.
Request a Reservation Form (No Login Required)
#### Test Case 5: Submit Valid Reservation Request (Happy Flow)
Expected Result: A success message is displayed confirming the reservation request has been submitted.
Testing: Fill out the form with valid information (date, time, number of guests, name, phone number, email). Click the "Submit Request" button.
Result: OK - Verified if a success message appears confirming the request.
#### Test Case 6: Submit Reservation Request with Missing Information (Bad Flow)
Expected Result: Error messages are displayed indicating that required fields are missing.
Testing: Leave some required fields empty (e.g., date, name). Click the "Submit Request" button.
Result: OK - Verified if error messages appear next to the missing fields, indicating they are required.
#### Test Case 7: Submit Reservation Request with Invalid Date/Time (Bad Flow)
Expected Result: An error message is displayed indicating the date or time is invalid.
Testing: Enter a date in the past or a time outside restaurant operating hours. Click the "Submit Request" button.
Result: OK - Verified if an error message appears stating the date or time is invalid.
### CRUD Functionality (Login Required)
Note: These tests assume functionalities Create (add), Read (view), Update (edit), and Delete (cancel) for User Accounts and Reservations.
Create User Account (Logged In)
#### Test Case 8: Create an Account with Valid Information (Happy Flow)
Expected Result: A new user account is created successfully, and a confirmation message is displayed.
Testing: Navigate to the user account creation page. Enter valid information (username, password, email). Click the "Register Your Account Now" button.
Result: OK - Verified if a success message appears confirming the account.
#### Test Case 9: Create an Account with an Existing Username (Bad Flow)
Expected Result: An error message is displayed indicating the username is already taken.
Testing: Enter an existing username and a new password. Click the "Create Account" button.
Result: OK - Verified if an error message appears stating "Username already exists".
Read User Account Information (Logged In)
#### Test Case 10: View Existing User Account Information (Happy Flow)
Expected Result: The user's account information is displayed accurately.
Testing: Navigated to the user account profile page. Verify if the displayed information matches the user's details.
Result: OK - Verified that the user account information was created successfully.
Update User Account Information (Logged In)
#### Test Case 11: Update User Account with Valid Changes (Happy Flow)
Expected Result: The user's account information is updated successfully, and a confirmation message is displayed.
Testing: Navigate to the user account profile page. Edit some information (e.g., email address). Click the "Update Account" button.
Result: OK - Verified if a success message appears confirming the update or if the displayed information reflects the changes.
#### Test Case 12: Update User Account with Invalid Information (Bad Flow)
Expected Result: An error message is displayed indicating the information is invalid.
Testing: Try updating information with invalid data (e.g., invalid email format). Click the "Update Account" button.
Result: OK - Verified if an error message appears stating the specific information is invalid.
Delete User Account (Logged In)
#### Test Case 13: Delete User Account (Happy Flow)
Expected Result: The user's account is deleted successfully, and a confirmation message is displayed.
Testing: Navigate to the user account profile page. Locate and confirm the "Delete Account" option (ensure this action is irreversible with a confirmation prompt).
Result: OK - Verified if a success message appears confirming account deletion or if the user is redirected to the login page. This function was later dropped for the benefit of manual deletion, because of database issues during development.
### Create Reservation (Logged In)
#### Test Case 14: Create Reservation with Valid Information (Happy Flow)
Expected Result: A new reservation is created successfully, and a confirmation message is displayed.
Testing: Navigate to the reservation creation page. Enter valid information (date, time, number of guests, any special requests). Click the "Create Reservation" button.
Result: OK - Verified if a success message appears confirming the reservation.
#### Test Case 15: Create a Reservation with a Conflicting Time Slot (Bad Flow)
Expected Result: An error message is displayed indicating the time slot is unavailable.
Testing: Try creating a reservation for a date and time that is already booked. Click the "Create Reservation" button.
Result: OK - Verified if an error message appears stating "Time slot unavailable". This function was abandoned when testing because it conflicted with Bootstrap and Java, creating UX/UI problems with the timeslot.
Read Reservation Information (Logged In)
#### Test Case 16: View Existing Reservation Information (Happy Flow)
Expected Result: The user's reservation information is displayed accurately.
Testing: Navigated to the user's reservation list or details page. 
Result: OK - Verified if the displayed information matches the created reservation details.
Update Reservation Information (Logged In)
#### Test Case 17: Update Reservation with Valid Changes (Happy Flow)
Expected Result: The user's reservation information is updated successfully, and a confirmation message is displayed.
Testing: Navigate to the reservation details page. Edit some information (e.g., date, number of guests, within the allowed modification window). Click the "Update Reservation" button.
Result: OK - Verify if a success message appears confirming the update or if the displayed information reflects the changes.
### Delete Reservation (Logged In)
#### Test Case 18: Delete Reservation (Happy Flow)
Expected Result: The user's reservation is deleted successfully, and a confirmation message is displayed.
Testing: Navigate to the reservation details page. Locate and confirm the "Delete Reservation" option (ensure this action is irreversible with a confirmation prompt).
Result: OK - Verified if a success message appears confirming reservation deletion or if the reservation disappears from the user's list.
Login Functionality (No Login Required)
#### Test Case 19: Forgot Password Functionality (Happy Flow)
Expected Result: The user receives instructions on how to reset their password.
Testing: Navigate to the login page. Click on the "Forgot Password" link. Enter the email address associated with the account. Click the "Send Reset Instructions" button.
Result: Failed - Tried to verify if an email was sent to the provided address with instructions on resetting the password (reset link or temporary password). This function did fail due to the fixed settings in Django all auth, a link for Reset Your Current Password Here was added instead.
HTML Validation
#### Test Case 20: Validate HTML Structure and Standards
Expected Result: The HTML code adheres to W3C standards with minimal errors.
Testing: Use an online HTML validator like https://validator.w3.org/ to upload or paste the HTML code. Analyze the reported errors and warnings.
Result: OK - Verified if any critical errors could break website functionality. Non-critical warnings were documented for future improvement. Within the development, there were dynamic addresses that due to the HTML validation had to be dropped due to the invalid character “{% ‘URL‘ %}” in the form of the brackets in the Href URL.
#### Test Case 21 Test Functionality of Hyperlinks and Forms
Expected Result: Hyperlinks direct users to the intended pages, and forms submit data correctly.
Testing: Manually click on hyperlinks and navigate to different sections of the website. Ensure forms accept valid data and submit it successfully (e.g., user registration form).
Result: OK - Verified if all hyperlinks and forms function as intended. As mentioned, one link in the Login to Your Account failed because of the non-dynamic approach that was needed for HTML validation excluding “{% ‘URL’ %}” as much as possible. 
CSS Validation
#### Test Case 22: Validate CSS Code for Syntax and Specificity
Expected Result: The CSS code adheres to CSS standards with minimal errors.
Testing: Use an online CSS validator like https://jigsaw.w3.org/css-validator/ to upload or paste the CSS code. Analyze the reported errors and warnings.
Result: OK - Verified if there are any critical errors that could cause styling issues. Non-critical warnings were reported from the Bootstrap CSS stylesheet. 
#### Test Case 23: Test Visual Consistency and Responsiveness
Expected Result: The website maintains consistent styling across different pages and displays correctly on various screen sizes (desktop, mobile, tablet).
Testing: Manually navigate through the website on a desktop computer. Use browser developer tools to simulate different screen sizes and check for layout issues.
Result: OK - Verified if the visual design remains consistent and the layout adjusts appropriately for different screen sizes.
JavaScript Functionality Testing
#### Test Case 24: Test Interactive Elements and JavaScript Functionalities (if applicable)
Expected Result: Interactive elements driven by JavaScript work as intended (e.g., form validation, dynamic content updates).
Testing: If the project utilizes JavaScript for interactive features, create manual tests to verify their functionality (e.g., test form validation messages, and confirm dynamic content updates).
Result: OK - Verified if JavaScript-driven functionalities work as expected. There was an approach to creating timeslots that did conflict with Bootstrap functionality creating a UX/UI issue where timeslots were not able to append to the form.
Linting
#### Test Case 25: Analyze Code for Maintainability and Style
Expected Result: The code adheres to PEP 8 style guidelines with minimal linting errors.
Testing: Use a linting tool like https://pep8ci.herokuapp.com/ to analyze the Python code. Review the reported errors and warnings.
Result: OK - Verified if any major style inconsistencies could impact code readability. Linting issues such as indentation and whitespaces were removed.
Database Testing
#### Test Case 26: User Creation Test
Expected Result: The create_user function successfully creates a new user in the database with valid data.
Testing: (Assuming use of Pytest) Write a unit test using the pytest framework to test the create_user function with various user data inputs (valid, invalid, edge cases).
Result: OK - Verified manually instead, the function behaved as expected and returned the correct results for different user data scenarios. Pytest was attempted but failed when connecting to the Elephant PostgreSQL database.
#### Test Case 27: Book a Fictive Reservation Test
Expected Result: The book_reservation function successfully creates a new reservation in the database with valid data.
Testing: (Assuming use of Pytest) Write a unit test using the pytest framework to test the book_reservation function with various reservation data inputs (valid, invalid, edge cases).
Result: Verified manually if the function behaved as expected and returned the correct results for different reservation data scenarios. Pytest was attempted but failed when connecting to the Elephant PostgreSQL database.
#### Test Case 28: Send Confirmation Form Feedback Test
Testing: (Assuming use of Pytest) Write a unit test using the pytest framework to test the send_feedback function with various feedback data inputs (valid, invalid, edge cases). Mock any external dependencies (e.g., email sending) to isolate the function's behavior.
Result: Ok - Verified manually if the function behaved as expected and processed the feedback data correctly for different scenarios using form submit.
#### Test Case 29: CRUD Admin Panel Tests
Expected Result: The admin panel functionalities for Create, Read, Update, and Delete (CRUD) operations on user and reservation data work as intended.
Testing: (Assuming use of Pytest) Write unit tests for each CRUD operation in the admin panel.
Create: Test adding new users and reservations with valid data.
Read: Test retrieving existing user and reservation data.
Update: Test modifying user and reservation data with valid changes.
Delete: Test deleting users and reservations (ensure proper confirmation steps).
Result: OK - Verified if each CRUD operation functions correctly in the admin panel for various data inputs. Pytest was attempted but failed when connecting to the Elephant PostgreSQL database.
#### Test Case 30: Manual Testing of All Functions
This final test case focuses on manually testing all functionalities of the application to ensure a smooth user experience. Due to the limitations and challenges encountered during unit testing with Pytest (documented in previous comments), manual testing is employed to provide comprehensive coverage.
Scope:
User Management:
User registration (valid and invalid data)
User login (valid and invalid credentials)
User profile management (updating details)
Password reset functionality
Reservations:
Searching for available reservations
Making reservations (valid and invalid data)
Viewing and managing existing reservations
Cancellation functionality
General Functionality:
Navigation through the application
Overall user interface (UI) and user experience (UX)
Error handling and informative messages
Results:
The results of manual testing are documented here and include:
Functionality Tested (a brief description)
Expected Behavior
Actual Behavior (observations during testing)
Pass/Fail Status (based on observed behavior)
Notes (any additional observations or potential issues)
Manual Testing Results
Functionality Tested: User Registration (Valid Data)
Expected Behavior:
The user enters valid registration details (username, email, password, etc.)
The system validates the information (e.g., email format, password strength).
The user account is successfully created.
A confirmation message or email is sent to the user.
Actual Behavior:
The user was able to enter valid registration details.
The system validated the information with appropriate error messages for invalid formats.
The user account was successfully created.
A confirmation email was sent to the entered email address.
Pass/Fail Status: Pass
Notes:
The confirmation information was displayed properly.
Functionality Tested: User Login (Valid Credentials)
Expected Behavior:
The user enters a registered username and password.
The system validates the credentials.
The user is successfully logged in and redirected to the appropriate page.
Actual Behavior:
The user was able to enter valid credentials.
The system validated the credentials and displayed a success message.
The user was successfully logged in and redirected to the dashboard.
Pass/Fail Status: Pass
Functionality Tested: User Login (Invalid Username)
Expected Behavior:
The user enters an invalid username or a username that does not exist.
The system displays an error message indicating invalid credentials.
Actual Behavior:
The user entered an invalid username.
The system displayed an error message stating "Username not found."
Pass/Fail Status: Pass
Benefits of Manual Testing:
Complements Unit Testing: Provides a broader perspective on user experience.
Covers User Interactions: Verifies how the application behaves from a user's standpoint.
Identifies Usability Issues: Detects potential problems that might be missed by automated tests.
Limitations of Manual Testing:
Time-Consuming: Requires manual effort to execute each test case.
Repetitive: Testing similar functionalities can be tedious.
Prone to Human Error: Human testers might miss edge cases or make mistakes.
Recommendations:
Prioritize manual testing for functionalities deemed most critical or complex.
Utilize tools for capturing screenshots or screen recordings during testing to document observations.
Automate repetitive tasks where feasible to improve efficiency.
Continuously refine manual test cases as the application evolves.
Future Considerations:
Leverage advancements in automated testing as unit testing capabilities mature.
Explore browser automation tools for potential partial automation of user interactions.
Prioritize writing unit tests for core functionalities as development progresses that work with login into a PostgresSQL database being able to create test databases.




