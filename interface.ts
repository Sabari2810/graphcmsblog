export interface Post {
  title: string
  image: {
    url: string
  }
  slug: string
  createdAt: string
  excerpt: string
  author: Author
  featuredPost: Boolean
  categories: [Category]
}

export interface Author {
  id: string
  name: string
  image: {
    url: string
  }
}

export interface Category {
  slug: string
  title: string
}
