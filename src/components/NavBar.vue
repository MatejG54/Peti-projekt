<script setup>
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath; 
}

</script>

<template>
    <nav class="bg-blue-700 border-b border-blue-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
              <!-- <img class="h-10 w-auto" src="images/logo.png" alt="Vue Jobs" /> -->
              <span class="hidden md:block text-white text-2xl font-bold ml-2">
                Leagues
              </span>
            </a>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/"
                  :class="[isActiveLink('/') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']"
                >
                  Home
                </RouterLink>
                <RouterLink
                  to="/leagues"
                  :class="[isActiveLink('/leagues') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']"
                >
                  Leagues
                </RouterLink>
                <RouterLink
                  to="/players"
                  :class="[isActiveLink('/players') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']"
                >
                  Players
                </RouterLink>
                <RouterLink 
                to="/store"
                  :class="[isActiveLink('/store') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white', 'text-white', 'rounded-md', 'px-3', 'py-2']">
                  Store
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>