<template>
  <div class="skill-overview">
    <Heading1 title="Skills" />
    <div class="skills-list">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-container"
        @click="toggleSkill(index)" 
      >
        <span class="line"></span>
        <div 
          class="skill-text-arrow" 
          :class="{ 'active': activeSkill === index }"
        >
          <box-icon name="down-arrow-alt" class="arrow"></box-icon>
          <a class="skill-text">{{ skill.area }}</a>
        </div>
        <!-- Brug v-show for smooth visning -->
        <p v-show="activeSkill === index" class="skill-text-p">{{ skill.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Heading1 from '@/components/atoms/Heading1.vue'; // Importér Heading1-komponenten

export default {
  name: 'SkillsList',
  data() {
    return {
      skills: [
        {
          area: 'Vue 3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          area: 'JavaScript',
          text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          area: 'CSS',
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
          area: 'HTML',
          text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ],
      activeSkill: null,
    };
  },
  methods: {
    toggleSkill(index) {
      // Toggling for skill
      this.activeSkill = this.activeSkill === index ? null : index;
    },
  },
  components: {
    Heading1,
  },
};
</script>

<style scoped>
.skill-container {
  display: flex;
  flex-direction: column;
  width: 35%;
  gap: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out; /* Smooth transition for the whole container */
}

.skill-text-arrow {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   font-size: 1.5rem;
   font-weight: 500;
   transition: transform 0.3s ease-in-out; /* Smooth rotation of the arrow */
}

.line {
  display: block;
  height: 1px;
  background-color: black;
}

.skill-text-p {
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  max-height: 0; /* Initially hidden */
  overflow: hidden; /* Prevents content from overflowing */
  transition: max-height 0.3s ease-in-out; /* Smooth expansion */
  padding-left: 20px;
  margin-top: 10px;
  color: #555;
}

/* When the skill is active, allow text to expand */
.skill-text-p {
  max-height: 1000px; /* High enough value to allow text to be fully shown */
  padding-top: 10px; /* Padding for the text */
}

/* Optional: Change color of active skill text */
.skill-text-arrow.active {
  color: #007BFF;
}

/* Rotate the arrow when active */
.skill-text-arrow.active .arrow {
  transform: rotate(180deg); /* Rotate 180 degrees when clicked */
}
</style>
