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
  - The api was made using express js, using javascript
  - The database used was mongodb

  ## 4. Test Plan: 

  - We used Postman to test the api calls, the tests iteself were made by hand.

  ## 5. Test Results:
  * GET:
    * /products -> ok
    * /banner -> ok
    * /user -> ok
    * /user/:id -> ok
  * POST
    * /products -> ok
    * /login -> ok
      * {username: "admin"}
    * /users -> ok
      * {
          "username":"admin",  
          "admin":true,  
          "cart":[],  
          "booksRead":[],  
          "collections" [],  
          "wishlist":[],  
          "follows":[],  
          "avatar":""}
    * /banner -> ok
      * {
        "color" : "#AAAAff",  
        "link" : "",  
        "img" : "https://images-na.ssl-images-amazon.com/images/I/81VlThzDlVL.jpg",  
        "title":"title test test",  
        "subtitle" : "subtitle test do test do test"}
  * PUT
    * User -> ok
      * {"_id":"61b75ff425f1c18f01bee8a3",  
      "username":"admin",  
      "admin":true,  
      "cart":[],  
      "booksRead":[],  
      "collections":["61b6989001cdd876168e1192"],  
      "wishlist":["61b6989001cdd876168e1192"],  
      "follows":[],  
      "avatar":"",  
      "__v":0}
    * 
  ## 6. Build Procedures: 

  - Need to run server and noink simultaneously
  - Go to noink folder and run the following commands: npm install; npm run serve; The url is on localhost:8080/
  - Go to server folder and run the following commands: npm install; npm run start; You don't need to worry about the url on the server
  - You will need a mongodb instance running on port 27017, the api will do the rest.

  ## 7. Problems: 

  - Not all of functionalities are implemented, like *noink reader* or the product's reviews. 
  - We wanted to insert initial values to the database, but that is not working yet;
  - The build process is not automatized and may result in problems;
  - The tests made for the api were made by hand, which is not ideal.

  ## 8. Comments:

  - We wish to improve the code and implement some of the missing functionalities until the review of the group;
  - Making the project was interesting to learn about javascript and some of the most common technologies and frameworks available.
