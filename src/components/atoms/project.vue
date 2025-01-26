<template>
  <div class="project-overview">
  <heading1 title="Projekter" />
  <div class="projects-list">
    <div
      v-for="(project, index) in projects"
      :key="index"
    >
      <router-link :to="`/project/${index}`">
        <div class="project__container">
          <div class="project__container__img">
            <img :src="project.imageSrc" :alt="project.imageAlt">
          </div>
          <div class="project__container__text">
            <h3>{{ project.title }}</h3>
            <p class="projects-tech-text">{{ project.tech }}</p>
            <span class="projects-tech-text-underline"></span>
            <p>{{ project.description }}</p>
            <primaryctabtn text="Se mere om projektet her" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>

  
  <script>
  import heading1 from '@/components/atoms/heading1.vue';
  import primaryctabtn from './primaryctabtn.vue';

  export default {
    name: 'ProjectsList',
    data() {
      return {
        projects: [
          {
            imageSrc: 'src/assets/pictures/cover-2.png',
            imageAlt: 'Project 1 image',
            title: 'Padelshoppen',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tech: 'HTML, CSS & JavaScript'
          },
          {
            imageSrc: 'src/assets/pictures/cover-2.png',
            imageAlt: 'Project 2 image',
            title: 'Project 2',
            description: 'Description for Project 2',
            tech: 'HTML, CSS & JavaScript'
          },
          {
            imageSrc: 'src/assets/pictures/cover-2.png',
            imageAlt: 'Project 3 image',
            title: 'Project 3',
            description: 'Description for Project 3',
            tech: 'HTML, CSS & JavaScript'
          },
          {
            imageSrc: 'src/assets/pictures/cover-2.png',
            imageAlt: 'Project 3 image',
            title: 'Project 3',
            description: 'Description for Project 3',
            tech: 'HTML, CSS & JavaScript'
          }, 
        ]
      };
    },
    components: {
      heading1,
      primaryctabtn
    }
  };
  </script>
  
  <style scoped lang="scss">

.project-overview {
  display: flex;
  flex-direction: column;
  padding: 40px;
}

.projects-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);  /* Sætter to kolonner */
  justify-items: center;
  gap: 40px;
}


.project__container {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
}

.project__container__img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.project__container__img:hover {
  transform: scale(1.02);
}
.project__container__img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 20px;
}
.project__container__text {
  text-decoration: none;
}

.projects-tech-text {
  color: grey;
  text-transform:uppercase ;
}
  </style>
  