<template>
    <div>
        <span class="skill-arrow"></span>
        <a class="skill-text">{{ skill }}</a>
    </div>
</template>

<script setup>

defineProps({
  skill: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.skill-arrow {
    width: 100px;
    height: 0;
    border-bottom: 50px solid #190303;
}
</style>