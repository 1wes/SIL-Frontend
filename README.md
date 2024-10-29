# SIL-Frontend

## What is SIL-Frontend

SIL-Frontend is a web apllication that allows users to view other users' pictures, which are sorted into albums. The application leverages Google's OAuth authorization 
mechanism to enable user authorization. Once sign in is successful, the user session is stored within the application. These are the main pages of the application:
* Landing page 
    - Contains a brief description of what the application does. 

* Login page
    - Allows user to sign up to application using Google

* Home page
    - Lists all users and displays how many albums they have

* User page
    - Lists a user's information and their respective albums

* Album Page
    - Lists all the photos belonging to a specific user's album. Also indicates how many photos there are within the album

* Photo page
    - Displays a selected photo from a specific album. Also enables a user to edit a photo's title.

This application is deployed at [https://sil-frontend.onrender.com/][def];


[def]: https://sil-frontend.onrender.com/


## How to set up SIL-Frontend locally.

In your chosen terminal, run the follwing command

```

git clone https://github.com/1wes/SIL-Frontend.git
```

## Navigate into your copied folder on your machine.

In the terminal, run the following command

```

cd SIL-Frontend
```

## Open the folder in a code editor.

If using VSCode, you can open the folder in the editor using the following command

```

code .
```

For other editors, please refer online how to achieve the same.

## install the required dependencies

Using your chosen editor's terminal, install the project dependencies by running the following command

```

npm install
```

Wait a few moments for the installation process to complete.

Once it ends, you can proceed.

## Run/Start the app

On your editor's terminal, run the following:

```

npm run demo
```

This will start up the application in the development server. 

The server used for this application is Vite, hence the application will open up on the browser at [http://localhost:5173][def4];

[def4]: http://localhost:5173

## Tests

This application runs unit tests that ensure code correctness and reliability by verifying that each component or feature behaves as expected

To run the tests manually, execute the following command:

```

npm test
```

This runs all the unit tests within the project and outputs the results.

This project is also intergrated with a continous intergration service (Github Actions), which automatically runs tests once changes are pushed to the development branch of the remote repository.
 

