const API_URL = process.env.WP_API_URL;

const fetchAPI = async (query, { variables } = {}) => {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('Error Details', query, variables);
    throw new Error('Failed to fetch Api');
  }
  return json.data;
};

export async function getAllPosts(preview) {
  const data = await fetchAPI(
    `
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
          edges {
            node {
              id
              date
              title
              slug
              extraPostInfo {
                authorExcerpt
                thumbImage {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
      `
  );

  return data?.posts;
}

export async function last3post(preview) {
  const data = await fetchAPI(
    `
      query AllPosts {
        posts(first: 3, where: { orderby: { field: DATE, order: DESC}}) {
          edges {
            node {
              id
              date
              title
              slug
              extraPostInfo {
                authorExcerpt
                thumbImage {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
      `
  );

  return data?.posts;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );
  return data?.posts;
}

export async function getPost(slug) {
  const data = await fetchAPI(
    `
      fragment PostFields on Post {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ...PostFields
          content
        }
      }
    `,
    {
      variables: {
        id: slug,
        idType: 'SLUG',
      },
    }
  );

  return data;
}
