<template>
  <q-page>

<div class="container">
    <div class="row">
      <div class="col-7">
        <div class="bg-white text-dark">
      <q-toolbar>
        <q-toolbar-title class="font-bold" style="height:75px;">Anasayfa</q-toolbar-title>

        <q-btn flat round dense color="primary" icon="eva-trending-up" />
      </q-toolbar>
      <q-toolbar >
            <q-input class="full-width full-height" autogrow type="textarea" label="Bir şeyler paylaş.." style="font-size:2rem;">
              <template v-slot:before>
                <q-avatar size="250%">
                  <img  src="https://tr.gravatar.com/userimage/52247678/1183cfa3020b5fbde9203a7d4d01f154.jpg?size=200">
                </q-avatar>
              </template> 
              
          </q-input>
      </q-toolbar>
        <div class="post-icons">
          <q-toolbar>
            <q-btn flat round size="1.3rem" color="primary" icon="eva-image-outline" />
            <q-btn flat round size="1.3rem" color="primary" icon="eva-film-outline" />
            <q-btn flat round size="1.3rem" color="primary" icon="eva-bar-chart-outline" />
            <q-btn flat round size="1.3rem" color="primary" icon="eva-calendar-outline" />
            <q-space />
            <q-btn flat rounded color="primary" size="1rem" label="Tweetle"/>

          </q-toolbar>
        </div>
        </div>

         <q-card
          v-for="post in posts"
          :key="post.id"
          class="post-card"
          flat
          bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar size="60px">
            <img src="https://tr.gravatar.com/userimage/52247678/1183cfa3020b5fbde9203a7d4d01f154.jpg?size=200">
          </q-avatar>
        </q-item-section> 

        <q-item-section>
          <div>
            <q-badge color="grey" rounded class="q-mr-sm" />Konu
          </div>
          <q-item-label>
            <span class="text-bold text-subtitle1">Semih &nbsp;</span>
            <span caption>@semihb</span>
          </q-item-label>
        </q-item-section>
        <q-space/>
        <q-btn color="grey-7" round flat icon="eva-more-horizontal-outline">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Remove Card</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Send Feedback</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Share</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
      </q-item>

        <q-card-section class="q-ml-xl" style="padding-top:0px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </q-card-section>
    </q-card>
      </div>
      <div class="col-md-4">
        <div class="q-pa-sm">
          <q-input class="search-button" color="#EFF3F4" rounded outlined placeholder="Ara">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

      <q-card flat rounded class="bg-grey-1 q-ma-md">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="font-bold" style="line-height:110%">İlgilini Çekebilecek Gündemler</div>
          </div>

          <div class="col-auto">
            <q-btn color="primary" round flat icon="eva-settings-outline">
              
            </q-btn>
          </div>
        </div>
      </q-card-section>



      <q-card-section class="q-pa-sm">
        <q-btn flat class="full-width full-height">
          <q-item-section style="text-align:left;" class="q-pa-sm">
          <q-item-label caption style="font-size:1rem;">Türkiye konumunda gündemde</q-item-label>
          <q-item-label style="font-size:1rem; padding-top:2px;">#etiket</q-item-label>
          <q-item-label caption style="font-size:1rem; padding-top:5px;">1.059 tweet</q-item-label>
        </q-item-section>
        <q-space />

        <q-btn color="grey-7" round flat icon="eva-more-horizontal-outline">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">İlgimi Çekmiyor</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">Bu gündem başlığı zararlı veya spam içeriyor</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
        </q-btn>
        </q-btn>
        <q-btn flat class="full-width full-height">
          <q-item-section style="text-align:left;" class="q-pa-sm">
          <q-item-label caption style="font-size:1rem;">Türkiye konumunda gündemde</q-item-label>
          <q-item-label style="font-size:1rem; padding-top:2px;">#etiket</q-item-label>
          <q-item-label caption style="font-size:1rem; padding-top:5px;">1.059 tweet</q-item-label>
        </q-item-section>
        <q-space />

        <q-btn color="grey-7" round flat icon="eva-more-horizontal-outline">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">İlgimi Çekmiyor</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">Bu gündem başlığı zararlı veya spam içeriyor</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
        </q-btn>
        </q-btn>
        <q-btn flat class="full-width full-height">
          <q-item-section style="text-align:left;" class="q-pa-sm">
          <q-item-label caption style="font-size:1rem;">Türkiye konumunda gündemde</q-item-label>
          <q-item-label style="font-size:1rem; padding-top:2px;">#etiket</q-item-label>
          <q-item-label caption style="font-size:1rem; padding-top:5px;">1.059 tweet</q-item-label>
        </q-item-section>
        <q-space />

        <q-btn color="grey-7" round flat icon="eva-more-horizontal-outline">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">İlgimi Çekmiyor</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">Bu gündem başlığı zararlı veya spam içeriyor</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
        </q-btn>
        </q-btn>
        <q-btn flat class="full-width full-height">
          <q-item-section style="text-align:left;" class="q-pa-sm">
          <q-item-label caption style="font-size:1rem;">Türkiye konumunda gündemde</q-item-label>
          <q-item-label style="font-size:1rem; padding-top:2px;">#etiket</q-item-label>
          <q-item-label caption style="font-size:1rem; padding-top:5px;">1.059 tweet</q-item-label>
        </q-item-section>
        <q-space />

        <q-btn color="grey-7" round flat icon="eva-more-horizontal-outline">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">İlgimi Çekmiyor</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">Bu gündem başlığı zararlı veya spam içeriyor</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
        </q-btn>
        </q-btn>
        <q-btn flat class="full-width full-height">
          <q-item-section style="text-align:left;" class="q-pa-sm">
          <q-item-label caption style="font-size:1rem;">Türkiye konumunda gündemde</q-item-label>
          <q-item-label style="font-size:1rem; padding-top:2px;">#etiket</q-item-label>
          <q-item-label caption style="font-size:1rem; padding-top:5px;">1.059 tweet</q-item-label>
        </q-item-section>
        <q-space />

        <q-btn color="grey-7" round flat icon="eva-more-horizontal-outline">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">İlgimi Çekmiyor</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">Bu gündem başlığı zararlı veya spam içeriyor</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
        </q-btn>
        </q-btn>
        <q-btn flat class="full-width full-height">
          <q-item-section style="text-align:left;" class="q-pa-sm">
          <q-item-label caption style="font-size:1rem;">Türkiye konumunda gündemde</q-item-label>
          <q-item-label style="font-size:1rem; padding-top:2px;">#etiket</q-item-label>
          <q-item-label caption style="font-size:1rem; padding-top:5px;">1.059 tweet</q-item-label>
        </q-item-section>
        <q-space />

        <q-btn color="grey-7" round flat icon="eva-more-horizontal-outline">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">İlgimi Çekmiyor</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section style="font-size:1.2rem">Bu gündem başlığı zararlı veya spam içeriyor</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
        </q-btn>
        </q-btn>
        <q-btn color="primary" flat class="full-width">
          Daha Fazla Göster
        </q-btn>
      </q-card-section>
      </q-card>


      <q-card flat round class="bg-grey-1 q-ma-md">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="font-bold" style="line-height:110%">Kimi takip etmeli</div>
          </div>
        </div>
      </q-card-section>

      <q-btn flat class="full-width full-height">
           <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section style="text-align:left;font-size:1rem;;">
          <q-item-label>user</q-item-label>
          <q-item-label caption> @username </q-item-label>
        </q-item-section>
      </q-item>
        <q-space />
        <q-btn outline rounded size="110%" color="primary" label="Takip Et" />
      </q-btn>
      <q-btn flat class="full-width full-height">
           <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section style="text-align:left;font-size:1rem;;">
          <q-item-label>user</q-item-label>
          <q-item-label caption> @username </q-item-label>
        </q-item-section>
      </q-item>
        <q-space />
        <q-btn outline rounded size="110%" color="primary" label="Takip Et" />
      </q-btn>
      <q-btn color="primary" flat class="full-width">
          Daha Fazla Göster
        </q-btn>


      </q-card>

      <q-card flat round class="bg-grey-1 q-ma-md">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="font-bold" style="line-height:110%">Takip edilebilecek konular</div>
          </div>
        </div>
      </q-card-section>

      <q-btn flat class="full-width full-height">
           <q-item>

        <q-item-section style="text-align:left;font-size:1rem;;">
          <q-item-label>Basketbol</q-item-label>
          <q-item-label caption> Spor </q-item-label>
        </q-item-section>
      </q-item>
        <q-space />
        <q-btn outline rounded size="110%" color="primary" icon="eva-plus" />
      </q-btn>
      <q-btn flat class="full-width full-height">
           <q-item>

        <q-item-section style="text-align:left;font-size:1rem;;">
          <q-item-label>Futbol</q-item-label>
          <q-item-label caption>Spor</q-item-label>
        </q-item-section>
        
      </q-item>
        <q-space />
        <q-btn outline rounded size="110%" color="primary" icon="eva-plus" />
      </q-btn>
      <q-btn color="primary" flat class="full-width">
          Daha Fazla Göster
        </q-btn>


      </q-card>
      <div class="text-center text-grey">
        Hizmet Şartları
        Gizlilik Politikası
        Çerez Politikası<br>
        Reklam bilgisi
        Daha fazla
        © 2021 Twitter, Inc.
      </div>
      </div>
    </div>
</div>
  </q-page>
</template>




<script>

export default{
  name: 'Anasayfa',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Mountain',
          date: 1624804870755,
          location: 'Istanbul, Turkey',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id: 2,
          caption: "Mountain",
          date: 1624804870755,
          location: 'Istanbul, Turkey',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id: 3,
          caption: "Mountain",
          date: 1624804870755,
          location: 'Istanbul, Turkey',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id: 4,
          caption: 'Mountain',
          date: 1624804870755,
          location: 'Istanbul, Turkey',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id: 5,
          caption: 'Mountain',
          date: 1624804870755,
          location: 'Istanbul, Turkey',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id: 6,
          caption: 'Mountain',
          date: 1624804870755,
          location: 'Istanbul, Turkey',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id: 7,
          caption: 'Mountain',
          date: 1624804870755,
          location: 'Istanbul, Turkey',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id: 8,
          caption: 'Mountain',
          date: 1624804870755,
          location: 'Istanbul, Turkey',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id: 9,
          caption: 'Mountain',
          date: 1624804870755,
          location: 'Istanbul, Turkey',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
        {
          id: 10,
          caption: 'Mountain',
          date: 1624804870755,
          location: 'Istanbul, Turkey',
          imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
        },
      ]
    }
  }
}
</script>
