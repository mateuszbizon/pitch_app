export const STARTUPS_QUERY = `
*[_type == "startup" && !defined($search) || category match $search || title match $search || author->name match $search ] | order(_createdAt desc) {
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