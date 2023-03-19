<template>
<!--  <div class="container mx-auto">-->
<!--        <div class="">-->
<!--            <nav class="p-2 absolute top-1 right-1 py-2 flex flex-1 mt-4 sm:items-center justify-center content-center sm:relative">-->
<!--                <div class="flex flex-1 justify-end content-center text-gray-700 mr-8 mx-auto items-center">-->
<!--                    <NuxtLink to="/" class="mono text-xs font-bold"><span class="text-cyan-600 ">0.1 </span> Home</NuxtLink>-->
<!--                    <NuxtLink to="/experience" class="mx-4 mono text-xs font-bold"><span class="text-cyan-600 ">0.2 </span> Experience</NuxtLink>-->
<!--&lt;!&ndash;                    <span class="mx-4 mono text-xs font-bold" v-on:click="scrollToElement({behavior: 'smooth'})"><span class="text-cyan-600 ">0.2 </span> Experience</span>&ndash;&gt;-->
<!--                    <NuxtLink to="/about" class="mr-4 mono text-xs font-bold"><span class="text-cyan-600 ">0.3 </span> About</NuxtLink>-->
<!--                    <a target="_top" href="mailto:hey_arpit@outlook.com" class="mono text-xs font-bold"><span class="text-cyan-600 ">0.4 </span> Hire me!</a>-->
<!--                </div>-->
<!--            </nav>-->

            <slot />
<!--        </div>-->
<!--    </div>-->
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&family=Space+Mono:wght@400;700&display=swap');

    .mono {
        font-family: 'Space Mono', monospace;
    }

    ::selection {
        color: white;
        background: #5c6ac4;
    }

</style>