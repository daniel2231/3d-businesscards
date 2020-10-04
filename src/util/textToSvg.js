import TextToSVG from 'text-to-svg';

export const svgConvert = (name) => {
  TextToSVG.load('public/font/BadScript-Regular.ttf', function (err, textToSVG) {
    const svg = textToSVG.getSVG(name);
    console.log(svg)
    return svg
  });
}
