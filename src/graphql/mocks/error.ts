import { GraphQLError } from "graphql";
import QUERY_DOCUMENT_BY_ID from "../query";

export const wrongId = "something-wrong";

const getErrorResponse = () => ({
  request: {
    query: QUERY_DOCUMENT_BY_ID,
    variables: {
      id: wrongId,
    },
  },
  result: {
    errors: [new GraphQLError('Argument "id" has invalid value $id.')],
  },
});

export default getErrorResponse;
