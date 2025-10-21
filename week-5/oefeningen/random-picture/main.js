(() => {
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const images = [
    "https://miro.medium.com/max/700/1*ev7PO4Oq0zUc98H6epI4uw.jpeg", // 0
    "https://miro.medium.com/max/700/1*f1YhaSL3mEABO6ZM8dCfZw.jpeg", // 1
    "https://miro.medium.com/max/700/1*56Bv4MGd4QIKUBl43YkxPQ.jpeg", // 2
    "https://miro.medium.com/max/700/1*WrXHQXrns2t6PI_3iyvHug.jpeg", // 3
  ];

  const $btn = document.getElementById("btnRandomPicture");

  $btn.addEventListener("click", function (e) {
    document.body.style.backgroundImage = `url(${images[generateRandomNumber(0, images.length - 1)]})`;
  });
})();
