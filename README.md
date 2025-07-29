# BajajFinservHealthAssignment

## Stack

- Node.js
- Express

## Hosted URL

- _Add your hosted URL here_

## Project Structure

```
/src
  ├── constant.js
  ├── controllers/
  │     └── user.controller.js
  ├── routes/
  │     └── user.route.js
  └── index.js
package.json
README.md
```

## API Endpoint

### POST `/bfhl`

#### Request Body

```json
{
  "data": ["A", "1", "b", "2", "!", "3"]
}
```

#### Success Response

```json
{
  "userDetails": {
    "isSuccess": "true",
    "userId": "chirag_bhatia_11022004",
    "email": "chirag.bhatia.14567@gmail.com | chirag5017.be22@chitkarauniversity.edu.in",
    "roll_number": "2211985017",
    "odd_number": ["1", "3"],
    "even_numbers": ["2"],
    "alphabets": ["A", "B"],
    "special_characters": ["!"],
    "sum": "6",
    "concat_string": "Ba"
  }
}
```

#### Failure Response

```json
{
  "is_success": false,
  "message":
}