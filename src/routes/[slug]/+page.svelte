<script>
	 import { onMount } from "svelte";
   export let data;
let imagePath = `/assets/${data.path}/1.jpg`; // Set your image path here

  let k="project-1" 

  let fileContent =data.content
  let title=data.title
  
  onMount(() => {
    // This code will be executed when the component is mounted
    // You can put the code here that you want to run when the component is first loaded
    window.location.reload(true);
  });
  const openLargeImage = () => {
    console.log("clicked")
    window.open(imagePath, "_blank");
  };
  function getRandomNumber() {
  // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
  // We then multiply it by the range (10 - 2 + 1) and add the minimum value (2)
  return Math.floor(Math.random() * (10 - 2 + 1)) + 2;
}


const randomNo = getRandomNumber();
 let r1=randomNo;
 let r2=(r1+1)%10;
 if(r2==data.path)r2++;
 if(r2==0 || r2==1){r2=2;}
 let r3=(r2+1)%10;
 if(r3==data.path)r3++;
if(r3==0 || r3==1)r3=2;


</script>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{data.title }</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Jade website template">
    <meta name="keywords" content="apollo, jade, template, html, sass, jquery">
    <meta name="author" content="Bucky Maler">
    <link rel="stylesheet" href="assets2/css/main.css">
  </head>
  <body>
    <section id="hero">
      <header>
        <div class="nav-toggle">
          <p>Menu</p><span></span>
        </div>
        <ul class="nav">
          <li><a href="/#about">About</a></li>
          <li><a href="/#projects">Work</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </header>
      <div class="wrapper">
        <div class="welcome">
          <h1 style="margin-top: 2cm;"><strong>{data.title}</strong></h1>
          <h4>{data.medium}</h4>
          <h4>{data.size}</h4>
          <p>{fileContent}</p>
        </div>
        <div class="photographer"><a target="_blank" rel="noopener" href={imagePath}><img class="zoom" on:click={openLargeImage} src={`/assets/${data.path}/1.jpg`}> </a></div>
      </div>
    </section>

     <br> <br> 
    <!-- <button on:click={()=>{
      console.log("kuch to ho")
      window.open("/")
    }}>click me</button>
    -->
    <section id="full-slide">
    
    <ul class="banner">
     
        <li class="active"><img class="zoom" src={`assets/${data.path}/1.jpg`}></li>
        <li><img class=" zoom" src={`assets/${data.path}/2.jpg`} ></li>
        <li ><img class="mainGroupImage zoom" src={`assets/${data.path}/3.jpg`}></li>
        <li ><img class="mainGroupImage zoom" src={`assets/${data.path}/4.jpg`}></li>
      </ul><i class="icon-chevron-thin-left prev"></i><i class="icon-chevron-thin-right next"></i>
    </section>
  <br> <br>
 

    <h1 class="grays">Check Out My other Works...</h1>

    <section id="three-slide"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 248.8" style="enable-background:new 0 0 100 248.8;" xml:space="preserve">
<g transform="translate(0.000000,749.000000) scale(0.100000,-0.100000)">
	<path d="M0,6245.8V5001.6h500h500V5176v174.4H752.5H505v1069.8V7490H252.5H0V6245.8z"/>
</g>
</svg>
      <div class="wrapper">
        <ul class="slider">

          <li class="back"><a href={`/${r1}`}><img src={`assets/${r1}/1.jpg`}></a></li>
          <li class="current"><a href={`/${r2}`}><img src={`assets/${r2}/1.jpg`}></a></li>
          <li class="front"><a href={`/${r3}`}><img src={`assets/${r3}/1.jpg`} ></a></li>
       
        </ul>
      
      </div><i class="icon-chevron-thin-left prev"></i><i class="icon-chevron-thin-right next"></i>
      
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="assets22/js/vendor/jquery-2.2.4.min.js"><\/script>')</script>
    <script src="assets2/js/functions-min.js"></script>
   
  </body>
  <footer>
		<br><br><br>
		<p>Copyright &#169; Zahawa Khan. All Rights Reserved.</p>
	</footer>
</html>

<style>


img {
    width: 100%; /* or any custom size */
    height: 100%; 
    object-fit: contain;  
}



@font-palette-values --Grays {
  font-family: Rocher;
  base-palette: 9;
}
@font-face {
  font-family: 'Rocher';
  src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
}

.grays {
  font-palette: --Grays;
  font-family: 'Rocher';
  text-align: center;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
footer {
  height: 26vh;
  margin: 0 1rem;
}

footer p {
  text-align: center;
}
@media screen and (max-width: 600px) {
footer nav {
    height: fit-content;
    margin-bottom: 2rem;
  }
  footer {
    height: 40vh;
  }
}

</style>