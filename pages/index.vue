<script  setup>



const query = groq`*[_type == "game"]{
  name,
  text,
  "imageUrl": image{asset},
  editor->{name},
  slug{current}
}`;

const query2 = groq`*[_type == "editors"  ]{
  name,
  "image": image.asset->url
}`;

const sanity = useSanity()

const games = await useAsyncData("games" , ()=>sanity.fetch(query) )
const editors =await useAsyncData("editors", () => sanity.fetch(query2))


// filtre pour le array de data pour avoir que les jeux Ubisoft
const ubisoft =  computed(
  () => games.data.value.filter(game => game.editor.name === "Ubisoft"),
)
// filtre pour le array de data pour avoir que les jeux arvi
const arvi =  computed(
  () => games.data.value.filter(game => game.editor.name === "Arvi"),
)
// filtre pour le array de data pour avoir que les jeux wanadev
const wanadev =  computed(
  () => games.data.value.filter(game => game.editor.name === "Wanadev"),
)



</script>

<template>
  <div>
    <!-- <pre>{{editors}}</pre> -->
    <!-- <pre>{{games.data.value[0]}}</pre> -->
    <HeaderApp />
    <img
      src="@/vrcafe.webp"
      class="text-center"
      alt="vr-headset"
      sizes="xs:100vw lg:100vw xl:100vw"
    >
  </div>
  <AddPrices />
  <Services />
  <TitleWithSubtitle
    id="escape"
    subtitle="UBISOFT"
    title="EXPERIENCE ESCAPE GAME VR"
  />
  <GameUbisoft :data="ubisoft"/>
  <Title
    title="ARVI VR"
    :exclu="true"
  />
  <ArviVR :data="arvi"/>
  <TitleWithSubtitle
    id="arcade"
    subtitle="WANADEV"
    title="EXPERIENCE ARCADE VR"
  />
  <WanaDev :data="wanadev"/>
  <Title title="SYNTHESYS" />
  <AddSynthesys />
  <TitleWithSubtitle
    id="culture"
    :subtitle="'LUCID REALITY'"
    :title="'EXPERIENCE CULTURE'"
  />
  <LucydReality />
  <Title title="PARTENAIRES" />
  <AddPartenaires :data="editors.data.value"/>
  <Footer />
</template>

<style scoped></style>
