# IT Crowd Challenge
*Link: <a href="https://itcrowdchallenge-ar.vercel.app/">IT Crowd Challenge</a>*

*This is my Code Challenge for IT Crowd*

<h3>Backend deploy in: <a href="https://itcrowdchallenge.onrender.com/">Backend</a> </h3>
<h3>Documentation Postman: <a href="https://documenter.getpostman.com/view/20685324/Uzs5Wjeg">Postman</a> </h3>
<h3>Frontend deploy in: <a href="https://itcrowdchallenge-ar.vercel.app/">Frontend</a> </h3>

*I deploy my website with Render and Vercel*
<p>Thank you for the opportunity to show my knowledge and i hope you like it. This really was a challenge for me</p>
<br>
<hr>

## Backend
**I use NodeJs with Express and MongoDB for database. Token is encrypted with JSONWebToken** <br>
*I create the model of users and products*

### Users

The user require a name, email and password<br>
If you have an account, you can login with mail, or if you don't have an account, you can Signup with mail, Google or Facebook. And if you are logged, you can log out<br>
The session is saved for 7 days in a cookie and create a Validation Session <br>
I manage the errors, this errors can be a duplicated entry (email in use) or a validation error<br>
The page can validate the role of the user <br>
*All users have the same permission (except Admin)*<br>

Only a Admin can Get all users<br>

### Products

The products require a name, description, price and Image.<br>
All can see all the products, and the products is created with an ID and then you can find product by ID and see the details.<br>
I make a pagination for products, the standard is a limit of 8 products <br>
If you have an user, you can publish a product with the required requeriments. (The image must be published with a link (.jpg .png)) <br>
*Only Admin can modify or delete a product*

<br>
<hr>

## Frontend

**I create the Frontend with React, Tailwind CSS and use Axios for the API** <br>
*Is a Responsive Web Design*<br><br>
In the Navbar I made buttons to go to products, Login and Signup but if you are logged you can see your name and a button to Publish a Product<br>
In Home Page if you aren't logged, you can see a buttons to Login or Sign Up. If you are logged you can se a button to see the products <br>
In Login you can logged to the website with email or Google or Facebook (If you don't have an account with Google or Facebook, it will create it automatically.)
and in Signup you can register with email or Google or Facebook. I made a hook to use Inputs, with this I don't use useRef().
If you don't complete a field or is invalid you can see the error (Errors)<br><br>
In Products you can see all the products with her name, image and price. You can see 8 products per page (pagination in Backend).<br>
If you click the Button "View Details" you can see all data of that product ~~and you can buy~~
and you can delete a product (Only Admin but now is not working)<br>
In PostProduct you can publish a product in a website. The product require name, description, price (number) and Image (the image is a URL (.jgp or .png))<br>
If you search a page and doesn't exist, you can see a Page Not Found<br><br>
I use icons from react-icons and alert from sweetalert2

<br>
<hr>
