export const openApiDocument = {
  openapi: "3.1.0",
  info: {
    title: "Gudbuks",
    summary: "A simple book comments app to the distributed systems class",
  },
  paths: {
    "/books": {
      get: {
        description: "Get books that matches a text query",
        parameters: [
          {
            name: "q",
            in: "query",
            description: "Text query to search by",
            required: true,
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "books that match the query",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Book",
              },
            },
          },
        },
      },
    },
    "/books/{id}": {
      get: {
        description: "Get one book by id",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Id to search by",
            required: true,
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "book that have the id",
            schema: {
              $ref: "#/definitions/Book",
            },
          },
          "404": {
            description: "not found the book with the id",
          },
        },
      },
    },
    "/auth/sign-in": {
      post: {
        description: "Sign in with Google to allow editing",
        parameters: [
          {
            name: "credential",
            in: "body",
            description:
              "credential returned by Google on successful authentication",
            required: true,
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "the user and token to authentication",
            schema: {
              $ref: "#/definitions/SignInResponse",
            },
          },
        },
      },
    },
  },

  definitions: {
    Book: {
      type: "object",
      allOf: [
        {
          required: ["id", "title"],
          properties: {
            id: {
              type: "string",
            },
            cover: {
              type: "string",
            },
            title: {
              type: "string",
            },
            description: {
              type: "string",
            },
            publishedDate: {
              type: "string",
              format: "date",
            },
            authors: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
        },
      ],
    },
    User: {
      type: "object",
      allOf: [
        {
          required: ["id", "name"],
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
            picture: {
              type: "string",
            },
          },
        },
      ],
    },
    SignInResponse: {
      type: "object",
      properties: {
        user: {
          $ref: "#/definitions/User",
        },
        token: "string",
      },
    },
  },
};
