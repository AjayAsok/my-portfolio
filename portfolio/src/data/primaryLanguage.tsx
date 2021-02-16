export type PrimaryType = {
    basicInfo: BasicInfo,
    projects: Array<Project>,
    experience: Array<Experience>

}
type BasicInfo = {
    description_header: string,
    description: string,
    sectionName: Section
}

type Section = {
    about: string,
    projects: string,
    skills: string,
    experience: string
}

type Project = {
    title: string,
    startDate: string,
    description: string,
    images: Array<string>
    url: string,
    technologies: Array<Technologies>
}

type Technologies = {
    class: string,
    name: string
}

type Experience = {
    company: string,
    title: string,
    years: string,
    mainTech: Array<string>,
    technologies: Array<string>
}