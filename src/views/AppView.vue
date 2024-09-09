<template>
  <div class="w-full p-4">
    <div class="flex flex-col gap-2">
      <div class="flex flex-nowarp gap-2">
        <label class="input input-bordered flex items-center gap-2 w-full">
          User
          <input type="text" class="grow" placeholder="uhaber" v-model="id" />
        </label>
        <button class="btn btn-primary w-1/2 flex-shrink" @click="save">Save</button>
      </div>
      <textarea class="textarea w-full" placeholder="Bio" v-model="user"></textarea>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>User</th>
            <th>Cookies</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="user, index in users">
            <tr :set="data = user.data()">
              <th>{{ index }}</th>
              <td>{{ user.id }}</td>
              <td>{{ data.user }}</td>
              <td class="w-10 cursor-pointer text-error" @click="() => del(user.id)">X</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { addUser, deleteUser, getUsers } from '@/services/db';
import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore/lite';

export default {
  data() {
    return {
      id: "",
      user: "",
      users: [] as QueryDocumentSnapshot<DocumentData, DocumentData>[]
    }
  },
  methods: {
    async del(id: string) {
      await deleteUser(id)
      this.users = await getUsers()
    },
    async save() {
      await addUser(this.id, this.user)
      this.users = await getUsers()
    }
  },
  async beforeMount() {
    this.users = await getUsers()
  },
}
</script>
