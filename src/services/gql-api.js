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

export async function submitLeadForm({name, email, tel, pref, comments, subscribe, clientPlans, propertyTypes}){
    // Clean inputs
    name = name || "anonymous"
    comments = comments || "n/a"
    let clientSelection = Object.keys(clientPlans).filter(key => clientPlans[key]).join(", ")
    let propertySelection = Object.keys(propertyTypes).filter(key => propertyTypes[key]).join(", ")
    let comment = `Interested in: ${clientSelection || "n/a"}\nProperty types: ${propertySelection || "n/a"}\n\nAdditional Comments:\n${comments}`

    email = email || null
    tel = tel || null
    let contactMethod = pref || null
    let mailingList = subscribe || false
    let mutation = gql`
        mutation SubmitLead($name: String!, $comment: String!, $email: String, $tel: String, $contactMethod: String!, $mailingList: Boolean!) {
            addLead(name: $name, comment: $comment, email: $email, tel: $tel, contactMethod: $contactMethod, mailingList: $mailingList)
        }
    `
    return await client.mutate({mutation, variables: {
        name,
        comment,
        email,
        tel,
        contactMethod,
        mailingList
    }})
    .then(({data: addLead}) => {
        if(addLead) return Promise.resolve()
        return Promise.reject(new Error("Unable to submit request"))
    })
}

export async function submitListingInquiry({name, email, tel, pref, message, mlNum}){
    // Clean inputs
    name = name || "anonymous"
    email = email || null
    tel = tel || null
    let contactMethod = pref || null
    let mutation = gql`
        mutation SubmitInquiry($name: String!, $message: String!, $email: String, $tel: String, $contactMethod: String!, $mlNum: String!) {
            submitListingInquiry(name: $name, message: $message, email: $email, tel: $tel, contactMethod: $contactMethod, mlNum: $mlNum)
        }
    `
    return await client.mutate({mutation, variables: {
        name,
        message,
        email,
        tel,
        contactMethod,
        mlNum
    }})
    .then(({data: addLead}) => {
        if(addLead) return Promise.resolve()
        return Promise.reject(new Error("Unable to submit request"))
    })
}