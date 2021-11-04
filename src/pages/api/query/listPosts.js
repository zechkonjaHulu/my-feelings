export const listPosts = `query listNotes {
  listNotes {
    items {
      id
      isComplete
      title
    }
  }
}`;