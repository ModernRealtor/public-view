import { 
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
    let mutation = gql`
        mutation Test(vars.....) {
            submitNewLead(vars....) {
                id
            }
        }
    `
    await client.mutate({mutation, variables: {}}).then(ret => {console.log(ret)})
    return Promise.resolve()
}