
function serializeCoordinates(coordinates) {
  return JSON.stringify(coordinates);
}

function deserializeCoordinates(formatedCoordinates) {
  return JSON.parse(formatedCoordinates);
}

export{serializeCoordinates, deserializeCoordinates};