import { 
    useQuery, 
    useMutation, 
    gql,
    ApolloClient,
    InMemoryCache,
    createHttpLink
} from "@apollo/client"

const link = createHttpLink({
    uri: `${process.env.GATSBY_API_URL}`,
    headers: {
        Authorization: `Bearer ${process.env.GATSBY_API_TOKEN}`
    },
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});

export async function submitLeadForm(data){
    console.log(data)
    let query = gql`
        query Test {
            curOrg {
                id
            }
        }
    `
    await client.query({query}).then(ret => {console.log(ret)})
    return Promise.resolve()
}