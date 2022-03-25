<template>
  <HeaderSection>
    <NavBar />
  </HeaderSection>
  <ProfileSection />
  <MainSection />
</template>


<script>
import HeaderSection from '../components/HeaderSection.vue'
import ProfileSection from '../components/ProfileSection.vue'
import MainSection from '../components/MainSection.vue'
import NavBar from '../components/NavigationBar.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderSection,
    ProfileSection,
    MainSection,
    NavBar
  }
}
</script>
