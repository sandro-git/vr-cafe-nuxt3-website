<script lang="ts" setup>
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
</script>

<template>
  <div>
    <HeaderApp />
    <img
      src="@/public/vrcafe.webp"
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
  <ArviVR />
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
