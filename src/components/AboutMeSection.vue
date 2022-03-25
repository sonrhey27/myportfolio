<template>
  <!-- ======= About Section ======= -->
    <section id="about" class="about-mf sect-pt4 route">
        <div class="container">
            <div class="row">
            <div class="col-sm-12">
                <div class="box-shadow-full">
                <div class="row">
                    <div class="col-md-6">
                    <div class="row">
                        <div class="col-sm-6 col-md-5">
                        <div class="about-img">
                            <img src="assets/img/testimonial-2.jpg" class="img-fluid rounded b-shadow-a" alt="">
                        </div>
                        </div>
                        <div class="col-sm-6 col-md-7">
                        <div class="about-info">
                            <p><span class="title-s">Name: </span> <span>Son Rhey Deiparine</span></p>
                            <p><span class="title-s">Profile: </span> <span>Full Stack Web Developer</span></p>
                            <p><span class="title-s">Email: </span> <span>sonrheydeiparine2@gmail.com</span></p>
                            <p><span class="title-s">Phone: </span> <span>(+639) 302999876</span></p>
                        </div>
                        </div>
                    </div>
                    <SkillsSection />
                    </div>
                    <div class="col-md-6">
                    <div class="about-me pt-4 pt-md-0">
                        <div class="title-box-2">
                        <h5 class="title-left">
                            About me
                        </h5>
                        </div>
                        <p class="lead">
                        Hi! I am Son Rhey S. Deiparine, A <strong>4years Full Stack Developer</strong> here in the Philippines. I already developed several web applications using different languages. I also develop some mobile applications using a cross platform app development. 
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section><!-- End About Section -->
</template>

<script>
import SkillsSection from './SkillsSection.vue'
export default {
    name: 'AboutMeSection',
    components: {
        SkillsSection
    }
}
</script>

<style>
</style>