import * as contentful from 'contentful'; 

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = contentful.createClient({
  space: spaceId,
  environment: 'master', // defaults to 'master' if not set
  accessToken: accessToken
})

export function apiTest() {
    return client.getEntry('7jQH5HdBjcl9gRPWOSbYh2')
    .then((entry: any) => console.log(entry))
    .catch(console.error)
}

