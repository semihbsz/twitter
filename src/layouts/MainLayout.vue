<template>
  <q-layout class="container" view=" lHh Lpr lFf">
    
     <q-drawer
        show-if-above
        bordered
        mini-to-overlay
        :width="500"
        :breakpoint="500"
      >

        <q-btn flat round color="primary" icon="card_giftcard" />
          <q-list padding class="menu-list">

            <q-item>
                <q-btn
                class="menu-items"
                flat
                rounded
                color="Black"
                icon="eva-home-outline"
                label="Flat Rounded"
                size="24px" />
            </q-item>
           <q-item>
                <q-btn
                class="menu-items"
                flat
                rounded
                color="Black"
                icon="eva-hash-outline"
                label="Flat Rounded"
                size="24px" />
            </q-item>
            <q-item>
                <q-btn
                class="menu-items"
                flat
                rounded
                color="Black"
                icon="eva-bell-outline"
                label="Flat Rounded"
                size="24px" />
            </q-item>
            <q-item>
                <q-btn
                class="menu-items"
                flat
                rounded
                color="Black"
                icon="eva-email-outline"
                label="Flat Rounded"
                size="24px" />
            </q-item>
            <q-item>
                <q-btn
                class="menu-items"
                flat
                rounded
                color="Black"
                icon="eva-bookmark-outline"
                label="Flat Rounded"
                size="24px" />
            </q-item>
            <q-item>
                <q-btn
                class="menu-items"
                flat
                rounded
                color="Black"
                icon="eva-list-outline"
                label="Flat Rounded"
                size="24px" />
            </q-item>
            <q-item>
                <q-btn
                class="menu-items"
                flat
                rounded
                color="Black"
                icon="eva-person-outline"
                label="Flat Rounded"
                size="24px" />
            </q-item>
            <q-item>
                <q-btn-dropdown
                class="menu-items"
                flat
                rounded
                color="Black"
                icon="eva-bookmark-outline"
                label="Flat Rounded"
                size="24px">

                <q-list>

                <q-item clickable v-close-popup>
                  <q-item-section>
                  <q-item-label>Videos</q-item-label>
                 </q-item-section>
                </q-item>

                </q-list>

                </q-btn-dropdown>
            </q-item>
          </q-list>
          
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
