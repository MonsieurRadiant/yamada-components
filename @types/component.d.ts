import type { HTMLUIProps } from "@yamada-ui/react"

type DefaultLocale = "en"
type Locale = "en" | "ja"
type OtherLocale = Exclude<Locale, DefaultLocale>

type LocaleMetadata<Y> = { [key in DefaultLocale]: Y } & {
  [key in OtherLocale]?: Y
}

declare module "component" {
  type Author = {
    id: number
    login: string
    avatar_url: string
    html_url: string
  }
  type ComponentCode = {
    name: string
    path: string
    code: string
  }

  type ComponentPaths = {
    component: string
    theme: string
    config: string
  }

  type Component = {
    name: string
    slug: string
    paths: ComponentPaths
    components: ComponentCode[]
    metadata: ComponentMetadata | null
  }

  type ComponentCategoryGroup = Partial<Metadata> & {
    name: string
    slug: string
    isExpanded: boolean
    icon?: string | null
    items?: ComponentCategoryGroup[]
  }

  type ComponentCategory = Omit<ComponentCategoryGroup, "items"> & {
    items?: Component[]
  }

  type MetadataOptions = {
    container: HTMLUIProps<"div">
  }

  type SharedMetadata = {
    icon?: string | null
    authors?: Author[] | null
    options?: MetadataOptions | null
  }

  type CommonMetadata = {
    title: string
    description: string
  }

  type OriginMetadata = LocaleMetadata<CommonMetadata> & SharedMetadata

  type ComponentMetadata = CommonMetadata & SharedMetadata

  type CategoryMetadata = CommonMetadata & SharedMetadata

  type CategoryGroupMetadata = CommonMetadata & SharedMetadata

  type Metadata = CategoryGroupMetadata | CategoryMetadata | ComponentMetadata
}
