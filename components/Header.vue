<template>
    <nav class="mt-2">
        <div class="block md:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div class="hidden md:flex justify-center">
            <ul class="inline-flex  flex-1 basis-3/5 justify-evenly">
                <li><nuxt-link class="font-nav md:text-2xl" to="/" src="/images/Logo.svg">Home</nuxt-link></li>
                <li><nuxt-link class="font-nav md:text-2xl" to="/commands">Commands</nuxt-link></li>
                <li><nuxt-link class="font-nav md:text-2xl" to="/blog">Blog</nuxt-link></li>
                <li><a class="font-nav md:text-2xl" href="https://discord.gg/9VJbcpNbyv">Community</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>