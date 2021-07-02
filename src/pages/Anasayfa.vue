<template>
  <q-page class="container">

<div >
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
          <q-avatar>
            <img src="https://tr.gravatar.com/userimage/52247678/1183cfa3020b5fbde9203a7d4d01f154.jpg?size=200">
          </q-avatar>
        </q-item-section> 

        <q-item-section>
          <div>
            <q-badge color="grey" rounded class="q-mr-sm" />Konu
          </div>
          <q-item-label>
            <span class="text-bold">Semih &nbsp;</span>
            <span caption>@semihb</span>
          </q-item-label>
        </q-item-section>
        <q-space/>
        <q-btn dense flat color="grey-7" icon="eva-more-horizontal-outline"/>
      </q-item>

        <q-card-section class="q-ml-xl" style="padding-top:0px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </q-card-section>
    </q-card>
      </div>
      <div class="col-3">
        <div class="q-pa-sm">

          <q-input class="search-button" color="#EFF3F4" rounded outlined placeholder="Ara">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>

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
