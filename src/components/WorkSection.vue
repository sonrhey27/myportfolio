<template>
    <section id="work" class="portfolio-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Portfolio
              </h3>
              <p class="subtitle-a">
                List of all the Projects that I have made and part of.
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <WorkSectionList />
        </div>
      </div>
    </section>
</template>

<script>
import WorkSectionList from './WorkSectionList.vue'
export default {
    name: 'WorkSection',
    components: {
      WorkSectionList
    }
}
</script>

<style>

</style>