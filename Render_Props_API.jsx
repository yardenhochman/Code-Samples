export default ({ match: { params: { id } } }) => (
  <Query query={PROJECT_DETAILS} variables={{ id }}>
    {res => (
      <UI.LoadAndDisplay res={res}>
        {data => (
          <Provider inject={[new WikiState({ project: data.getProject })]}>
            <Subscribe to={[WikiState]}>
              {wiki => <WikiView wiki={wiki} id={id} />}
            </Subscribe>
          </Provider>
        )}
      </UI.LoadAndDisplay>
    )}
  </Query>
);