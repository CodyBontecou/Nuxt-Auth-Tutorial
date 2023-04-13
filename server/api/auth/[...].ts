// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import TwitchProvider from 'next-auth/providers/twitch'
import { users } from '~~/db'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/login',
  },
  callbacks: {
    session: async ({ session, token }) => {
      const me = users.find(u => u.email === session?.user?.email)
      ;(session as any).subscribed = me?.subscribed
      return Promise.resolve(session)
    },
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    TwitchProvider.default({
      clientId: runtimeConfig.public.TWITCH_CLIENT_ID,
      clientSecret: runtimeConfig.TWITCH_CLIENT_SECRET,
    }),
  ],
})
