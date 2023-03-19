<script setup>
    import {ref, reactive} from 'vue';
    import {experienceDetails, personalExperience, workingExp} from "assets/js/store";

    let selectedId = ref(1);
    let selectedExperienceType = ref(1);
</script>
<template>
    <div class="grid xl:grid-cols-11 md:gap-0 h-screen place-items-center">
        <div class="md:col-start-4 flex flex-col md:col-end-9 mx-12">
            <div class="">
                <h2 class="text-4xl text-gray-300">Where i've worked</h2>
            </div>

            <div class="flex space-x-4 mt-4 ">
                <ul class="flex flex-col">
                    <li v-for="experience in experienceDetails" v-text="experience.company" class="tracking-wider p-2 hover:bg-white/20 transition cursor-pointer inline text-cyan-400" :class="{'bg-white/10' : selectedId === experience.id }"
                        @click="selectedId = experience.id"></li>
                </ul>
                <template v-for="experience in experienceDetails" :key="id">
                    <div v-if="selectedId === experience.id"><h5 class="text-2xl text-gray-200"><span v-text="experience.role"></span> <a
                        class="text-cyan-400 text-2xl" :href="experience.companyLink" target="_blank"
                        v-text="'@ ' + experience.company"></a></h5>
                        <small class="text-gray-400 text-sm tracking-widest" v-text="experience.duration"></small>

                        <ul class="mt-4">
                            <div class="flex" v-for="experienceList in experience.points">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-cyan-500 mr-1 mt-1   shrink-0">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <li class="text-gray-400 tracking-wide mb-2"
                                    v-text="experienceList"></li>
                            </div>
                        </ul>
                    </div>
                </template>
            </div>
        </div>
    </div>

    <h2 class="text-4xl text-gray-300 text-center mt-8">Somethings i've built</h2>

    <ul class="flex text-gray-400 mt-4 text-lg justify-center">
        <li><a class="text-cyan-600 m-1 px-2 py-1 text-center hover:text-cyan-800 cursor-pointer" :class="{'bg-white/10' : selectedExperienceType === 1 }" @click="selectedExperienceType = 1">Client Work</a></li>
        <li><a class="text-cyan-600 m-1 px-2 py-1 text-center hover:text-cyan-800 cursor-pointer" :class="{'bg-white/10' : selectedExperienceType === 2 }" @click="selectedExperienceType = 2">Personal Project</a></li>
    </ul>
    <div class="grid grid-cols-12 gap-4" v-show="selectedExperienceType === 1">
        <div class="col-start-2 col-end-12">
            <div class="flex  mt-32 " v-for="work in workingExp" :key="work.id">
                <div class="flex flex-col lg:flex-row space-x-4">
                    <div class="bg-cyan-900 flex flex-col align-center justify-center content-center lg:w-3/5">
                        <img :src="work.img_url" :alt="work.name"
                             class="mix-blend-overlay hover:mix-blend-normal max-w-4xl">
                    </div>
                    <div class="flex flex-col self-center space-y-4 w-full">
                        <h2 class="text-4xl tracking-wider text-gray-200"><a :href="work.link" v-text="work.name"></a></h2>
                        <ul class="shadow-2xl rounded p-4 flex flex-col space-y-4 sha">
                            <li class="sha text-white" v-for="points in work.points" v-text="points"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-12 gap-4" v-show="selectedExperienceType === 2">
        <div class="col-start-2 col-end-12">
            <div class="flex  mt-32" v-for="work in personalExperience" :key="work.id">
              <div class="flex flex-col lg:flex-row space-x-4">

                <div class="bg-cyan-900 flex flex-col align-center justify-center content-center lg:w-3/5">
                  <img :src="work.img_url" :alt="work.name"
                       class="mix-blend-overlay hover:mix-blend-normal max-w-4xl">
                </div>
                <div class="flex flex-col self-center space-y-4 w-full">
                  <h2 class="text-4xl tracking-wider text-gray-200"><a :href="work.link" v-text="work.name"></a></h2>
                  <ul class="shadow-2xl rounded p-4 flex flex-col space-y-4 sha">
                    <li class="sha text-white" v-for="points in work.points" v-text="points"></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>


<style>
.sha{
    background-color: #112240;
}
</style>