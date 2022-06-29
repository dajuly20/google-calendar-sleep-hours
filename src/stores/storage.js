export const updateConfig = (rest) => {
  let existingConfig;
  try {
    existingConfig = JSON.parse(window.localStorage.getItem('config'));
  } catch (err) {
     // eslint-disable-next-line no-console
      // eslint-disable-next-line no-console
      console.log(err," <<");
    // don't handle
  }

  const updatedConfig = {
    ...existingConfig,
    ...rest,
  };

  // eslint-disable-next-line no-console
console.log(updatedConfig," <<");
window.localStorage.setItem('config', JSON.stringify(updatedConfig));
};

export const getConfig = () => {
  try {
    return JSON.parse(window.localStorage.getItem('config'));
  } catch (err) {
    // don't handle
  }
  return null;
};
