<script>
export default {
  name: 'PrimaryCtaBtn',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};


</script>
<template>
    <button class="primarybtn"> {{ text }}</button>
</template>

<style scoped>
   .primarybtn {
        border: none;
        background-color: transparent;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 1rem;
    }
</style>