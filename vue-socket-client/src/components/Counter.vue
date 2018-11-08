 <template>
  <div class="counter">
    <div class="col-md-8 offest-md-2 card">
      <div class="card-block">
        <h3 class="text-center">Vue Vuex Socket.io</h3>
        <hr>
        <button class="btn-block btn-info" @click="increment">Increment</button>
        <h4 class="text-center">{{count}}</h4>
        <button class="btn-block btn-info" @click="decrement">Decrement</button>
      </div>
    </div>
  </div>
</template>

 <script>
 import { mapGetters } from 'vuex';

 export default {
   name: 'counter',
   methods: {
     increment () {
        this.$store.dispatch('socket_increment');
     },
     decrement () {
        this.$store.dispatch('socket_decrement');
     }
   },
   computed: {
     ...mapGetters(['count'])
   }
 }
 </script>
