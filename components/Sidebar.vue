<template>
    <div class="fixed inset-0 flex z-40">
        <!-- Sidebar -->
        <div class="absolute flex top-0 h-screen z-20" :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']">
        
            <!--Drawer -->
            <button @click.prevent="toggle()" class="w-12 h-48 p-1 my-auto rounded text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300">
                <span class="block transform origin-center font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                    </svg>

                </span>
            </button>

            <!-- Sidebar Content -->
            <div
                ref="content"
                class="transition-all duration-700 bg-yellow-200 overflow-hidden flex items-center justify-center"
                :class="[open ? 'max-w-lg' : 'max-w-0']"
                >
                    <div class="flex flex-col font-bold space-y-6 text-center text-xl w-48">
                        <NuxtLink to="/" class="" @click="toggle()">Home</NuxtLink>
                        <NuxtLink to="/projects" @click="toggle()">Projects</NuxtLink>
                        <NuxtLink to="/about" @click="toggle()">About</NuxtLink>
                        <a target="_top" @click="toggle()" href="mailto:hey_arpit@outlook.com">Hire me!</a>
                    </div>

                <slot></slot>
            </div>
        </div>

        <transition name="fade">
            <!-- Dimmer -->
            <div v-if="dimmer && open" @click="toggle()" class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10" />
        </transition>
    </div>
</template>

<script>
export default {
	data() {
		return {
			open: false,
			dimmer: true,
			right: false
		};
	},
	methods: {
		toggle() {
			this.open = !this.open;
		}
	}
};
</script>

<style>
html {
	background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
