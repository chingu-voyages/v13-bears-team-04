# Message Board API Server

API server for Reddit-like message board app

## Installation

Use npm:

```bash
npm install
```

## Usage

Server uses .env config file. Example below:

```bash
MONGOLAB_URI=[connection_string]
URL=http://localhost:4000 // this needs to be the location your client is served on
```

Running server:

```bash
npm start
```

Or

```bash
npm run dev
```

## API description

```bash
GET /api/posts/[category]
```

```bash
[
  {
    "createdOn": "2019-11-11T16:51:54.524Z",
    "lastModified": "2019-11-11T16:51:54.524Z",
    "lastUpvoted": "2019-11-11T16:51:54.524Z",
    "voteScore": 0,
    "deleted": false,
    "reported": false,
    "comments": [],
    "_id": "5dc991ac18847042405c90d4",
    "title": "Loi Krathong 2019",
    "body": "Loi Krathong",
    "author": "Damian",
    "category": "test",
    "__v": 0
  },
  {
    "createdOn": "2019-11-11T16:51:54.524Z",
    "lastModified": "2019-11-11T16:51:54.524Z",
    "lastUpvoted": "2019-11-11T16:51:54.524Z",
    "voteScore": 0,
    "deleted": false,
    "reported": false,
    "comments": [],
    "_id": "5dc991dd18847042405c90d5",
    "title": "Songkran 2019",
    "body": "Songkran",
    "author": "Damian",
    "category": "test",
    "__v": 0
  }
]
```

```bash
GET /api/posts/[category]/[post_id]
```

```bash
{
  "createdOn": "2019-11-11T16:51:54.524Z",
  "lastModified": "2019-11-11T16:51:54.524Z",
  "lastUpvoted": "2019-11-11T16:51:54.524Z",
  "voteScore": 0,
  "deleted": false,
  "reported": false,
  "comments": [],
  "_id": "5dc991dd18847042405c90d5",
  "title": "Songkran 2019",
  "body": "Songkran",
  "author": "Damian",
  "category": "test",
  "__v": 0
}
```

```bash
POST /api/posts/[category]
```

Request body

```bash
{
  "author": "An Author",
  "title": "A title",
  "body" : "A body"
}
```

Response:

```bash
{
  "createdOn": "2019-11-12T15:53:35.049Z",
  "lastModified": "2019-11-12T15:53:35.049Z",
  "lastUpvoted": "2019-11-12T15:53:35.049Z",
  "voteScore": 0,
  "deleted": false,
  "reported": false,
  "comments": [],
  "_id": "5dcad8257de3f51754a7045c",
  "author": "Damian",
  "title": "A title",
  "body": "A body",
  "category": "test",
  "__v": 0
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
