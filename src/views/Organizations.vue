<template>
  <div class="organizations-container">
    <div class="a-flex a-space-between">
      <h1>Mis organizaciones</h1>
      <vk-button type="text" @click="showDialog=true">Agregar una nueva</vk-button>
    </div>
    <vk-table :data="items" narrowed responsive :sorted-by="{ cell: 'Nombre' }">
      <vk-table-column v-for="(column, key) in columns" :key="key" :title="column.title" :cell="column.cell">
        <template v-slot:default="{row}" v-if="column.cell=='actions'">
          <div>
            <vk-icon-button class="uk-margin-small-right" icon="pencil"/>
            <vk-icon-button icon="trash" @click="showAlertDelete(row.id)"/>
          </div>
        </template>
      </vk-table-column>
    </vk-table>
    <vk-modal center :show.sync="showDialog">
      <vk-modal-title slot="header">Crea tu organización</vk-modal-title>
      <div>
        <div class="uk-margin">
          <label class="uk-form-label" for="name-text">Nombre</label>
          <div class="uk-form-controls">
            <input v-model="newOrganizationName" class="uk-input" id="name-text" type="text" placeholder="Mi organización">
          </div>
        </div>
      </div>
      <div slot="footer" class="uk-text-right">
        <vk-button class="uk-margin-small-right" @click="cancelCreateOrganization">Cancelar</vk-button>
        <vk-button type="primary" @click="createOrganization">Crear</vk-button>
      </div>
    </vk-modal>
  </div>
</template>

<script>
import axios from '../utils/axios';
import TokenMixin from '../mixins/TokenMixin'

export default {
  name: 'Organizations',
  mixins: [TokenMixin],
  data: () => ({
    columns: [
      {
        title: 'Nombre',
        cell: 'name'
      },
      {
        title: 'Token',
        cell: 'token'
      },
      {
        title: 'UID',
        cell: 'uid'
      },
      {
        title: 'Creada',
        cell: 'createdAt'
      },
      {
        title: '',
        cell: 'actions'
      }
    ],
    items: [],
    showDialog: false,
    newOrganizationName: ''
  }),
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.items = [];
      axios.get('organizations', {
        headers: {
          Authorization: this.accessToken
        },
        params: {
          createdBy: this.currentUser.id
        }
      }).then(response => {
        const { data } = response;
        this.items = data?.data;
      }).catch(() => {
        this.$bus.$emit('notification', {message: 'Hubo un error al traer los datos', status: 'danger'});
      })
    },
    createOrganization() {
      this.$bus.$emit('loading', true);
      const dataToSend = {
        name: this.newOrganizationName,
        createdBy: this.currentUser.id,
      };
      axios.post('organizations', dataToSend, {
        headers: {
          Authorization: this.accessToken
        }
      }).then(response => {
        this.$bus.$emit('loading', false);
        const { data } = response;
        this.items.push(data);
        this.$bus.$emit('notification', {message: 'Organización creada', status: 'success'});
        this.cancelCreateOrganization();
      }).catch(() => {
        this.$bus.$emit('loading', false);
        this.$bus.$emit('notification', {message: 'Hubo un error al crear la organización', status: 'danger'});
      })
    },
    cancelCreateOrganization() {
      this.showDialog = false;
      this.newOrganizationName = '';
    },
    showAlertDelete(id) {
      this.$swal({
        title: 'Eliminar',
        text: '¿Seguro quieres eliminar esta organización?',
        icon: 'question',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        confirmButtonColor: '#e74c3c'
      }).then(result => {
        const { isConfirmed } = result;
        if(isConfirmed) {
          this.deleteItem(id);
        }
      })
    },
    deleteItem(id) {
      axios.delete(`/organizations/${id}`, {
        headers: {
          Authorization: this.accessToken
        }
      }).then(() => {
        this.items = this.items.filter(r => r.id !== id);
        this.$bus.$emit('notification', {message: 'Organización eliminada', status: 'success'});
      }).catch(() => {
        this.$bus.$emit('notification', {message: 'Hubo un error al eliminar la organización', status: 'danger'});
      })
    }
  }
}
</script>

<style scoped>

</style>