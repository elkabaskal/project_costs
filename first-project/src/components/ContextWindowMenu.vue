 <template>
  <div class="wrap" v-if="Name">
    <component :is="Name" transition name="fade" />
  </div>
</template>

<script>
export default {
  components: {
    ContextMenu: () => import("./ContextMenu.vue"),
  },
  props: {
    Name: String,
    settings: Object,
  },
  methods: {},
};
</script>  

<style lang="scss" scoped>
.wrap {
  position: absolute;
  max-width: 15%;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px #00a89b solid;
  padding: 10px;
  background-color: white;
  left: 52%;
  top: 180px;
  box-shadow: 0.1em 0.1em 0.5em 0.5em rgba(81, 90, 90, 0.2);
}
</style>