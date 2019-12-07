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
MONGOLAB_URI=dbUrlHere
//> this needs to be the location your client is served on
CLIENT_URL_DEV=http://localhost:4000
CLIENT_URL_PROD=productionUrlHere
//> false means you can run the client locally, but still make API calls
TEST_PROD=boolean
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
<summary><strong>GET api/user/verify</strong></summary>

#### Required:

```javascript
{
  headers: {
    Authorization: "validSessionID";
  }
}
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
    password, // minLength:8 _ maxLength:60
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

```javascript
const fetchOptions = {
  body: {
    title, // unique _ minLength:4 _ maxLength:300
    body,
    author,
    community
  }
};
```

#### Response:

```javascript
Status Code: 200
{ post }

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- POSTS ENDPOINTS -->

### Communities

<!-- NEW DROPDOWN -->
<details>
<summary><strong>GET api/community</strong></summary>

#### Required:

```
Nothing
```

#### Response:

```javascript
Status Code: 200
[ { allCommunityObjects } ]

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- NEW DROPDOWN -->
<details>
<summary><strong>POST api/community</strong></summary>

#### Required:

```javascript
const fetchOptions = {
  body: {
    name,
    description,
    rules, // array of strings
    communitiesRelated, // array of community IDs
    userId // user's _id
  }
};
```

#### Response:

```javascript
Status Code: 201
{ newCommunity, updatedUser }

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- NEW DROPDOWN -->
<details>
<summary><strong>GET api/community/:communityId</strong></summary>

#### Required:

```
Nothing
```

#### Response:

```javascript
Status Code: 200
{ community }

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- NEW DROPDOWN -->
<details>
<summary><strong>DELETE api/community/:communityId</strong></summary>

#### Required:

```
Nothing
```

#### Response:

```javascript
Status Code: 200
{ deletedCommunity }

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- NEW DROPDOWN -->
<details>
<summary><strong>PUT api/community/:communityId/edit/:key</strong></summary>

#### Required:

```javascript
// key param must be one of the following
const acceptableKeys = ["name", "description", "rules"];
```

#### Response:

```javascript
Status Code: 200
{ updatedCommunity }

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- NEW DROPDOWN -->
<details>
<summary><strong>GET api/community/:communityId/users/:key</strong></summary>

#### Required:

```javascript
// key param must be one of the following
const acceptableKeys = ["members", "moderators", "administrators"];
```

#### Response:

```javascript
Status Code: 200
[{ username: 'userId' }]

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- NEW DROPDOWN -->
<details>
<summary><strong>POST api/community/:communityId/users/:key</strong></summary>

#### Required:

```jsx
// key param must be one of the following
const acceptableKeys = ["members", "moderators", "administrators"];
const fetchOptions = {
  body: {
    userId
  }
};
```

#### Response:

```javascript
Status Code: 200
{ updatedCommunity }

Status Code: 400
{ message: 'errorMessage' }
```

</details>

<!-- NEW DROPDOWN -->
<details>
<summary><strong>DELETE api/community/:communityId/users/:key</strong></summary>

#### Required:

```jsx
// key param must be one of the following
const acceptableKeys = ["members", "moderators", "administrators"];
const fetchOptions = {
  body: {
    userId
  }
};
```

#### Response:

```javascript
Status Code: 200
{ updatedCommunity }

Status Code: 400
{ message: 'errorMessage' }
```

</details>
