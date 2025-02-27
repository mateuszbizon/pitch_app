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

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
    *[_type == "author" && id == $id][0]{
        _id,
        id,
        name,
        username,
        email,
        image,
        bio
    }    
`)

export const AUTHOR_BY_ID_QUERY = defineQuery(`
    *[_type == "author" && _id == $id][0]{
        _id,
        id,
        name,
        username,
        email,
        image,
        bio
    }    
`)

export const STARTUPS_BY_AUTHOR_QUERY = defineQuery(`
    *[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
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
`)