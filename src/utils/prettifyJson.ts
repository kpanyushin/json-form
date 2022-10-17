export const prettifyJsonString = (jsonString: string): string => {
  try {
    return JSON.stringify(JSON.parse(jsonString), null, "\t");
  } catch (err) {
    return jsonString;
  }
};
