<Query query={PROJECT_DETAILS} variables={{ id }}>
    {res => <h1>{res.data.title}</h1>}
</Query>
