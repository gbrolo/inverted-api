const verifyPresentParams = (
  paramList,
  requestParams,
) => {
  return new Promise((resolve, reject) => {
    const requestParamsKeys = Object.keys(requestParams);
    const verification = paramList.every(v => requestParamsKeys.includes(v));

    if (verification) {
      resolve();
    } else {
      reject("No text param present");
    }
  });
};

export {
  verifyPresentParams,
}