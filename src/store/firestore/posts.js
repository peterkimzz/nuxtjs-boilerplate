export const state = () => ({})

export const getters = {
  a: state => {
    return 'a'
  }
}

export const mutations = {}

export const actions = {
  FIND_BY_ID(_, id) {
    return this.$firestore
      .collection('posts')
      .doc(id)
      .get()
  },
  STORE(ctx, payload) {
    console.log(this.$store)
    return this.$firestore.collection('posts').add({
      ...payload,
      deleted_at: null,
      created_at: this.$firebase.firestore.Timestamp.fromDate(new Date()),
      updated_at: this.$firebase.firestore.FieldValue.serverTimestamp()
    })
  },
  SET_BY_ID(_, payload) {
    if (!payload.id) throw Error('id is required.')

    return this.$firestore
      .collection('posts')
      .doc(payload.id)
      .update({
        ...payload,
        updated_at: this.$firebase.firestore.FieldValue.serverTimestamp()
      })
  }
}
