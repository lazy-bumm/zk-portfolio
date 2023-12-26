 <script>
	import { goto } from "$app/navigation";

    export let name
    export let path
</script>



<div class="details-container color-container">
    <div class="article-container">
      <img
      loading="eager"
        src={`./assets/${path}/1.jpg`}
        alt="Project 1"
        class="project-img"
        on:click={()=>{goto(`/${path}`)}}
      />
    </div>
    <h3 style="font-family: cursive; color:black" class="experience-sub-title project-title">{name}</h3>

    <div class="new">
    <div class="btn-container">
        
     
    </div>
    </div>

  </div>

   


<!-- 

   <script>
    export let name;
    export let path;

    let title=name;
    let imageUrl="/assets/"+path+"/1.jpg";
  </script>
  

  
  <div class="container">
    <img src={imageUrl} alt={title} />
    <div class="title">{title}</div>
    <button on:click={() => window.location.href ="/"}>buttonText</button>
  </div>
  
<style>
   .container {
    position: relative;
    text-align: center;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    overflow: hidden; /* Ensure the content doesn't overflow */
  }

  .container:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .content {
    position: absolute;
    bottom: 16px;
    left: 0;
    right: 0;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px; /* Add margin to separate title and button */
  }

  button {
    padding: 8px 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #2980b9;
  }

  </style> -->