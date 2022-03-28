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
          <WorkSectionList v-for="work in workList" :key="work.id" :work="work" @viewWork="viewWork"/>
        </div>
      </div>
    </section>
</template>

<script>
import WorkSectionList from './WorkSectionList.vue'
export default {
    name: 'WorkSection',
    data(){
      return {
      workList: [
        {
            "id" : 1,
            "project_image" : "assets/img/wims.PNG",
            "project_title" : "Yello Hotel IMS",
            "project_date" : "December 2019",
            "project_type" : "Web Development",
            "client" : "Gothong Southern"
        },
        {
            "id" : 2,
            "project_image" : "assets/img/gsone.PNG",
            "project_title" : "GSOne LRP",
            "project_date" : "February 2022",
            "project_type" : "Web Development",
            "client" : "Gothong Southern"
        },
        {
            "id" : 3,
            "project_image" : "assets/img/tapngo.PNG",
            "project_title" : "Tap n Go Cargo Delivery",
            "project_date" : "October 2021",
            "project_type" : "Mobile Development",
            "client" : "Gothong Southern"
        },
        {
            "id" : 4,
            "project_image" : "assets/img/yellox.PNG",
            "project_title" : "Yello X Delivery",
            "project_date" : "August 2021",
            "project_type" : "Mobile Development",
            "client" : "Gothong Southern"
        },
        {
            "id" : 5,
            "project_image" : "assets/img/yellox-admin.PNG",
            "project_title" : "Yello X Admin",
            "project_date" : "December 2020",
            "project_type" : "Web Development",
            "client" : "Gothong Southern"
        },
        {
            "id" : 6,
            "project_image" : "assets/img/claims.PNG",
            "project_title" : "Claims System",
            "project_date" : "December 2020",
            "project_type" : "Web Development",
            "client" : "Gothong Southern"
        }
        ]
      }
    },
    components: {
      WorkSectionList
    },
    methods: {
      viewWork(work){
        this.$emit('viewWork', work)
      }
    }
}
</script>

<style>

</style>