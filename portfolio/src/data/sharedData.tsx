export type SharedData = {
    basicInfo: BasicInfo,
    skills: Skill
}

type BasicInfo = {
    name: string,
    titles: Array<string>,
    social: Array<Social>,
    image: string
}
type Social = {
    name: string,
    url: string,
    class: string
}

type Skill = {
    icons: Array<Icon>
}

type Icon = {
    name: string,
    class: string,
    level: string
}