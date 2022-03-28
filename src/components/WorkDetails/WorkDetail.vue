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
                  <img :src=$store.state.project_img alt="">
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: {{ $store.state.category }}</li>
                <li><strong>Client</strong>: {{ $store.state.client }}</li>
                <li><strong>Project date</strong>: {{ $store.state.project_date }}</li>
                <li><strong>Project URL</strong>: <a href="#">{{ $store.state.project_url }}</a></li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>{{ $store.state.project_title }}</h2>
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
  }
}
</script>

<style>

</style>