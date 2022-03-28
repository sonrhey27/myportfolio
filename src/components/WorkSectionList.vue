<template>
    <div class="col-md-4">
        <div class="work-box">
            <a :href=work.project_image data-gallery="portfolioGallery" class="portfolio-lightbox">
            <div class="work-img">
                <img :src=work.project_image alt="" class="img-fluid">
            </div>
            </a>
            <div class="work-content">
            <div class="row">
                <div class="col-sm-8">
                <h2 class="w-title">{{ work.project_title }}</h2>
                <div class="w-more">
                    <span class="w-ctegory">{{ work.project_type }}</span> / <span class="w-date">{{ work.project_date }}</span>
                </div>
                </div>
                <div class="col-sm-4">
                <div class="w-like">
                    <button class="btn btn-link btn-lg" @click="viewDetails"><span class="bi bi-plus-circle"></span></button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'WorkSectionList',
props: ['work'],
methods: {
    viewDetails(){
        this.$store.commit('changeCategory', this.work.project_type)
        this.$store.commit('changeClient', this.work.client)
        this.$store.commit('changeDate', this.work.project_date)
        this.$store.commit('changeUrl', '#')
        this.$store.commit('changeTitle', this.work.project_title)
        this.$store.commit('changeImg', this.work.project_image)
        this.$router.push({
            path : '/work'
        })
    }
}
}
</script>

<style>

</style>