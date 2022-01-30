import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'alu65kak',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skRXj0iO6pThQiEwYehbihOo6jJW8lhM9wrr96ZRD5fkuFhc0w0GqjQ0Ap5oKH7Rc02UR3xA3Q25o9ELCJ8fEvXqvDdqRLR57uQTGGGUWFanH2LFJP2GlHgZZn06jreffx4RZT57QTZwjs9MUVjpL9tLmAdjxot0Ew4UfddDi1OrJwFROrVZ',
  useCdn: false,
})
