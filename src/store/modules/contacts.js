export default {
  mutations: {
    setContact(state, contact) {
      state.contacts.push(contact);
    },
  },

  state: {
    contacts: [],
  },

  getters: {
    getAllContacts(state) {
      return state.contacts;
    },
  },
};
