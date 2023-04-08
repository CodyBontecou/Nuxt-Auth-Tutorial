import { getServerSession } from '#auth'

const users = [
  {
    id: 1,
    email: 'bontecouc@gmail.com',
    birthday: '4-14-1994',
  },
  {
    id: 2,
    email: 'notme@gmail.com',
    birthday: '1-2-30',
  },
]

export default eventHandler(async event => {
  const session = await getServerSession(event)
  if (!session) {
    return { status: 'unauthenticated!' }
  }

  const user = users.find(user => user.email === session.user?.email)
  return { email: user?.email, birthday: user?.birthday }
})
