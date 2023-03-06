<script lang="ts" setup>
const page = useState('page')
const toolbar = useToolbar()

const toggleObjectFit = () => {
  console.log(toolbar.value)
  if (toolbar.value.objectFit == 'cover')
    toolbar.value.objectFit = 'contain'
  else
    toolbar.value.objectFit = 'cover'
}

const favoriteSelected = () => {
  if (!selectedAssets.value.length) return
  if (selectedAssets.value.filter(asset => !asset.favorite).length) {
    selectedAssets.value.map(asset => asset.favorite = true);
  } else {
    selectedAssets.value.map(asset => asset.favorite = false);
  }
}

const assets = useState('assets')
const selectedAssets = computed(() => {
  return assets.value.filter(asset => asset.selected);
});

</script>

<template>
  <nav id="tabs">
    <li>
      <router-link to="/" :class="{ active: $route.path === '/' }">Startseite</router-link>
    </li>
    <li>
      <span @click="page = '/moodboard'" :class="{ active: page == '/moodboard' }">Moodboard</span>
    </li>
    <li>
      <span @click="page = '/gallery'" :class="{ active: page == '/gallery' }">Gallery</span>
    </li>
    <li>
      <router-link to="/preview" :class="{ active: $route.path === '/preview' }">Preview</router-link>
    </li>
  </nav>

  <Transition>
    <nav id="toolbar" v-if="page == '/gallery'">
      <li @click="toggleObjectFit()">
        <Transition>
        <svg v-if="toolbar.objectFit == 'contain'" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
             viewBox="0 0 20 20">
          <path fill="currentColor"
                d="M3 5.25A2.25 2.25 0 0 1 5.25 3h1.865a.75.75 0 1 1 0 1.5H5.25a.75.75 0 0 0-.75.75v1.865a.75.75 0 1 1-1.5 0V5.25Zm9.135-1.5a.75.75 0 0 1 .75-.75h1.865A2.25 2.25 0 0 1 17 5.25v1.865a.75.75 0 0 1-1.5 0V5.25a.75.75 0 0 0-.75-.75h-1.865a.75.75 0 0 1-.75-.75ZM3.75 12.135a.75.75 0 0 1 .75.75v1.865c0 .414.336.75.75.75h1.865a.75.75 0 0 1 0 1.5H5.25A2.25 2.25 0 0 1 3 14.75v-1.865a.75.75 0 0 1 .75-.75Zm12.5 0a.75.75 0 0 1 .75.75v1.865A2.25 2.25 0 0 1 14.75 17h-1.865a.75.75 0 0 1 0-1.5h1.865a.75.75 0 0 0 .75-.75v-1.865a.75.75 0 0 1 .75-.75Z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
          <path fill="currentColor"
                d="M15 5.5a.5.5 0 0 1-.5-.5V2.75a.75.75 0 0 0-1.5 0V5a2 2 0 0 0 2 2h2.25a.75.75 0 0 0 0-1.5H15ZM5.5 15a.5.5 0 0 0-.5-.5H2.75a.75.75 0 0 1 0-1.5H5a2 2 0 0 1 2 2v2.25a.75.75 0 0 1-1.5 0V15Zm9 0a.5.5 0 0 1 .5-.5h2.25a.75.75 0 0 0 0-1.5H15a2 2 0 0 0-2 2v2.25a.75.75 0 0 0 1.5 0V15Zm-9-10a.5.5 0 0 1-.5.5H2.75a.75.75 0 0 0 0 1.5H5a2 2 0 0 0 2-2V2.75a.75.75 0 0 0-1.5 0V5Z"/>
        </svg>
        </Transition>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M5 21q-.825 0-1.413-.588T3 19V7h14v14H5Zm14 0v-2h2q0 .825-.588 1.413T19 21ZM5 18h10l-3.4-4.5L9 17l-1.6-2.15L5 18Zm14-1v-2h2v2h-2Zm0-4v-2h2v2h-2Zm0-4V7h2v2h-2ZM3 5q0-.825.588-1.413T5 3v2H3Zm4 0V3h2v2H7Zm4 0V3h2v2h-2Zm4 0V3h2v2h-2Zm4 0V3q.825 0 1.413.588T21 5h-2Z"/>
        </svg>
        <input type="range" min="3" max="8" v-model="toolbar.columns"/>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M5 21q-.825 0-1.413-.588T3 19v-8h10v10H5Zm10 0v-2h2v2h-2Zm4 0v-2h2q0 .825-.588 1.413T19 21ZM4 19h8l-2.6-3.5L7.5 18l-1.4-1.85L4 19Zm15-2v-2h2v2h-2Zm0-4v-2h2v2h-2ZM3 9V7h2v2H3Zm16 0V7h2v2h-2ZM3 5q0-.825.588-1.413T5 3v2H3Zm4 0V3h2v2H7Zm4 0V3h2v2h-2Zm4 0V3h2v2h-2Zm4 0V3q.825 0 1.413.588T21 5h-2Z"/>
        </svg>
      </li>
      <li @click="favoriteSelected()">
        <Transition>
        <svg v-if="selectedAssets.length && selectedAssets.filter(asset=>!asset.favorite).length==0"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="currentColor" class="w-6 h-6">
          <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
        </svg>
        </Transition>
      </li>
    </nav>
  </Transition>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  background-color: #222;
  color: #fff;
  border-top: 8px solid #222;
}

li {
  list-style: none;
}

a {
  display: block;
  padding: .6rem 1rem;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.2s;
  border-radius: 10px 10px 0 0;
  padding-bottom: 5px;
}

a:hover {
  background-color: #333;
}

a.active {
  background-color: #333;
}
</style>
