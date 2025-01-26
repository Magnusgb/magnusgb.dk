<template>
    <menubar />
    <div class="project-detail">
      <div class="btn-titleh1">
      <button class="backbtn" @click="$router.go(-1)">Tilbage</button>
      <h1>{{ project.title }}</h1>
    </div>
      <img :src="project.imageSrc" :alt="project.imageAlt">
      <p>{{ project.description }}</p>
  
      <div v-if="project.details">
        <h2>Detaljer</h2>
        <p>{{ project.details }}</p>
      </div>
  
      <div v-if="project.tech">
        <h3>Teknologier brugt:</h3>
        <ul>
          <li class="tech-text" v-for="(tech, index) in project.tech" :key="index">{{ tech }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
    import menubar from '@/components/molecules/menubar.vue';
  export default {
    name: 'ProjectDetail',
    props: ['id'],
    data() {
      return {
        projects: [
          {
            //imageSrc: '../src/assets/pictures/cover-2.png',//
            imageAlt: 'Project 1 image',
            title: 'UI/UX - Padelshoppen',
            description: 'Dette projekt var i forbindelse med min afsluttende eksamen som multimediedesigner. I den forbindelse, desigende jeg denne app hvor et loyalitetsprogram er implementeret.',
            details: 'For at kunne designe denne app, var der blevet lavet research på målgruppen, e-commerce apps og og visual research, for at holde den holde tråd, på tværs af Padelshoppens digitale. Derudover var der blevet lavet wireframes og prototyper i Adobe XD.',
            tech: ['Figma', 'Primær & sekundær dataindsamling', 'Visual research', 'Brugertest']
          },
          {
            imageSrc: '@/assets/pictures/cover-2.png',
            imageAlt: 'Project 2 image',
            title: 'Project 2',
            description: 'Beskrivelse af projekt 2',
            details: 'Projekt 2 er en mobilapp...',
            tech: ['React Native', 'Firebase']
          },
          {
            imageSrc: '@/assets/pictures/cover-2.png',
            imageAlt: 'Project 3 image',
            title: 'Project 3',
            description: 'Beskrivelse af projekt 3',
            details: 'Projekt 3 er et webbaseret system...',
            tech: ['Vue.js', 'Node.js', 'MongoDB']
          },
          {
            imageSrc: '@/assets/pictures/cover-2.png',
            imageAlt: 'Project 4 image',
            title: 'Project 4',
            description: 'Beskrivelse af projekt 4',
            details: 'Projekt 4 er en mobilapp...',
            tech: ['React Native', 'Firebase']
          }
        ]
      };
    },
    components: {
    menubar,
  },
    computed: {
      // Brug id til at hente det rigtige projekt
      project() {
        return this.projects[this.id];  // Hent projektet baseret på id
      }
    }
  };
  </script>
  
  <style>

  .btn-titleh1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }

  .backbtn {
        padding: .6rem 1.4rem;
        border-radius: 20px;
        background-color: transparent;
        cursor: pointer;
 }

    .tech-text li, ul {
        padding: 0px;
    }
    </style>