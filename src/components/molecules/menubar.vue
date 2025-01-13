<script>
// import primaryctabtn from '../atoms/primaryctabtn.vue';

/*export default {
    components: {
    primaryctabtn,
    }
} */
</script>
<template>
    <div class="header">
      <div class="menubar">
        <div class="menubar__nav">
          <ul>
            <li>
              <router-link to="/">Projekter</router-link> 
            </li>
            <li>
              <router-link to="/om-mig">Om mig</router-link> 
            </li>
            <li>
              <a href="https://read.cv/magnusgb" target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  .menubar {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .menubar__nav ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 1rem 2rem;
    background-color: white;
  }
  
  .menubar__nav ul li a {
    text-decoration: none;
    color: #121113;
    padding: 2rem;
    font-family: "Inter", serif;
    font-weight: 500;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .menubar__nav ul li a:hover {
    color: #635e67;
  }
  </style>
  