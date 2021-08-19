let NiceImages = [
    "https://image.shutterstock.com/image-vector/abstract-number-69-made-red-260nw-741775408.jpg",
    "http://2.bp.blogspot.com/_Kom-mudcX5I/TJVqG-o__iI/AAAAAAAACFY/istWivoTqVo/s1600/n0069.jpg",
    "https://thumbs.dreamstime.com/z/nice-wooden-cubes-nice-written-wooden-cubes-blue-flowers-white-wood-118016564.jpg",
    "https://c8.alamy.com/comp/2CBTH9W/3d-illustration-golden-number-69-isolated-on-a-white-backgroundwith-clipping-path-2CBTH9W.jpg",
    "https://c8.alamy.com/comp/S14ACX/nice-word-written-with-wood-block-characters-S14ACX.jpg",
    "https://cdn2.vectorstock.com/i/1000x1000/20/51/nice-black-and-white-city-hand-written-text-vector-23792051.jpg",
    "https://image.shutterstock.com/image-illustration/nice-text-written-on-red-260nw-1948666018.jpg"
];

const imgs = document.getElementsByTagName("img");

for(let i =0 ; i<imgs.length; i++){
    const randomImg = Math.floor(Math.random()* NiceImages.length);
    imgs[i].src = NiceImages[randomImg];
}
