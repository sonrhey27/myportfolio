<template>
    <LayoutSection>
        <AboutMeSection />
        <ServicesSection />
        <WorkSection />
    </LayoutSection>
</template>

<script>
import LayoutSection from './LayoutSection.vue'
import AboutMeSection from './AboutMeSection.vue'
import ServicesSection from './ServicesSection.vue'
import WorkSection from './WorkSection.vue'

export default {
    name: 'MainSection',
    components: {
        LayoutSection,
        AboutMeSection,
        ServicesSection,
        WorkSection
    }
}
</script>

<style>

</style>