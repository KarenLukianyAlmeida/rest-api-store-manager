
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
  >>```json
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
  > 8. Atualiza produto:
  >
  > ```bash
  > PUT /products/:id
  > ```
  >
  >> O corpo da requisição deverá seguir o formato abaixo: 
  >>
  >>```json
  >> {
  >>  "name": "Martelo do Batman"
  >> }
  >> ```
  >
  > 9. Deleta produto por `ìd`:
  >
  > ```bash
  > DELETE /products/:id
  > ```
  >   
  > 10. Deleta venda por `ìd`:
  >
  > ```bash
  > DELETE /sales/:id
  > ```
  >   
  > 11. Atualiza quantidade de um produto:
  >
  > ```bash
  > /sales/:saleId/products/:productId/quantity
  > ```
  >
  >> O corpo da requisição deverá seguir o formato abaixo: 
  >>
  >>```json
  >> {
  >>  "quantity": 20
  >> }
  >> ```
  >
  > 12. Retorna todos os produtos que contenham o nome declarado na query:
  >
  > ```bash
  > GET /products/search
  > ```
  >
  >> O query params da requisição deverá seguir o formato abaixo:
  >>
  >>```bash
  >>  http://localhost:PORT/products/search?q=Martelo
  >> ```
  >
</details>

<details>
  <summary><strong>Tests</strong></summary><br />

  > Para rodar todos os testes utilize o seguinte comando no terminal:
  > 
  > ```bash
  > npm run test:mocha
  > ```
  >     

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
