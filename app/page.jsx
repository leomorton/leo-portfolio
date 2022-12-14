import ProjectSection from "./ProjectSection";

const professionalProjects = [
    {
        key: 1,
        projectId: "project-1",
        name: "PROJECT",
        client: "client",
        imagesrc: "/../public/projects/project1_thumb.png",
        description: "it's the first project",
        year: "2020",
    },
    {
        key: 2,
        projectId: "project-2",
        name: "PRJ",
        client: "clt",
        imagesrc: "/../public/projects/project2_thumb.png",
        description: "it's the second project",
        year: "2020",
    },
    {
        key: 3,
        projectId: "project-3",
        name: "PROJECT LONG",
        client: "long client",
        imagesrc: "/../public/projects/project3_thumb.png",
        description: "it's the third project",
        year: "2020",
    },
    {
        key: 4,
        projectId: "project-4",
        name: "WAGAMAMA NOODLE UNION",
        client: "quite long client",
        imagesrc: "/../public/projects/project4_thumb.png",
        description: "it's the fourth project",
        year: "2020",
    },
];

const personalProjects = [
    { key: 1, name: "Project P 1", imagesrc: "", description: "it's the first personal project" },
    { key: 2, name: "Project P 2", imagesrc: "", description: "it's the second personal project" },
    { key: 3, name: "Project P 3", imagesrc: "", description: "it's the third personal project" },
    { key: 4, name: "Project P 4", imagesrc: "", description: "it's the fourth personal project" },
    { key: 5, name: "Project P 5", imagesrc: "", description: "it's the fifth personal project" },
    { key: 6, name: "Project P 6", imagesrc: "", description: "it's the sixth personal project" },
];

export default function Page() {
    return (
        <div>
            <main>
                <div className="mx-auto max-w-screen-xl">
                    <ProjectSection sectionTitle={"Professional Projects"} projects={professionalProjects} />
                    {/* <ProjectSection sectionTitle={'Personal Projects'} projects={personalProjects} /> */}
                </div>
            </main>
        </div>
    );
}
