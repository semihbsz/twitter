<template>
  <q-layout view=" lHh Lpr lFf">
    
     

      <q-drawer
      v-model="drawer"
      show-if-above
      :width="500"
      :breakpoint="500"
      :mini="miniState"
      bordered
      mini-to-overlay
      >
          <div class="text-center">
            <q-btn
            class="logo"
            size="25px"
            flat
            round
            color="primary"
            icon="eva-twitter" />
          </div>

          <div>
            <q-list padding class="menu-list text-center">
              <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-home-outline"
                :label="$q.screen.gt.md ? 'Anasayfa' : void 0"
                size="24px" />
              </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-hash-outline"
                :label="$q.screen.gt.md ? 'Keşfet' : void 0"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-bell-outline"
                :label="$q.screen.gt.md ? 'Bildirimler' : void 0"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-email-outline"
                :label="$q.screen.gt.md ? 'Mesajlar' : void 0"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-bookmark-outline"
                :label="$q.screen.gt.md ? 'Yer İşaretleri' : void 0"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-list-outline"
                :label="$q.screen.gt.md ? 'Listeler' : void 0"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-person-outline"
                :label="$q.screen.gt.md ? 'Profil' : void 0"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn-dropdown
                class="menu-item  q-ml-xl"
                flat
                rounded
                color="Black"
                icon="eva-more-horizontal"
                :label="$q.screen.gt.md ? 'Daha Fazla' : void 0"
                size="24px">

                <q-list> <!---dropdown items--->

                <q-item clickable v-close-popup>
                  <q-item-section>
                  <q-item-label>Videos</q-item-label>
                 </q-item-section>
                </q-item>
                
                <q-item clickable v-close-popup>
                  <q-item-section>
                  <q-item-label>Videos</q-item-label>
                 </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                  <q-item-label>Videos</q-item-label>
                 </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                  <q-item-label>Videos</q-item-label>
                 </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                  <q-item-label>Videos</q-item-label>
                 </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                  <q-item-label>Videos</q-item-label>
                 </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                  <q-item-label>Videos</q-item-label>
                 </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                  <q-item-label>Videos</q-item-label>
                 </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                  <q-item-label>Videos</q-item-label>
                 </q-item-section>
                </q-item>

                

                </q-list>
                </q-btn-dropdown>
                </q-item>

                <q-btn
                class="menu-item menu-item-tweet"
                padding="20px"
                rounded
                color="primary"
                label="Tweetle"
                size="19px"
                style="width:35%;"
                 />
          </q-list>
          </div>
          
          

          
          <div class="user text-center" >
              <q-btn  flat rounded color="Black" size="17px">
                  <q-item>
                    <q-item-section avatar>
                        <q-avatar>
                          <img src="https://tr.gravatar.com/userimage/52247678/1183cfa3020b5fbde9203a7d4d01f154.jpg?size=200">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section class="user-info">
                        <q-item-label>Semih</q-item-label>
                        <q-item-label caption>@semihb</q-item-label>
                    </q-item-section>
                  </q-item>
          </q-btn>
          </div>
          
      </q-drawer>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: 'MainLayout',

   data: function() {
    return {
      drawer: true,
      switchToMini: 1440
    }
  },
  computed: {
    miniState: function() {
      return this.$q.screen.width < this.switchToMini
      //this.$q.screen.name === "sm"
    }
  }
  
}
</script>
