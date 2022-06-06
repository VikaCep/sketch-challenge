import QUERY_DOCUMENT_BY_ID from "./query";
import { useQuery } from "@apollo/client";

const useGetDocumentById = (id: string) => {
  const { data, loading, error } = useQuery(QUERY_DOCUMENT_BY_ID, {
    variables: { id },
  });

  return { loading, error, data: data?.share?.version?.document };
};

export default useGetDocumentById;
