<template>
  <q-page class="container">

<div >
    <div class="row">
      <div class="col">
        <div class="bg-white text-dark">
      <q-toolbar>
        <q-toolbar-title>Anasayfa</q-toolbar-title>

        <q-btn flat round dense icon="eva-trending-up" />
      </q-toolbar>
      <q-toolbar >
            <q-input class="full-width full-height" autogrow type="textarea" label="Bir şeyler paylaş.." style="font-size:2rem;">
              <template v-slot:before>
                <q-avatar size="250%">
                  <img  src="https://tr.gravatar.com/userimage/52247678/1183cfa3020b5fbde9203a7d4d01f154.jpg?size=200">
                </q-avatar>
              </template> 
              <template v-slot:after>
                <q-btn round dense flat icon="send" />
              </template>
          </q-input>
      </q-toolbar>
    </div>

         <q-card class="my-card" flat bordered>
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
          {{ lorem }}
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

  name: 'Anasayfa'
}
</script>
