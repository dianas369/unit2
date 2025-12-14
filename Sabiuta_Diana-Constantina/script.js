function startSlideshow() {
    const slideshow = document.getElementById('slideshow');
    const images = ['img_cpu.png', 'img_ram.png', 'img_disk.png'];  
    let index = 0;

    setInterval(() => {
        index = (index + 1) % images.length;  
        slideshow.src = images[index];
    }, 3000); // 3000 ms = 3 secunde
}
