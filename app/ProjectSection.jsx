import ProjectRow from "./ProjectRow";

function ProjectSection({ sectionTitle, projects }) {
    const rows = [];

    projects.forEach((project) => {
        rows.push(<ProjectRow projectData={project} key={project.key.toString()} />);
    });

    return (
        <div>
            <h2 className="text-xl lg:text-2xl stroke-white stroke-1">{sectionTitle}</h2>
            <div>{rows}</div>
        </div>
    );
}

export default ProjectSection;
