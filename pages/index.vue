<script setup>

import {ref, reactive} from 'vue';
import {experienceDetails, personalExperience, workingExp} from "assets/js/store";

let selectedId = ref(1);
let selectedExperienceType = ref(1);

const aboutMe = ref(null)
const experience = ref(null)
const work = ref(null)
const contact = ref(null)

const scrollToElementAboutMe = (options) => {
  aboutMe.value.scrollIntoView({ behavior: 'smooth' })
};
const scrollToElementExperience = (options) => {
  experience.value.scrollIntoView({ behavior: 'smooth' })
};
const scrollToElementWork = (options) => {
  work.value.scrollIntoView({ behavior: 'smooth' })
};
const scrollToElementContact = (options) => {
  contact.value.scrollIntoView({ behavior: 'smooth' })
};
</script>

<template>
  <div class="container mx-auto">
    <div class="">
      <nav class="p-2 absolute top-1 right-1 py-2 flex flex-1 mt-4 sm:items-center justify-center content-center sm:relative">
        <div class="flex flex-1 justify-end content-center text-gray-700 mr-8 mx-auto items-center">
          <span class="mr-4 mono text-xs font-bold cursor-pointer" @click="scrollToElementAboutMe"><span class="text-cyan-500 ">01 </span>&nbsp;About</span>
          <span class="mx-4 mono text-xs font-bold cursor-pointer" @click="scrollToElementExperience" ><span class="text-cyan-500 ">02 </span>&nbsp;Experience</span>
          <span class="mx-4 mono text-xs font-bold cursor-pointer" @click="scrollToElementWork" ><span class="text-cyan-500 ">03 </span>&nbsp;Work</span>
          <span class="mx-4 mono text-xs font-bold cursor-pointer" @click="scrollToElementContact" ><span class="text-cyan-500 ">04 </span>&nbsp;Contact</span>
          <a target="_top" href="#" class="mono text-xs font-bold border-2 border-cyan-500 text-cyan-500 px-6 text-sm py-2 rounded hover:bg-cyan-500 hover:text-white">Resume</a>
        </div>
      </nav>


    <div class="flex items-center justify-center h-[calc(100vh-50px)]">
        <header class="lg:grid lg:grid-cols-12 lg:gap-4">
            <div class="lg:col-span-2 "></div>
            <div class="flex flex-col space-y-2 lg:space-y-6 lg:col-span-10 mx-8">
                <p class="text-cyan-400 text-lg tracking-wide">Hi, my name is</p>
                <h1 class="lg:text-7xl text-6xl inline text-gray-300 tracking-wider px-2 my-16 font-bold">Arpit Yadav.</h1>
                <div class="flex flex-col space-y-4">
                    <h2 class="text-gray-500 lg:text-7xl text-6xl font-bold">I build things on the web.</h2>
                    <p class="lg:w-1/2 text-lg text-gray-500 tracking-normal">I’m a software engineer specializing in
                        building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on
                        building accessible, human-centered products</p>
                </div>
            </div>
        </header>
    </div>

  <div class=" flex items-center justify-center h-screen" ref="aboutMe">
    <section class="grid grid-cols-12 gap-4">

      <div class="sm:col-start-3 sm:col-end-8 flex flex-col space-y-6">
        <h1 class="text-cyan-500 text-xl mono">01. About</h1>

        <p class="text-gray-300 ">Hey there! My name is Arpit and  I'm a backend developer with a passion for building web applications that solve real-world problems. With over 5 years of experience in the field, I've worked on everything from fintech platforms to social media apps.</p>

        <p class="text-gray-300 text-xl">Education and Certifications:</p>
        <ul class="text-gray-300 text-white">
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-5 h-5 text-cyan-700 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            Bachelor's degree in Computer Science from XYZ University
          </li>
          <li class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-5 h-5 text-cyan-700 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            AWS Certified Developer - Associate
          </li>
        </ul>

        <p class="text-gray-300 text-xl">Here are a few technologies I’ve been working with recently:</p>
        <div class="grid grid-cols-2">
          <ul class="col-span-1 text-white">
            <li class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Laravel
            </li>
            <li class="flex ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Vue
            </li>
            <li class="flex mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Solidity
            </li>
          </ul>
          <ul class="col-span-1 text-white">
            <li class="flex mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              React
            </li>
            <li class="flex mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Inertia
            </li>
            <li class="flex mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Livewire
            </li>
          </ul>
        </div>
        <p class="text-gray-300"> I'm always excited to learn new tools and technologies to make my work more efficient and effective</p>

      </div>
      <div class="sm:col-start-8 sm:col-end-11 self-center">
        <div class="bg-cyan-900">
          <img src="../images/me.jpeg" class="mix-blend-overlay hover:mix-blend-normal" alt="me">
        </div>
      </div>


    </section>
  </div>

  <div class="grid xl:grid-cols-11 md:gap-0 h-screen place-items-center" ref="experience">
    <div class="md:col-start-4 flex flex-col md:col-end-9 mx-12">
      <div class="">
        <h2 class="text-cyan-500 text-xl mono">02. Where i've worked</h2>
      </div>

      <div class="flex space-x-4 mt-4 ">
        <ul class="flex flex-col">
          <li v-for="experience in experienceDetails" v-text="experience.company" class="tracking-wider p-2 hover:bg-white/20 transition cursor-pointer inline text-gray-300 text-center rounded" :class="{'bg-white/10' : selectedId === experience.id }"
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

  <span ref="work"></span>
  <h2 class="text-cyan-500 text-xl mono text-center mt-12">03. Somethings i've built</h2>

  <ul class="flex text-gray-400 mt-4 mb-2 text-lg justify-center">
    <li><a class="text-gray-300 m-1 px-2 py-2 text-base rounded text-center hover:text-gray-400 cursor-pointer" :class="{'bg-white/10' : selectedExperienceType === 1 }" @click="selectedExperienceType = 1">Client Work</a></li>
    <li><a class="text-gray-300 m-1 px-2 py-2 text-base rounded text-center hover:text-gray-400 cursor-pointer" :class="{'bg-white/10' : selectedExperienceType === 2 }" @click="selectedExperienceType = 2">Personal Project</a></li>
  </ul>
  <div class="grid grid-cols-12 gap-4" v-show="selectedExperienceType === 1">
    <div class="col-start-2 col-end-12">
      <div class="flex  mt-32 " v-for="work in workingExp" :key="work.id">
        <div class="flex flex-col lg:flex-row space-x-4">
          <div class="bg-cyan-900 flex flex-col align-center justify-center content-center lg:w-3/5">
            <img :src="work.img_url" :alt="work.name"
                 class="mix-blend-overlay hover:mix-blend-normal lg:max-w-3xl">
          </div>
          <div class="flex flex-col self-center space-y-4 w-full">
            <h2 class="text-4xl tracking-tighter text-gray-200"><a :href="work.link" v-text="work.name"></a></h2>
            <ul class="shadow-2xl rounded p-4 flex flex-col space-y-4 sha">
              <li class="sha text-gray-400 text-sm" v-for="points in work.points" v-text="points"></li>
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
                 class="mix-blend-overlay hover:mix-blend-normal lg:max-w-3xl">
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
    <!-- <Timeline /> -->
    </div>
  </div>

  <div class=" flex items-center justify-center h-screen mx-12 sm:mx-24 lg:grid lg:grid-cols-12" ref="contact">

      <div class=" space-y-6 text-center lg:col-start-4 lg:col-end-10">
        <h4 class="text-cyan-500 text-xl mono">04. What's Next?</h4>
        <h1 class="text-3xl text-white text-5xl">Get In Touch</h1>
        <p class="text-gray-400 text-lg">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <button class="border-2 border-cyan-500 text-cyan-500 px-8 text-sm py-4 rounded hover:bg-cyan-500 hover:text-white ">Say Hello</button>
      </div>

  </div>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Space+Mono:wght@400;700&display=swap');
* {
  font-family: 'Fira Sans', sans-serif;
}
.mono {
  font-family: 'Space Mono', monospace;
}

::selection {
  color: white;
  background: #5c6ac4;
}

.sha{
  background-color: #112240;
}
</style>