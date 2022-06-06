import { gql } from "@apollo/client";

const QUERY_DOCUMENT_BY_ID = gql`
  query GetDocumentById($id: UUID!) {
    share(id: $id) {
      identifier
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default QUERY_DOCUMENT_BY_ID;
