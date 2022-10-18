export const prettifyJsonString = (jsonString: string): string => {
  try {
    return JSON.stringify(JSON.parse(jsonString), null, "\t").replace(
      /</g,
      "\\u003c"
    );
  } catch (err) {
    return jsonString;
  }
};
