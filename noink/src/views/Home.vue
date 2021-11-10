<template>
  <v-container>
    <!-- Read recently -->
    <v-row>
      <v-col cols="12">
        <v-card >
          <v-card-title >Read Recently</v-card-title>
          <v-row class="px-3">
            <v-col
              v-for="i in 6"
              :key="i"
              cols="2"
              md="2"
            >
              <router-link style="text-decoration: none; color: inherit" to="produto">
                <div>
                  <v-sheet color="warning" height="150" ></v-sheet>
                  <h4>Producto</h4><br>
                  Descricao
                </div>
              </router-link>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-sheet color="info" rounded>
          <v-text h1>Recommended for you</v-text>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Products -->
    <v-row  v-for="n in 4" :key="n">
      <v-col cols="12">
        <v-card >
          <v-card-title >Category {{n}}</v-card-title>
          <v-row class="px-3">
            <v-col
              v-for="j in 6"
              :key="`${n}${j}`"
              cols="2"
              md="2"
            >
              <router-link style="text-decoration: none; color: inherit" to="produto">
                <div>
                  <v-sheet color="warning" height="150" ></v-sheet>
                  <h4>Producto</h4><br>
                  Descricao
                </div>
              </router-link>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row>
      <template v-for="n in 4">
        <v-col
          :key="n"
          class="mt-2"
          cols="12"
        >
          <h3 class="text-center">Category {{ n }}</h3>
        </v-col>

        <v-col
          v-for="j in 6"
          :key="`${n}${j}`"
          cols="6"
          md="2"
        >
          <v-sheet height="150"></v-sheet>
        </v-col>
      </template>
    </v-row> -->
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
  }
</script>
