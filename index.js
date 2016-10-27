const pad = function(str, len, chr, dir = 'left') {
  if (str.toString().length < len) {
      return pad(dir === 'left' ? `${chr}${str}` : `${str}${chr}`, len, chr, dir);
  }
  return str;
};

const padLeft = (str, len, chr = ' ') => {
  return pad(str, len, chr, 'left');
};

const padRight = (str, len, chr = ' ') => {
  return pad(str, len, chr, 'right');
};


module.exports = {
  pad,
  padLeft,
  padRight
};
