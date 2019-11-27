# Reddit Clone - Back End

## Installation

- `git clone` the project
- `cd` into `/api-server`
- Create a `.env` file like below
- `npm i` dependencies
- `npm run dev`
- Open your browser to [http://localhost:3000/](http://localhost:3000/)

## `.env` file

```
MONGOLAB_URI=[connection_string]
URL=http://localhost:4000 // this needs to be the location your client is served on
```

## API Endpoints

<!-- AUTH/USER ENDPOINTS -->

### Auth/User

<!-- NEW DROPDOWN -->
<details>
<summary><strong>GET api/user/</strong></summary>

#### Required:

```
Currently nothing
```

#### Response:

```javascript
Status Code: 200
[
  { allUserObjects }
]

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- NEW DROPDOWN -->
<details>
<summary><strong>POST api/user/verify</strong></summary>

#### Required:

```
Still figuring out how to best implement this with NextJS
```

#### Response:

```javascript
Status Code: 200
{ user }

Status Code: 401
{ message: 'errorMessage' }
```

</details>
 
<!-- NEW DROPDOWN -->
<details>
<summary><strong>POST api/user/login</strong></summary>

#### Required:

```jsx
const fetchOptions = {
  body: {
    username,
    password
  }
};
```

#### Response:

```javascript
Status Code: 200
{ user }

Status Code: 400, 401, 404
{ message: 'customErrorMessage' }
```

</details>
  
<!-- NEW DROPDOWN -->
<details>
<summary><strong>POST api/user/logout</strong></summary>

#### Required:

```jsx
const fetchOptions = {
  body: {
    userId
  }
};
```

#### Response:

```javascript
Status Code: 200
{ message: 'Successful logout' }

Status Code: 400
{ message: 'errorMessage' }
```

</details>
 
<!-- NEW DROPDOWN -->
<details>
<summary><strong>POST api/user/signup</strong></summary>

#### Required:

```jsx
const fetchOptions = {
  body: {
    email, // unique
    password, // minLength:8 _ maxLength:30
    username // unique _ minLength:3 _ maxLength:20
  }
};
```

#### Response:

```javascript
Status Code: 200
{ user }

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- POSTS ENDPOINTS -->

### Posts

<!-- NEW DROPDOWN -->
<details>
<summary><strong>GET api/posts/</strong></summary>

#### Required:

```
Nothing
```

#### Response:

```javascript
Status Code: 200
[
  { allPostObjects }
]

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- NEW DROPDOWN -->
<details>
<summary><strong>GET api/posts/:communityId</strong></summary>

#### Required:

```
Nothing
```

#### Response:

```javascript
Status Code: 200
[
  { allCommunityPostObjects }
]

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- NEW DROPDOWN -->
<details>
<summary><strong>POST api/posts/:communityId</strong></summary>

#### Required:

```
const fetchOptions = {
  body: {
    title, // unique _ minLength:4 _ maxLength:300
    body,
    author,
    community,
  }
}
```

#### Response:

```javascript
Status Code: 200
{ post }

Status Code: 400
{ message: 'errorMessage' }
```

</details>
