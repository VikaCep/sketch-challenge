import QUERY_DOCUMENT_BY_ID from "../query";

export const id1 = "original-document-id";
export const id2 = "another-document-id";

const entries: Record<string, Record<string, unknown>[]> = {
  [id1]: [
    {
      files: [
        {
          height: 808,
          scale: 1,
          thumbnails: [
            {
              height: null,
              url: "thumbnail-url",
              width: null,
            },
          ],
          url: "file-url",
          width: 606,
        },
      ],
      isArtboard: true,
      name: "Xerox alto",
    },
    {
      files: [
        {
          height: 880,
          scale: 1,
          thumbnails: [
            {
              height: null,
              url: "thumbnail-url",
              width: null,
            },
          ],
          url: "file-url",
          width: 1077,
        },
      ],
      isArtboard: true,
      name: "Etch a Sketch",
    },
    {
      files: [
        {
          height: 2133,
          scale: 1,
          thumbnails: [
            {
              height: null,
              url: "thumbnail-url",
              width: null,
            },
          ],
          url: "file-url",
          width: 1200,
        },
      ],
      isArtboard: true,
      name: "Android",
    },
  ],
  [id2]: [
    {
      files: [
        {
          height: 880,
          scale: 1,
          thumbnails: [
            {
              height: null,
              url: "thumbnail-url",
              width: null,
            },
          ],
          url: "file-url",
          width: 1077,
        },
      ],
      isArtboard: true,
      name: "Etch a Sketch",
    },
  ],
};

const getMockedDocument = (id: string) => ({
  request: {
    query: QUERY_DOCUMENT_BY_ID,
    variables: {
      id,
    },
  },
  result: {
    data: {
      share: {
        identifier: id,
        version: {
          document: {
            artboards: {
              entries: entries[id] || [],
            },
            name: `Document ${id}`,
          },
        },
      },
    },
  },
});

export default getMockedDocument;
