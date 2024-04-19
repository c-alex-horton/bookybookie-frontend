type Book = {
    id: number
    title: string
    publicationDate: string
    description: string
    notes: string
    ISBN: string
    pages: number
    status: string
    userId: number | null
    tags: Tag[]
    authors: Author[]
    genres: Genre[]
}

type Tag = {
    id: number
    name: string
}

type Author = {
    id: number
    name: string
    country: string
}

type Genre = {
    id: number
    name: string
}

export const books: Book[] = [
        {
          "id": 2,
          "title": "The Grand Design",
          "publicationDate": "2023-04-01T00:00:00.000Z",
          "description": "A fascinating exploration of the universes mysteries",
          "notes": "Must read for enthusiasts of physics",
          "ISBN": "978-0-316-03669-6",
          "pages": 448,
          "status": "Available",
          "userId": null,
          "tags": [
            {
              "id": 1,
              "name": "Physics"
            },
            {
              "id": 2,
              "name": "Cosmology"
            }
          ],
          "authors": [
            {
              "id": 1,
              "name": "Stephen Hawking",
              "country": "United Kingdom"
            }
          ],
          "genres": [
            {
              "id": 1,
              "name": "Science"
            }
          ]
        },
        {
          "id": 3,
          "title": "Cosmos",
          "publicationDate": "2023-03-15T00:00:00.000Z",
          "description": "A journey through the universe's vast expanse",
          "notes": "Great for stargazers and astronomers",
          "ISBN": "978-0-321-00001-2",
          "pages": 384,
          "status": "Available",
          "userId": null,
          "tags": [
            {
              "id": 3,
              "name": "Astronomy"
            },
            {
              "id": 4,
              "name": "Space"
            }
          ],
          "authors": [
            {
              "id": 2,
              "name": "Carl Sagan",
              "country": "United States"
            }
          ],
          "genres": [
            {
              "id": 1,
              "name": "Science"
            }
          ]
        },
        {
          "id": 4,
          "title": "A Brief History of Time",
          "publicationDate": "2023-04-12T00:00:00.000Z",
          "description": "Understanding the building blocks of the universe",
          "notes": "A must-read for theoretical physics enthusiasts",
          "ISBN": "978-0-321-00002-9",
          "pages": 212,
          "status": "Available",
          "userId": null,
          "tags": [
            {
              "id": 1,
              "name": "Physics"
            },
            {
              "id": 5,
              "name": "Time"
            }
          ],
          "authors": [
            {
              "id": 1,
              "name": "Stephen Hawking",
              "country": "United Kingdom"
            }
          ],
          "genres": [
            {
              "id": 1,
              "name": "Science"
            }
          ]
        },
        {
          "id": 5,
          "title": "Pale Blue Dot",
          "publicationDate": "2023-02-14T00:00:00.000Z",
          "description": "A vision of the human future in space",
          "notes": "Inspiring thoughts on space exploration",
          "ISBN": "978-0-321-00004-3",
          "pages": 350,
          "status": "Available",
          "userId": null,
          "tags": [
            {
              "id": 4,
              "name": "Space"
            },
            {
              "id": 6,
              "name": "Exploration"
            }
          ],
          "authors": [
            {
              "id": 2,
              "name": "Carl Sagan",
              "country": "United States"
            }
          ],
          "genres": [
            {
              "id": 1,
              "name": "Science"
            }
          ]
        },
        {
          "id": 6,
          "title": "The Elegant Universe",
          "publicationDate": "2023-06-30T00:00:00.000Z",
          "description": "Superstrings, hidden dimensions, and the quest for the ultimate theory",
          "notes": "Combines the theories of general relativity and quantum mechanics",
          "ISBN": "978-0-321-00005-0",
          "pages": 448,
          "status": "Available",
          "userId": null,
          "tags": [
            {
              "id": 1,
              "name": "Physics"
            },
            {
              "id": 7,
              "name": "String Theory"
            }
          ],
          "authors": [
            {
              "id": 3,
              "name": "Brian Greene",
              "country": "United States"
            }
          ],
          "genres": [
            {
              "id": 1,
              "name": "Science"
            }
          ]
        },
        {
          "id": 7,
          "title": "Black Holes and Baby Universes",
          "publicationDate": "2023-08-11T00:00:00.000Z",
          "description": "Insights into black holes",
          "notes": "Deep dive into celestial phenomena",
          "ISBN": "978-0-321-00007-4",
          "pages": 256,
          "status": "Available",
          "userId": null,
          "tags": [
            {
              "id": 8,
              "name": "Black Holes"
            },
            {
              "id": 9,
              "name": "Astrophysics"
            }
          ],
          "authors": [
            {
              "id": 1,
              "name": "Stephen Hawking",
              "country": "United Kingdom"
            }
          ],
          "genres": [
            {
              "id": 1,
              "name": "Science"
            }
          ]
        }
      ]
