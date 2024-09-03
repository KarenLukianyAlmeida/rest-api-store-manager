
# Skills Developed

- __Interacting with MySQL:__ Gained proficiency in interacting with a relational database using MySQL.
  
- __Layered Architecture Implementation:__ Developed an API using a layered architecture approach to ensure organized and maintainable code.
  
- __Data Validation:__ Implemented robust data validation techniques to ensure the integrity of information received by the API.
  
- __API Testing:__ Wrote comprehensive tests to validate the functionality of API endpoints, ensuring reliable and error-free operations.

# What was developed

The RESTful API developed is a sales management system where it is possible to create, view, delete, and update products and sales. MySQL was used to manage the data.

# Features

<details>
  <summary><strong>EndPoints</strong></summary><br />

  > 1. Retrona todos os produtos cadastrados: 
  >
  > ```bash
  > GET /products
  > ```
  >   
  > 2. Retorna apenas o produto com o `id` da URL:
  >
  > ```bash
  > GET /products/:id
  > ```
  >   
  > 3. Retorna todas as vendas:
  >
  > ```bash
  > GET /sales
  > ```
  >   
  > 4. Retorna apenas a venda com o `id` da URL:
  >
  > ```bash
  > GET /sales/:id
  > ```
  >   
  > 5. Retorna apenas o produto com o `id` da URL:
  >
  > ```bash
  > POST /products
  > ```
  >   
  > 6. Cadastra novo produto:
  >
  > ```bash
  > GET /products/:id
  > ```
  >
  >> O corpo da requisição deverá seguir o formato abaixo: 
  >>
  >>```bash
  >> { "name": "ProdutoX" }
  >> ```
  >   
  > 7. Cadastra nova venda:
  >
  > ```bash
  > POST /sales
  > ```
  >
  >> O corpo da requisição deverá seguir o formato abaixo: 
  >>
  >>```json
  >>[
  >>  {
  >>    "productId": 1,
  >>    "quantity": 1
  >>  },
  >>  {
  >>    "productId": 2,
  >>    "quantity": 5
  >>  }
  >> ]
  >> ```
  >  
  > 8. Retorna apenas o produto com o `id` da URL:
  >
  > ```bash
  > GET /products/:id
  > ```
  >   
  > 9. Retorna apenas o produto com o `id` da URL:
  >
  > ```bash
  > GET /products/:id
  > ```
  >   
  > 10. Retorna apenas o produto com o `id` da URL:
  >
  > ```bash
  > GET /products/:id
  > ```
  >   
  > 11. Retorna apenas o produto com o `id` da URL:
  >
  > ```bash
  > GET /products/:id
  > ```

</details>

<details>
  <summary><strong>Tests</strong></summary><br />

  > - Method read: Responsible for opening the CSV file and returning the data as a list of dictionaries.
  >     
  > - Method get_unique_job_types: Responsible for returning a list of unique values present in the `job_type` column of the CSV file.
  >     
  > - Method filter_by_multiple_criteria: Allows filtering jobs by job type.

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
