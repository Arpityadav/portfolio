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
      <nav class="absolute top-1 right-1 py-2 flex flex-1 mt-4 sm:items-center justify-center content-center sm:relative">
        <div class="flex flex-1 justify-end content-center text-gray-700 mr-0 sm:mr-8 mx-auto items-center">
          <span class="mr-0 sm:mr-4 mono text-xs font-bold cursor-pointer" @click="scrollToElementAboutMe"><span class="text-cyan-500 mr-0.5">01 </span>About</span>
          <span class="mx-1 sm:mx-4 mono text-xs font-bold cursor-pointer" @click="scrollToElementExperience" ><span class="text-cyan-500 mr-0.5">02 </span>Experience</span>
          <span class="mx-1 sm:mx-4 mono text-xs font-bold cursor-pointer" @click="scrollToElementWork" ><span class="text-cyan-500 mr-0.5">03 </span>Work</span>
          <span class="mx-1 sm:mx-4 mono text-xs font-bold cursor-pointer" @click="scrollToElementContact" ><span class="text-cyan-500 mr-0.5">04 </span>Contact</span>
          <a href="https://drive.google.com/file/d/1RAkKqUr9rOOZyA63aelVSp07pe_TyFnI/view?usp=sharing" target="_blank" class="mono text-xs font-bold border-2 border-cyan-500 text-cyan-500 px-3 sm:px-6 text-sm py-2 rounded hover:bg-cyan-500 hover:text-white">Resume</a>
        </div>
      </nav>


    <div class="flex items-center justify-center h-screen sm:h-[calc(100vh-50px)]">
        <header class="lg:grid lg:grid-cols-12 lg:gap-4">
            <div class="lg:col-span-2 "></div>
            <div class="flex flex-col space-y-2 lg:space-y-6 lg:col-span-10 mx-8">
                <p class="text-cyan-400 text-lg sm:text-lg tracking-wide">Hi, my name is</p>
                <h1 class="lg:text-7xl text-4xl sm:text-6xl inline text-gray-300 tracking-wider px-2 my-16 font-bold">Arpit Yadav.</h1>
                <div class="flex flex-col space-y-4">
                    <h2 class="text-gray-500 lg:text-7xl sm:text-6xl text-4xl font-bold">I build things on the web.</h2>
                    <p class="lg:w-1/2 sm:text-lg text-base text-gray-500 tracking-normal">I’m a software engineer specializing in
                        building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products</p>
                </div>
            </div>
        </header>
    </div>

      <span ref="aboutMe" class="inline-block lg:my-24"></span>
  <div class=" flex items-center justify-center">
    <section class="md:grid md:grid-cols-12 gap-4">
      <div class="md:col-start-1 lg:col-start-3 md:col-end-8 lg:col-end-8 flex flex-col space-y-6 mx-6">
        <h1 class="text-cyan-500 text-xl mono">01. About</h1>

        <p class="text-gray-300 ">Hey there! My name is Arpit and  I'm a backend developer with a passion for building web applications that solve real-world problems. With over 4 years of experience in the field, I've worked on everything from fintech platforms to social media apps.</p>

        <p class="text-gray-300 text-xl">Education and Certifications:</p>
        <ul class="text-gray-300 text-white">
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-4 h-4 text-cyan-700 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            AZ-900: Microsoft Azure Fundamentals
          </li>
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-4 h-4 text-cyan-700 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            Google Cloud Fundamentals: Core Infrastructure
          </li>
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-4 h-4 text-cyan-700 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            Bachelor's degree in Information Technology from AKTU University (2018-2022)
          </li>
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-4 h-4 text-cyan-700 mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            Build Responsive website using HTML5, CSS3 and Javascript (Udemy)
          </li>
        </ul>

        <p class="text-gray-300 text-xl">Here are a few technologies I’ve been working with recently:</p>
        <div class="grid grid-cols-2">
          <ul class="col-span-1 text-white">
            <li class="flex mr-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Laravel
            </li>
            <li class="flex mr-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              GCP
            </li>
            <li class="flex mr-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              React
            </li>
          </ul>
          <ul class="col-span-1 text-white">
            <li class="flex mr-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              AWS
            </li>
            <li class="flex mr-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Vue
            </li>
            <li class="flex mr-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-cyan-700 mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Tailwind
            </li>
          </ul>
        </div>
        <p class="text-gray-300"> I'm always excited to learn new tools and technologies to make my work more efficient and effective</p>
        <div class="flex">
          <p class="text-gray-300">Find me on: </p>
          <span class="ml-4 space-x-4 text-white">
            <a href="https://www.linkedin.com/in/arpit-yadav-b375a4134/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 cursor-pointer" viewBox="0 0 24 24" ><path fill="#fff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            <a href="https://github.com/arpityadav" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 cursor-pointer" viewBox="0 0 24 24" ><path fill="#fff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg></a>
            <a href="mailto:arpit.yadav1912@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 cursor-pointer" viewBox="0 0 24 24" ><path fill="#fff" d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>
            <a href="https://gitlab.com/Arpit_19" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="inline h-6 cursor-pointer feather feather-gitlab" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path></svg></a>
          </span>
        </div>

<!--        <ul class="list-none">-->
<!--          <li class="list-item">Linkedin</li>-->
<!--          <li>Github</li>-->
<!--          <li>Gitlab</li>-->
<!--          <li>Email</li>-->
<!--        </ul>-->

      </div>
      <div class="hidden md:inline-block justify-center text-center content-center sm:w-auto  md:col-start-8 md:col-end-12 lg:col-start-8 lg:col-end-11 md:self-center">
        <div class="bg-cyan-900">
          <img src="/images/me.jpeg" class="block mix-blend-overlay justify-center text-center mx-auto hover:mix-blend-normal" alt="me">
        </div>
      </div>



    </section>
  </div>

  <div class="grid xl:grid-cols-11 md:gap-0 h-screen place-items-center mt-12 md:mt-0" ref="experience">
    <div class="md:col-start-4 flex flex-col md:col-end-9 mx-12">
      <div class="">
        <h2 class="text-cyan-500 text-xl mono">02. Where i've worked</h2>
      </div>

      <div class="flex space-x-4 mt-4 flex-col sm:flex-row">
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

  <span ref="work" class="mt-24 sm:mt-0"></span>
  <h2 class="text-cyan-500 text-xl mono text-center">03. Somethings i've built</h2>

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
            <h2 class="text-4xl tracking-tighter text-gray-300 hover:text-gray-400 mt-4 inline-block"><a :href="work.link" v-text="work.name" target="_blank"></a></h2>
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
            <h2 class="text-4xl tracking-tighter text-gray-300 hover:text-gray-400 mt-4 inline-block"><a :href="work.link" v-text="work.name"></a></h2>
            <ul class="shadow-2xl rounded p-4 flex flex-col space-y-4 sha">
              <li class="sha text-gray-400 text-sm" v-for="points in work.points" v-text="points"></li>
            </ul>
            <p v-if="work.note !== null" class="text-gray-400 tracking-wide" v-html="'Note: ' + work.note"></p>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center text-gray-300 hover:text-gray-400"><a target="_blank" href="https://github.com/Arpityadav?tab=repositories">View All Projects</a><svg class="h-4 ml-1 inline" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
      </svg></div>
    </div>
  </div>
    <!-- <Timeline /> -->
    </div>
  </div>

  <div class=" flex flex-col items-center justify-center h-screen mx-12 sm:mx-24 lg:grid lg:grid-cols-12" ref="contact">

      <div class=" space-y-6 text-center lg:col-start-4 lg:col-end-10">
        <h4 class="text-cyan-500 text-xl mono">04. What's Next?</h4>
        <h1 class="text-3xl text-gray-100 text-5xl">Get In Touch</h1>
        <p class="text-gray-400 text-lg">I'm always open to hearing about new opportunities and projects, so please feel free to get in touch with me. Or just say Hi!</p>
        <a href="mailto:arpit.yadav1912@gmail.com" class="border-2 inline-block border-cyan-500 text-cyan-500 px-8  text-sm py-4 rounded hover:bg-cyan-500 hover:text-white ">Say Hello</a>

      </div>
  </div>
</template>
