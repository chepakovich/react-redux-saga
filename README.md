# Getting Started with Our Take-Home Assignment

Please fork this repository and upload to your personal github / bitbucket / gitlab, then upon completion please share the fork with us. The assignment should only take about an hour to an hour and a half. You will require NodeJS on your machine to run and test this assignment. `yarn install` should provide all of the libraries and frameworks you will require to complete the assignment.

# The Assignment

This single page application should display a list of `operators` in a tree view. When clicking on the `operator`, the tree should expand to show the name of the `company` the user works for as well as the `company`'s address. The next layer of the tree should be a list of `instruments` the `operator` has used, and if the `instrument` is clicked on this should expand into a list of `runs` that the operator has run with that `instrument`. We must be able to run and interact with this UI.

Clean code and easy-to-read components are appreciated.

Ex:
```
Homer Simpson
SNPP, 123 Fake Street Springfield, USA
└─ instrument3
   └─ e37efb50-fab9-467c-89e7-2a008ce25fda
Frank Grimes
SNPP, 123 Fake Street Springfield, USA
├─ instrument1
|  ├─ 5b4efc46-58f8-4b7f-a173-b6ff9f4f64b3
|  └─ 8b694591-cbec-4f47-8cc5-a7756fc951b5
├─ instrument2
└─ instrument3
John Smith
```

## Hints

* While you are free to tackle this assignment however you see fit and we do not require you to use any particular framework or library, there are a number of helper libraries in the `package.json` that can make your life significantly easier.
* The Redux ecosystem is your friend.
  
## Bonus

If you'd really like to show off your chops and have some spare time, you can make the list of `operators` searchable, and sortable.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run backend`

Starts the backend server at `http://localhost:4000` which will provide test data. Available endpoints are:

**/companies**

* **Method:**

  `GET`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ success : bool, companies : { id : uuid, name : str, address : str, instruments : [id : uuid], operators : [id : uuid] } }`

**/instruments**

* **Method:**

  `GET`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ success : bool, instruments : { id : uuid, name : str } }`

**/operators**

* **Method:**

  `GET`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ success : bool, instruments : { id : uuid, name : str } }`

**/runs**

* **Method:**

  `GET`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ success : bool, instruments : { id : uuid, instrument : uuid, operator: uuid } }`
