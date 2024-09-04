
# What was developed

This project aimed to develop an API that manages sales and products in a store system using CRUD operations. The MsSQL database was used.

# Skills Developed

- __Interacting with MySQL:__ Gained proficiency in interacting with a relational database using ***MySQL***.
  
- __Layered Architecture Implementation:__ Developed an API using a layered architecture approach to ensure organized and maintainable code.
  
- __Data Validation:__ Implemented robust data validation techniques to ensure the integrity of information received by the API.
  
- __API Testing:__ Wrote comprehensive tests to validate the functionality of API endpoints, ensuring reliable and error-free operations. ___Mocha, Sinon, and Chai___ were used.

# Features

<details>
  <summary><strong>Endpoints</strong></summary><br />

  > 1. Returns all registered products: 
  >
  > ```bash
  > GET /products
  > ```
  >   
  > 2. Returns only the product with the `id` from the URL:
  >
  > ```bash
  > GET /products/:id
  > ```
  >   
  > 3. Returns all sales:
  >
  > ```bash
  > GET /sales
  > ```
  >   
  > 4. Returns only the sale with the `id` from the URL:
  >
  > ```bash
  > GET /sales/:id
  > ```
  >   
  > 5. Registers a new product:
  >
  > ```bash
  > POST /products
  > ```
  >
  >> The request body should follow the format below:
  >>
  >>```json
  >> { "name": "ProdutoX" }
  >> ```
  >   
  > 6. Registers a new sale:
  >
  > ```bash
  > POST /sales
  > ```
  >
  >> The request body should follow the format below:
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
  > 7. Updates a product:
  >
  > ```bash
  > PUT /products/:id
  > ```
  >
  >> The request body should follow the format below:
  >>
  >>```json
  >> {
  >>  "name": "Martelo do Batman"
  >> }
  >> ```
  >
  > 8. Deletes a product by `id`:
  >
  > ```bash
  > DELETE /products/:id
  > ```
  >   
  > 9. Deletes a sale by `id`:
  >
  > ```bash
  > DELETE /sales/:id
  > ```
  >   
  > 10. Updates the quantity of a product:
  >
  > ```bash
  > /sales/:saleId/products/:productId/quantity
  > ```
  >
  >> The request body should follow the format below:
  >>
  >>```json
  >> {
  >>  "quantity": 20
  >> }
  >> ```
  >
  > 11. Returns all products that contain the declared name in the query:
  >
  > ```bash
  > GET /products/search
  > ```
  >
  >> The query params of the request should follow the format below:
  >>
  >>```bash
  >>  http://localhost:PORT/products/search?q=Martelo
  >> ```
  >
</details>

<details>
  <summary><strong>Tests</strong></summary><br />

  > To run all tests, use the following command in the terminal:
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
