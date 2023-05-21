import Head from 'next/head';
import DefaultLayout from '@/components/layout/Default';

export default function CreateProject() {
  return (
    <>
      <Head>
        <title>Create Project</title>
        <meta name="description" content="Create Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <h1>Create Project</h1>
      </DefaultLayout>
    </>
  );
}
