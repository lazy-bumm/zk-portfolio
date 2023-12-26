<script>
	import '../ass/style.css';
	import '../ass/mediaqueries.css';
	import Project from '$lib/components/Project.svelte';
  import { onMount } from "svelte";

  onMount(() => {
    initSlider();
    window.addEventListener("resize", initSlider);
  });

  const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;

        // Ensure the scrollbar thumb stays within bounds
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };

      // Remove event listeners on mouse up
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });

    // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
    });
  };
	function toggleMenu() {
		const menu = document.querySelector('.menu-links');
		const icon = document.querySelector('.hamburger-icon');
		menu.classList.toggle('open');
		icon.classList.toggle('open');
	}

  
  let sectionVisible = false;

  onMount(() => {
    // Check if the section is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(document.querySelector('.your-section-class')); // Replace with your actual class or selector
  });

</script>

<!-- // <meta charset="UTF-8" />
    // <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    // <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    // <title>My Portfolio</title>
    // <link rel="stylesheet" href="style.css" />
    // <link rel="stylesheet" href="mediaqueries.css" /> -->

<body>
	<nav id="desktop-nav">
		<div class="logo">Zahawa Khan</div>
		<div>
			<ul class="nav-links">
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</div>
	</nav>
	<nav id="hamburger-nav">
		<div class="logo">Zahawa Khan</div>
		<div class="hamburger-menu">
			<div class="hamburger-icon" on:click={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="menu-links">
				<li><a href="#about" on:click={toggleMenu}>About</a></li>
				<li><a href="#experience" on:click={toggleMenu}>Experience</a></li>
				<li><a href="#projects" on:click={toggleMenu}>Projects</a></li>
				<li><a href="#contact" on:click={toggleMenu}>Contact</a></li>
			</div>
		</div>
	</nav>
	<section id="profile">
		<div class="section__pic-container">
			<img id="profile-pic"  src="./assets/profile-pic.jpg" alt="Zahawa Khan profile picture" />
		</div>
		<div class="section__text">
			<p class="section__text__p1">Hello, I'm</p>
			<h1 class="title">Zahawa Khan</h1>
			<p class="section__text__p2" style="font-family:cursive">Artist</p>
			<div class="btn-container">
				<button class="btn btn-color-2" onclick="window.open('https://drive.google.com/file/d/1GzqvR0G0cjRpQvOGKAnUbiI1Q2wj2733/view')">
					Download Business Card
				</button>
        
				<button class="btn btn-color-1" onclick="location.href='./#contact'"> Contact Info </button>
			</div>
      <br> 
			<div id="socials-container">
				<img
         style="transform: scale(1.5); margin-right: 20px;"
					src="./assets/instagram.jpeg"
					alt="My Instagram profile"
					class="icon"
					onclick="location.href='https://www.instagram.com/thelostworld_7?igsh=OGQ5ZDc2ODk2ZA=='"
				/>
				<img
        style="transform: scale(1.5);  margin-right: 10px;"
					src="./assets/whatsapp.jpeg"
					alt="My Whatapp profile"
					class="icon"
					onclick="location.href='https://wa.me/message/NK5VY557M6ILL1'"
				/>
			</div>
		</div>
	</section>

	<!-- projects -->

	<section id="projects">
		<p class="section__text__p1">Browse My Recent</p>
		<h1 class="title">Projects</h1>
		<div class="experience-details-container">
			<div class="about-containers">
				<div class="scrollable-container">
					<!-- Repeat the Project component as needed -->
					<Project name="Live मोर (More)" path="2" />
					<Project name="Reflection on action" path="3"/>
					<Project  name="Beyond" path="4"/>
					<Project  name="Beneath" path="5"/>
					<Project name="Change "path="6"/>
					<Project name="Sound of peace" path="7"/>
					<Project name="Escape" path="8"/>
					<Project name="Melt" path="9"/>
          <Project name="Bleed" path="10"/>
					<img
						src="./assets/arrow.png"
						alt="Arrow icon"
						class="icon arrow"
						onclick="location.href='./#contact'"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- experience -->
   <br> <br>
<section id="experience">
  <h1 class="mint">Journey till Now...</h1>
  
  <div class="container">
    <div class="slider-wrapper">
     
      <ul class="image-list">
        {#each Array.from({ length: 19 }, (_, i) => i + 1) as imageIndex}
          <img class="image-item" src={`assets/${imageIndex+1}.jpg`} alt={`img-${imageIndex}`} />
        {/each}
      </ul>
      
    </div>
    <div class="slider-scrollbar">
      <div class="scrollbar-track">
        <div class="scrollbar-thumb"></div>
      </div>
    </div>
   
  </div>
 
</section>
 
<br><br> <br> <br><br> <br> <br><br> <br> 
	<section id="about" class:visible={sectionVisible} class="your-section-class">
    <br> <br> <br> 
		<p class="section__text__p1">Get To Know More</p>
		<h1 class="title">About Me</h1>
		<div class="section-container">
			<div class="section__pic-container">
				<img src="./assets/about-pic.png" alt="Profile picture" class="about-pic" />
			</div>
			
				<div class="text-container">
          <br><br><br><br> 
					<p>
						<b>Zahawa Khan</b> is a mixed media artist, who admires nature. Her work explores the magic of nature and epitomises the emotive, often painful, complexity of life. Taking inspiration from the environment, her work serves as a conduit for viewers to connect with their deepest feelings and reflect on their life journeys.
Nature is her greatest muse; her delicate work depicts the fragility of the human spirit and explores deep reservoirs of emotion. By blending visual beauty with metaphysical depth, she embraces the joy of life even in the face of its most trying moments.


“Every time life disappoint me, 
Nature inspires me to create my World of  Imagination.”

<br> <br> 
<span style="color:blue; font-family:Lucida Handwriting; color: rgb(32, 165, 154); font-weight:bold; ">
It has been a while since I have been ‘lost’ in my own thoughts. 
<br>
Striving for peace by tying butterfly knots.
<br>
Looking up in the sky, 
<br>
Makes me wanna fly. 
<br>
How peaceful is my world of imagination.
<br>
Give me a moment my friend,
<br>
Let me create something beyond limitation. 
<br>
By -<b > Zahawa.<b>
</span>
 <br>

					</p>
				</div>
			
		</div>
		<img
			src="./assets/arrow.png"
			alt="Arrow icon"
			class="icon arrow"
			onclick="location.href='./#experience'"
		/>
	</section>

	<section id="contact">
		<p class="section__text__p1">Get in Touch</p>
		<h1 class="title">Contact Me</h1>
		<div class="contact-info-upper-container">
			<div class="contact-info-container">
				<img src="./assets/email.png" alt="Email icon" class="icon contact-icon email-icon" />
				<p><a href="mailto:zahawakn@gmail.com">zahawakn@gmail.com</a></p>
			</div>
			<div class="contact-info-container">
				<img src="./assets/instagram.jpeg" alt="LinkedIn icon" class="icon contact-icon" />
				<p><a href="https://www.instagram.com/thelostworld_7?igsh=OGQ5ZDc2ODk2ZA==">instagram</a></p>
			</div>
		</div>
	</section>
	<footer>
		<nav>
			<div class="nav-links-container">
				<ul class="nav-links">
					<li><a href="#about">About</a></li>
					<li><a href="#experience">Experience</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
        
				</ul>
			</div>
		</nav>
		<p>Copyright &#169; 2023 Zahawa Khan. All Rights Reserved.</p>
	</footer>
	<script src="./assets/script.js"></script>
</body>

<style>
	.scrollable-container {
		display: flex;
		overflow-x: auto;
		padding: 16px; /* Adjust padding as needed */
    gap:15px;
    
	}

  #profile-pic{
    
  border-radius: 40%;

  }
 
  .container {
  max-width: 1700px;
  width: 95%;
  display: flex;
		overflow-x: auto;
		padding: 16px; /* Adjust padding as needed */
    justify-content:centre
    
}
.slider-wrapper {
  position: relative;
}
.slider-wrapper .slide-button {
  position: absolute;
  top: 50%;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  z-index: 5;
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 2.2rem;
  background: #000;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transform: translateY(-50%);
}
.slider-wrapper .slide-button:hover {
  background: #404040;
}
.slider-wrapper .slide-button#prev-slide {
  left: -25px;
  display: none;
}
.slider-wrapper .slide-button#next-slide {
  right: -25px;
}
.slider-wrapper .image-list {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 18px;
  font-size: 0;
  list-style: none;
  margin-bottom: 30px;
  overflow-x: auto;
  scrollbar-width: none;
}
.slider-wrapper .image-list::-webkit-scrollbar {
  display: none;
}
.slider-wrapper .image-list .image-item {
  width: 325px;
  height: 400px;
  object-fit: cover;
}
.container .slider-scrollbar {
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
.slider-scrollbar .scrollbar-track {
  background: #ccc;
  width: 100%;
  height: 2px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  position: relative;
}
.slider-scrollbar:hover .scrollbar-track {
  height: 4px;
}
.slider-scrollbar .scrollbar-thumb {
  position: absolute;
  background: #000;
  top: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  cursor: grab;
  border-radius: inherit;
}
.slider-scrollbar .scrollbar-thumb:active {
  cursor: grabbing;
  height: 8px;
  top: -2px;
}
.slider-scrollbar .scrollbar-thumb::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -10px;
  bottom: -10px;
}
.image-item:hover{
cursor:pointer
}
/* Styles for mobile and tablets */
@media only screen and (max-width: 1023px) {
  .slider-wrapper .slide-button {
    display: none !important;
  }
  .slider-wrapper .image-list {
    gap: 10px;
    margin-bottom: 15px;
    scroll-snap-type: x mandatory;
  }
  .slider-wrapper .image-list .image-item {
    width: 280px;
    height: 380px;
  }
  .slider-scrollbar .scrollbar-thumb {
    width: 20%;
  }
}



@font-palette-values --Mint {
  font-family: Rocher;
  base-palette: 7;
}


.mint {
  font-palette: --Mint;
}
@font-face {
  font-family: 'Rocher';
  src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
}

.mint {
  font-family: 'Rocher';
  text-align: center;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.your-section-class {
    opacity: 0;
    transition: opacity 0.5s ease; 
  }

  .visible {
    opacity: 1;
  }
</style>
