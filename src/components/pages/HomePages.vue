<template>
  <menubar />
  <intro />
  <project />
  <skill skill="Test" />
</template>

<script>
import menubar from '@/components/molecules/menubar.vue';
import project from '@/components/atoms/project.vue';
import intro from '@/components/molecules/intro.vue';
import skill from '@/components/atoms/skill.vue';


export default {
  name: "HomePage",
  components: {
    menubar,
    project,
    intro,
    skill
  },
};
</script>
