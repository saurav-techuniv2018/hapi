const concatenator = (context) => {
  const params = context.data.root;

  if (!params.name || !params.suffix) return '';

  return `${params.name}${params.suffix}`;
};

module.exports = concatenator;
