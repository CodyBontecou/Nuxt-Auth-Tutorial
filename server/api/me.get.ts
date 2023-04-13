import { getServerSession } from '#auth'
import { users } from '~~/db'

export default eventHandler(async event => {
  const session = await getServerSession(event)
  if (!session) {
    return { status: 'unauthenticated!' }
  }

  const user = users.find(user => user.email === session.user?.email)
  return { email: user?.email, birthday: user?.birthday }
})
