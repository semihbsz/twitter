<template>
  <q-page class="container">

<div >
    <div class="row">
      <div class="col">
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
          <q-item-label>Title</q-item-label>
          <q-item-label caption>
            Subhead
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </q-card-section>
      </q-card-section>
    </q-card>
      </div>
      <div class="col">
        .col2
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
