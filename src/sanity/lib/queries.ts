export const STARTUPS_QUERY = `
*[_type == "startup"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  author -> {
    _id, name, bio, image
  },
  image,
  description,
  category,
  views,
  _createdAt
}
`