<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      show-if-above
      side="left"
      bordered
      width="500"
    >
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',


}

</script>
