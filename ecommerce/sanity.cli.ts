import {defineCliConfig} from 'sanity/cli';

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineCliConfig({
  api: {
    projectId: '0n23nmy9',
    dataset: 'production',
  }
})
