import profileReducer, {actions} from './profile-reducer';


const state = {
  posts: [
    { id: 1, message: 'Hi, how  are you?', likesCount: 123 },
    { id: 2, message: "Hi, i'm good!", likesCount: 27 },
    { id: 3, message: 'Чем занимаешься?', likesCount: 2 },
  ],
  profile: null,
  status: '',
  isFetching: false,
  editModeProfile: false
}

describe('Profile-reducer:', () => {
  let action = actions.addPost('Testing...')
  let newState = profileReducer(state, action)

  test('should return state object', () => {
    expect(newState).toBeDefined()
  })

  test('new post should be added', () => {
    expect(newState.posts).toHaveLength(4)
  })

  test('should check new post', () => {
    expect(newState.posts[3].message).toBeDefined()
    expect(newState.posts[3].message.length).toBeGreaterThanOrEqual(1)
    expect(newState.posts[3].message).toBe('Testing...')
    expect(newState.posts[3].id).toBeDefined()
    expect(newState.posts[3].id).toBe(4)
    expect(typeof newState.posts[3].id).toBe('number')
    expect(newState.posts[3].likesCount).toBeDefined()
  })

  test('after deleting length of messages should be decrement', () => {
    let action = actions.deletePost(4)
    newState = profileReducer(state, action)
    expect(newState.posts).toHaveLength(3)
  })

  test("after deleting length shouldn't be decrement if id is incorrect", () => {
    let action = actions.deletePost(1000)
    newState = profileReducer(state, action)
    expect(newState.posts).toHaveLength(3)
  })
})
