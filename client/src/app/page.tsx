import { getJobsData } from '@/api/getJobsData'
import { JobsList } from '@/components/job/jobs-list'
import { Logo } from '@/components/logo'
import { IconGithub } from '@/icons/github'

export default async function Home() {
  const jobs = await getJobsData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 px-4">
      <div className="flex flex-col items-end justify-end">
        <Logo customClass="text-primary" />
        <small className="font-bold italic text-2xl">Tech</small>
      </div>
      <JobsList jobs={jobs} />

      <a
        className="btn"
        href="https://github.com/manuelsanchezweb/infojobs-tech"
      >
        <IconGithub /> Ver repo
      </a>
    </main>
  )
}

// This gets called on every request (SSR) - For external
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`);
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const jobs = await getJobsData()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       jobs,
//     },
//   }
// }
