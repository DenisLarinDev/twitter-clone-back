import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

export const GraphQLConfig = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  debug: true,
  playground: true,
  autoSchemaFile: 'schema.gql',
  subscriptions: {
    'graphql-ws': {
      path: '/graphql',
    },
    'subscriptions-transport-ws': {
      path: '/graphql',
    },
  },
  formatError: (error) => {
    const { message, extensions } = error;
    return { message };
  },
});
