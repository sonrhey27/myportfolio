<template>
<HeaderSection />
<WorkDetails />
</template>

<script>
import HeaderSection from '../components/HeaderSection.vue'
import WorkDetails from '../components/WorkDetails/WorkDetail.vue'

export default {
  name: 'WorkView',
  components: { 
      WorkDetails,
      HeaderSection
  }
}
</script>

<style>

</style>