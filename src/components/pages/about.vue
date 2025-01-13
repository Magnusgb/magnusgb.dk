<script>
import menubar from '@/components/molecules/menubar.vue';
import heading1 from '@/components/atoms/heading1.vue';

export default {
  name: "om-mig",
  components: {
    menubar,
    heading1
  },
};
</script>


<template>
    <menubar />
    <div class="header">
        <heading1 title="Om mig" />
    </div>
</template>