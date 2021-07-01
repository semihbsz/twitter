<template>
  <q-layout view=" lHh Lpr lFf">
    
     <q-drawer
      show-if-above
      bordered
      mini-to-overlay
      :width="500"
      :breakpoint="500"
      >
          <div class="text-center">
            <q-btn
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
                label="Anasayfa"
                size="24px" />
              </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-hash-outline"
                label="Keşfet"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-bell-outline"
                label="Bildirimler"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-email-outline"
                label="Mesajlar"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-bookmark-outline"
                label="Yer İşaretleri"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-list-outline"
                label="Listeler"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn
                class="menu-item"
                flat
                rounded
                color="Black"
                icon="eva-person-outline"
                label="Profil"
                size="24px" />
                </q-item>
                <q-item class="justify-center">
                <q-btn-dropdown
                class="menu-item  q-ml-xl"
                flat
                rounded
                color="Black"
                icon="eva-bookmark-outline"
                label="Flat Rounded"
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
                class="menu-item"
                padding="20px"
                rounded
                color="primary"
                label="Tweetle"
                size="19px"
                style="width:55%;"
                 />
          </q-list>
          </div>
          
          

          
          <div class="text-center">
              <q-btn  flat rounded color="Black" size="17px" icon-right="eva-more-horizontal">
                  <q-item>
                    <q-item-section avatar>
                        <q-avatar>
                          <img src="https://tr.gravatar.com/userimage/52247678/1183cfa3020b5fbde9203a7d4d01f154.jpg?size=200">
                        </q-avatar>
                    </q-item-section>

                    <q-item-section>
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

  
}

</script>
