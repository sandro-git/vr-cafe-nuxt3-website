<script  setup>
import TitleWithSubtitle from '@/components/TitleWithSubtitle.vue';
import WanaDev from '@/components/WanaDev.vue';
import GameUbisoft from '@/components/GameUbisoft.vue';
import ArviVR from '@/components/ArviVR.vue';
import LucydReality from '@/components/LucydReality.vue';
import Footer from '@/components/Footer.vue';
import HeaderApp from '~~/components/HeaderApp.vue';
import AddPartenaires from '~~/components/AddPartenaires.vue';
import AddSynthesys from '~~/components/AddSynthesys.vue';
import AddPrices from '~~/components/AddPrices.vue';
import Title from '../components/Title.vue';
import Services from '../components/Services.vue';


const query = groq`*[_type == "game"]{
  name,
  "imageUrl": image.asset->url,
  editor->{name}
}`;

const query2 = groq`*[_type == "editors"  ]{
  name,
  "image": image.asset->url
}`;

const sanity = useSanity()

const games = await useAsyncData("games" , ()=>sanity.fetch(query) )
const editors =await useAsyncData("editors", () => sanity.fetch(query2))
// filtrer le array de data pour avoir que les jeux arvi

const filtre =  computed(() => data.value.filter(game => game.editor.name === "Arvi"))


</script>

<template>
  <div>
    <pre>{{editors}}</pre>
    <pre>{{games}}</pre>
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
  <GameUbisoft />
  <Title
    title="ARVI VR"
    :exclu="true"
  />
  <ArviVR :data="filtre"/>
  <TitleWithSubtitle
    id="arcade"
    subtitle="WANADEV"
    title="EXPERIENCE ARCADE VR"
  />
  <WanaDev />
  <Title title="SYNTHESYS" />
  <AddSynthesys />
  <TitleWithSubtitle
    id="culture"
    subtitle="LUCID REALITY"
    title="EXPERIENCE CULTURE"
  />
  <LucydReality />
  <Title title="PARTENAIRES" />
  <AddPartenaires />
  <Footer />
</template>

<style scoped></style>
