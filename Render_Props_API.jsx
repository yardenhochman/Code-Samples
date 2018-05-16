import React from "react";
import { Query } from "react-apollo";
import { Provider, Subscribe } from "unstated";
import UI from "../UI";
import { PROJECT_DETAILS } from "./Queries";
import WikiState from "./Store";
import WikiView from "./View";

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
