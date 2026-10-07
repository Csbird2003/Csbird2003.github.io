// Select the image by its ID

const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (3 images)
const slides = [
{src: 'images/one.png', 
  alt: 'Childlike drawing',
  caption: 'Doodling was just an escape from the boredom of long school days...'
	},
{ src: 'images/two.png', 
  alt: 'Collage of illuistartions',
  caption: 'I started finding inspiration from the world and media around me...'
},
{ src: 'images/three.png', 
  alt: 'Markers on paper',
  caption: 'Then I started seeing real artists online, seeing what they use and wanting to make art that was just as bright...'
},
{ src: 'images/four.png', 
  alt: 'Spiderman doodle',
  caption: 'My parents saw how much I loved drawing and they got me my first drawing track tablet...'
},
{ src: 'images/five.png',
  alt: 'Love Simon and Blue',
  caption: 'Relearning how to draw from paper to a track pad felt like I was starting over again. It was frustrating. I did not want to stop...'
},
{ src: 'images/six.png',
  alt: 'Skull and Snake Tattoo',
  caption: 'Then my friend commissioned me for a tattoo and suddenly art did not seem like such an impossible choice...'
},
{src: 'images/seven.png',
  alt: 'Ultra Sticker',
  caption: 'Art classes kept giving me more and more opportunities to keep creating...'
},
{src: 'images/eight.png',
	alt: 'Original concept idea',
	caption: 'To keep learning different mediums and tools...'
},
{src: 'images/nine.png',
 	alt: 'Original Comic book Cover',
	caption: 'I never stopped making and I kept getting inspired...'
},
{src: 'images/loop.gif',
	alt: 'Pokemon Gif',
	caption: 'There was nothing I could not make come alive with my own two hands.'
}
];

let currentIndex = 0;

// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});

// Helper to show slide
function showSlide(index) {
	const slide = slides[index];
	mainImage.src = slide.src; // replaces the image
	mainImage.alt = slide.alt; // replaces the alt of the image
	caption.textContent = slide.caption; // updates caption text
}

// Advance on click
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);