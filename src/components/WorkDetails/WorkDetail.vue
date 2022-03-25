<template>
  <div class="hero hero-single route bg-image" style="background-image: url(assets/img/overlay-bg.jpg)">
    <div class="overlay-mf"></div>
    <div class="hero-content display-table">
      <div class="table-cell">
        <div class="container">
          <h2 class="hero-title mb-4">Portfolio Details</h2>
        </div>
      </div>
    </div>
  </div>
  <LayoutSection>
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img :src=projectDetails.ProjectIMG alt="">
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: {{ projectDetails.ProjectCategory }}</li>
                <li><strong>Client</strong>: {{ projectDetails.ProjectClient   }}</li>
                <li><strong>Project date</strong>: {{ projectDetails.ProjectDate }}</li>
                <li><strong>Project URL</strong>: <a href="#">{{ projectDetails.ProjectURL }}</a></li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>{{ projectDetails.ProjectTitle }}</h2>
              <p>
                {{ projectDetails.ProjectDescription }}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  </LayoutSection>
</template>

<script>
import { mapGetters } from 'vuex'
import LayoutSection from '../LayoutSection.vue'

export default {
  name: 'WorkDetail',
  components: {
    LayoutSection
  },
  props: ["details"],
  computed: {
    ...mapGetters([
      'projectDetails'
    ])
  }
}
</script>

<style>

</style>