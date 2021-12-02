export default {
    install(Vue) {
        if (this.installed) {
            return
        }

        this.installed = true

        Vue.prototype.$context = {
            EventBus: new Vue(),

            showMenu(name, settings) {
                this.EventBus.$emit('shownMenu', { name, settings })
            },

            delData() {
                this.EventBus.$emit('delData')
            },
            editData() {
                this.EventBus.$emit('editData')
            }
        }
    }
}