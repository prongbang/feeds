# Feed API with Node.js

# Post
## POST
```
http://127.0.0.1:8888/api/v1/post
```
## Body
```
{
    "client_id":"18180b61-d2a7-4cda-ab38-9ce4d17ecc75",
    "id":1,
    "text":"Test",
    "user_id":1
}
```

## GET
```
http://127.0.0.1:8888/api/v1/post
```
## Rsponse
```
[
    {
        "client_id":"18180b61-d2a7-4cda-ab38-9ce4d17ecc75",
        "id":1,
        "text":"Test",
        "user_id":1
    }
]
```

## GET 
```
http://127.0.0.1:8888/api/v1/post/1
```
## Response
```
    {
        "client_id":"18180b61-d2a7-4cda-ab38-9ce4d17ecc75",
        "id":1,
        "text":"Test",
        "user_id":1
    }
```

## GET
```
http://127.0.0.1:8888/api/v1/post/user/1
```
## Response
```
[
    {
        "client_id": "18180b61-d2a7-4cda-ab38-9ce4d17ecc75",
        "id": 1,
        "text": "Test",
        "user_id": 1
    },
    {
        "client_id": "17c73365-2afa-48a1-8988-1dbb80a8b082",
        "id": 2,
        "text": "Hello",
        "user_id": 1
    }
]
```
# User
## GET
```
http://127.0.0.1:8888/api/v1/user
```
## Response
```
[
    {
        "id": 1,
        "name": "prongbang"
    }
]
```

## GET
```
http://127.0.0.1:8888/api/v1/user/1
```
## Response
```
{
    "id": 1,
    "name": "prongbang"
}
```

## POST
```
http://127.0.0.1:8888/api/v1/user
```
## Body
```
{
    "id": 2,
    "name": "test"
}
```

## Start server
```
npm start server
```

## Android Application

[StartDagger](https://github.com/prongbang/StartDagger)
