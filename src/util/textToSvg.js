import TextToSVG from 'text-to-svg';

export const svgConvert = (name) => {
  return new Promise(function (resolve, reject) {
    TextToSVG.load('public/font/BadScript-Regular.ttf', function (err, textToSVG) {
      if (err) {
        reject(err);
      }
      const svg = textToSVG.getSVG(name);
      resolve(svg);
    });
  });
};
