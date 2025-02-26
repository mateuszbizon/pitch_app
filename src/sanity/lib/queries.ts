import { defineQuery } from "next-sanity"

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
export const SINGLE_STARTUP_QUERY = defineQuery(
`
*[_type == "startup" && _id == $id][0]{
  _id,
  title,
  slug,
  author -> {
    _id, name, username, bio, image
  },
  image,
  description,
  category,
  views,
  _createdAt,
  pitch
}
`
)

export const STARTUP_VIEWS_QUERY = defineQuery(`
    *[_type == "startup" && _id == $id][0]{
        _id, views
    }
`)