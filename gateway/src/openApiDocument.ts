export const openApiDocument = {
  openapi: "3.1.0",
  info: {
    title: "Gudbuks API",
    version: "1.0.0",
  },
  paths: {
    "/books": {
      get: {
        summary: "Get a list of books based on search query",
        parameters: [
          {
            name: "q",
            in: "query",
            description: "Text for search",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                example: [
                  {
                    id: "1",
                    cover: "book1.jpg",
                    title: "Sample Book 1",
                    authors: ["Author 1"],
                    description: "A sample book description.",
                    publishedDate: "2022-01-01",
                  },
                  {
                    id: "2",
                    cover: "book2.jpg",
                    title: "Sample Book 2",
                    authors: ["Author 2"],
                    description: "Another sample book description.",
                    publishedDate: "2022-02-01",
                  },
                ],
              },
            },
          },
        },
      },
    },
    "/books/{id}": {
      get: {
        summary: "Get details of a specific book",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the book",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                example: {
                  id: "1",
                  cover: "book1.jpg",
                  title: "Sample Book 1",
                  authors: ["Author 1"],
                  description: "A sample book description.",
                  publishedDate: "2022-01-01",
                },
              },
            },
          },
        },
      },
    },
    "/auth/sign-in": {
      post: {
        summary: "Sign in and get user information with token",
        parameters: [
          {
            name: "credential",
            in: "body",
            description: "Google login credential",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                example: {
                  user: {
                    id: "123",
                    name: "John Doe",
                    picture: "user.jpg",
                  },
                  token: "your_access_token",
                },
              },
            },
          },
        },
      },
    },
    "/me": {
      get: {
        summary: "Get information about the logged-in user",
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                example: {
                  id: "123",
                  name: "John Doe",
                  picture: "user.jpg",
                },
              },
            },
          },
        },
      },
    },
    "/comments": {
      get: {
        summary: "Get a list of comments",
        parameters: [
          {
            name: "bookId",
            in: "query",
            description: "Book id to get comments of",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                example: [
                  {
                    id: "1",
                    text: "This is a great book!",
                    createdAt: "2022-01-05T12:00:00Z",
                    updatedAt: "2022-01-05T12:30:00Z",
                    bookId: "1",
                    userId: "123",
                  },
                  {
                    id: "2",
                    text: "I enjoyed reading it.",
                    createdAt: "2022-01-06T10:00:00Z",
                    updatedAt: "2022-01-06T10:15:00Z",
                    bookId: "2",
                    userId: "456",
                  },
                ],
              },
            },
          },
        },
      },
      post: {
        summary: "Add a new comment",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              example: {
                text: "This book is amazing!",
                bookId: "1",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Comment created successfully",
          },
        },
      },
    },
    "/comments/{id}": {
      delete: {
        summary: "Delete a specific comment",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the comment",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "204": {
            description: "Comment deleted successfully",
          },
        },
      },
    },
  },
};
