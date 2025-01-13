<template>
  <menubar />
  <intro />
  <project />
</template>

<script>
import menubar from '@/components/molecules/menubar.vue';
import project from '@/components/atoms/project.vue';
import intro from '@/components/molecules/intro.vue';


export default {
  name: "HomePage",
  components: {
    menubar,
    project,
    intro
  },
};
</script>
