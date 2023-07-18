import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type ProjectComponentProps = {
  image: StaticImport
  title: string
  text: string
  techs: string[]
  link: string
}
