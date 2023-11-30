import {
  ApolloClient, InMemoryCache, FetchPolicy, ErrorPolicy, createHttpLink
} from '@apollo/client';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache' as FetchPolicy,
    errorPolicy: 'ignore' as ErrorPolicy,
  },
  query: {
    fetchPolicy: 'no-cache' as FetchPolicy,
    errorPolicy: 'all' as ErrorPolicy,
  },
};

const httpLink = createHttpLink({
  uri: "https://us-central1-ss-devops.cloudfunctions.net/GraphQL",
});

class ApiService {
  protected apollo;

  constructor() {
    this.apollo = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
      defaultOptions,
    });
  }
}

export { ApiService };
