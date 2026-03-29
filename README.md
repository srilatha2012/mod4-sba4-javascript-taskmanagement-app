# Task Management App
This TaskManagement App is a simple web application built with html, javascript and css that helps users to view, edit and filter the app that helps user to orginize the daily activities.

The main goal of this project was to working with forms, javascript objects, arrays, DOM, and dynamic table rendering

## Features
- Add new tasks with task name, category, and deadline
- Store each task as object inside an array
- Display tasks dynamically in a table format
- set the default stauts to 'In Progress'
- Edit task details and update status
- Automatically mark status as 'Overdue' if the deadline has passed and task is not completed
- Filter tasks by category and status

## How it works
The app allows users to enter a task name, category, deadline through a form. once the task is added it is stored as an object in an array and displayed in the table format. each row shows the task details along with the status. by default newly added tasks are marked as "In Progress". The app also includes Edit feature, which allows the user to update the task details. when editing, the status field becomes a dropdown so that user can easily change it.

Another useful feature is automatic deadline checking. if a task deadline has passed and the task is not marked as "Completed", it's status automatically update to "Overdue".

Filter options were added so users can view tasks based on category or status

## What I learned
Working with project helped me to strengthen understanding of javascript logic and DOM manipulation

## Reflection
1. Challenges faced during the project.
During this project, one of the main challenges I faced was handling dynamic task data in javascript and display it in the table. I also found challenges making Edit, Save and status updates overdue checking and filters work together properly

2. How you approached solving those challenges.
I approched step by step. first focused creating the form and collecting user input then I stored each task as an object and stored in the array and rendered tasks in the table. And then gradually I added one feature at a time and tested frequently.
breaking the project into smaller pieces helped me to understand the logic and fix the issues 

3. What you would improve if given more time.
if I had  more time I would improve the styling to make the app cleaner. I would also add persisting task data with local storage