exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor: '#bcbec0',
    backgroundColor: '#212121',
    borderColor: '#242424',
    cursorColor: config.cursorColor || '#bcbec0',
    colors: {
      black: '#474646',
      red: '#dd7186',
      green: '#87bb7c',
      yellow: '#d5b875',
      blue: '#70ace5',
      magenta: '#a48add',
      cyan: '#69c5ce',
      white: '#bcbec0',
      lightBlack: '#6a6c6c',
      lightRed: '#ed8499',
      lightGreen: '#97d589',
      lightYellow: '#e9cb88',
      lightBlue: '#87bff5',
      lightMagenta: '#b9a0ef',
      lightCyan: '#7bdbe4',
      lightWhite: '#d0d2d3'
    }
  });
};