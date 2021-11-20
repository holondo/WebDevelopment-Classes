# NoInk™ - Digital Bookstore

## Participants:
* [Guilherme Holanda Sanches](https://github.com/holondo) - 10734370
* [Ygor Pontelo](https://github.com/ygorpontelo) - 10295631
---
## 1. Requirements  
  - The system must have 2 types of users: Clients and Administrators
  Administrators are responsible for registering/managing administrators, customers, and products/services provided.  
  - The application already comes with an account admin with password admin.
  Customers are users who access the system to buy products/services.
  - The admin record includes, at least: name, id, phone, email.
  Each customer's record includes, at least: name, id, address, phone, email
  - Product/services records include, at least: name, id, photo, description, price, quantity (in stock), quantity sold.
  - Your store may sell products, services or both (you decide)
  Selling Products (or services): Products are selected, their quantity chosen, and are included in a cart. Products are purchased using a credit card number (any number is accepted by the system). The quantity of product sold is subtracted from the quantity in stock and added to the quantity sold. Carts are emptied only on payment or by customers.
  - Product/Service Management: Administrators can create/update/read/delete (crud) new products and services. For example, they can change the stock quantity.
  - Your functionality: Create a functionality that is specific to your application. It does not have to be something complicated. For instance, if you are selling cars, you may allow users to use an accelerator to hear how each car engine roars up and down.   
  - The system must provide accessibility requirements and provide good usability. The system must be responsive.  
## 2. Project Description:
  - Administrators can select images to be used as promotional banners in the homescreen
  - Products are categorized by type of publication (Comics, books, magazines, manga, album). In each type, local best sellers will be highlighted.
  - After the product is purchased by a customer, it'll be available in their profile to be visualised inside **NoInK Reader**.
  - Customers can review the product with a ⭐⭐⭐⭐⭐ system alongside a short, spoiler-free comment after purchasing it.
  - Each customer can keep a product wishlist in their profile section. 

  [Figma's Link](https://www.figma.com/file/HKZYbDigSeju1kjP5Ma3I1/NoInk?node-id=0%3A1)   

  The comments of session 3 refer especifically to the front end part  

  The back end will likely be implemented using node express and mongoDB

  ## 3. Comments About the Code: 

  - The project was made using Vuejs
  - Most of the functionality is implemented, a few edge cases were not considered
  - The library used for components was [Vuetify](https://vuetifyjs.com/en/)
  - The data of the app is currently being faked by using pre made jsons, in the future the api will provide the data

  ## 4. Test Plan: 

  - We plan to use postman to test the server calls
  - Write unit tests for the api

  ## 5. Test Results:
  ## 6. Build Procedures: 

  - We will use Docker to build the images
  - The package will contain a docker-compose to run the project
  - To build and run Milestone02: Follow the instructions in the README.md inside noink directory

  ## 7. Problems: 
  ## 8. Comments:
  