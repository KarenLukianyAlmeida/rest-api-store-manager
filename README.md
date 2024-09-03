
# Skills Developed

- __Interacting with MySQL:__ Gained proficiency in interacting with a relational database using MySQL.
  
- __Layered Architecture Implementation:__ Developed an API using a layered architecture approach to ensure organized and maintainable code.
  
- __Data Validation:__ Implemented robust data validation techniques to ensure the integrity of information received by the API.
  
- __API Testing:__ Wrote comprehensive tests to validate the functionality of API endpoints, ensuring reliable and error-free operations.

# What was developed

The RESTful API developed is a sales management system where it is possible to create, view, delete, and update products and sales. MySQL was used to manage the data.

# Features

<details>
  <summary><strong>On tests/counter/test_counter.py</strong></summary><br />

  > The test verifies if the function correctly returns the number of occurrences of the specified word.
  >
  > - Command to run the test in the terminal:
  >
  > ```bash
  > python3 -m pytest tests/counter/test_counter.py
  > ```

</details>

<details>
  <summary><strong>On src/insights/jobs.py</strong></summary><br />

  > - Method read: Responsible for opening the CSV file and returning the data as a list of dictionaries.
  >     
  > - Method get_unique_job_types: Responsible for returning a list of unique values present in the `job_type` column of the CSV file.
  >     
  > - Method filter_by_multiple_criteria: Allows filtering jobs by job type.

</details>

<details>
  <summary><strong>On src/insights/industries.py</strong></summary><br />

  > Method get_unique_industries: Should return a list of unique values present in the `industry` column.

</details>

<details>
  <summary><strong>On src/insights/salaries.py</strong></summary><br />

  > Method get_max_salary: Should extract the highest salary from the data that has been read and previously stored in the `self.jobs_list` list. The `ProcessSalaries` class inherits functionalities from the `ProcessJobs` class, including the ability to access previously read data without needing to read the file again.
     
  > Method get_min_salary: Should extract the lowest salary from the data that has been read and previously stored in the `self.jobs_list` list.

</details>

# Execute the project

1. __Clone the repository__

```bash
git clone https://github.com/KarenLukianyAlmeida/job-insights-python.git
```

2. __Install the dependencies__
   
```bash
npm install
```
3. __Start the backend and db containers from the compose__

- The application will be available at http://localhost:3001 in development mode.

```bash
docker-compose up -d
```
