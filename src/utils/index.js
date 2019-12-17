export const setBgImage = (source) => {
  return { backgroundImage: `url(${source})` }
}

export const setFields = (item) => {
  item.fields.map(field => {
    item[field.variable_name] = field.value
  })
  return item
}