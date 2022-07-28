<script lang="ts" setup>
import MenuIcon from './MenuIcon.vue';

</script>

<template>
  <footer
    id="footer"
    class="w-full flex"
  >
    <div
      class="
        bg-gray-900
        z-30
        lg:h-40
        w-full
        py-6
        grid grid-cols-2 grid-rows-2
        lg:grid lg:grid-cols-3 lg:grid-rows-1
        items-center
        justify-between
        border-b border-indigo-500
        lg:border-none
      "
    >
      <!-- logo -->
      <a
        href="#"
        class="flex justify-center w-2/3 mx-auto lg:h-full"
      >
        <span class="sr-only">Workflow</span>
        <img
          src="@/public/VRCAFE_LOGO_OK.webp"
          alt="logo"
          class="h-full"
          sizes="xs:100vw"
        >
      </a>
      <!-- reseau sociaux -->
      <MenuIcon class="lg:col-start-3 justify-center" />
      <!-- bouton réserver -->
      <!-- <div class="flex justify-center items-center">
          <div class="ml-10 space-x-4 flex justify-center">
            <a
              href="#"
              class="
                inline-block
                bg-white
                py-2
                px-4
                border border-transparent
                rounded-md
                text-base
                font-medium
                text-indigo-600
                hover:bg-indigo-50
              "
              >Réserver</a
            >
          </div>
        </div>-->
      <!-- adresse etc... -->
      <div
        class="
          ml-2
          flex flex-col
          items-center
          col-span-2
          lg:col-span-1 lg:col-start-1 lg:row-start-1
        "
      >
        <div class="mt-4">
          <a
            key="Solutions"
            href="https://g.page/vrcafe66?share"
            class="
              text-base text-center
              font-medium
              text-white
              hover:text-indigo-50
              flex
              items-center
            "
            target="_blank"
            rel="noopener"
          >
            <img
              src="../assets/location-arrow-solid.svg"
              alt="location icon"
              class="h-6 w-6 mr-4"
              width="24px"
              height="24px"
            >
            2 rue du pilou 66140
            <br>canet en rousillon
          </a>
        </div>
        <div class="mt-4">
          <a
            key="Pricing"
            href="tel:+33678218135"
            class="
              text-base
              font-medium
              text-white
              hover:text-indigo-50
              pl-4
              flex
              items-center
            "
            target="_blank"
            rel="noopener"
          >
            <img
              src="@/assets/phone-solid.svg"
              class="h-6 w-6 mr-4"
              alt="phone icon"
              width="24px"
              height="24px"
            >
            06 71 41 06 77
          </a>
        </div>
        <div class="mt-4">
          <a
            key="Docs"
            href="mailto:contact@vr-cafe.fr"
            class="
              text-base
              font-medium
              text-white
              hover:text-indigo-50
              pl-4
              flex
              items-center
            "
            target="_blank"
            rel="noopener"
          >
            <img
              src="@/assets/envelope-regular.svg"
              alt="envelope icon"
              class="h-6 w-6 mr-4"
              width="24px"
              height="24px"
            >
            contact@vr-cafe.fr
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
