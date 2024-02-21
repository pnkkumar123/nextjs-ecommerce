import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import StudioHeader from '@/components/StudioHeader'



export default defineConfig({
  basePath : "/studio",
  name: 'default',
  title: 'NextEcommerce',

  projectId: '0n23nmy9',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components:{
      navbar: StudioHeader
    }
  }
})
