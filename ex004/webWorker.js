const colorlist = [
    "#FFC6D9",
    "#FFB347",
    "#B39EB5",
    "#77DD77",
    "#FDFD96",
    "#FF6961",
    "#CFCFC4",
    "#AEC6CF",
    "#F49AC2",  
    "#C5E384",  

    "#FF1493",
    "#00FF00",
    "#FFFF00",
    "#FFD700",
    "#00FFFF",
    "#FF00FF",
    "#8A2BE2",
    "#00FA9A",
    "#FFA07A",
    "#FF4500"
];

let currentColorIndex = 0;

addEventListener("message", (event) => {
    const bgColor = colorlist[currentColorIndex];
    const fontColor = colorlist[(currentColorIndex + 10) % colorlist.length];
    currentColorIndex += 1;
    currentColorIndex %= colorlist.length;
    const color = {"bgColor": bgColor, "fontColor": fontColor}
    postMessage(color);
});