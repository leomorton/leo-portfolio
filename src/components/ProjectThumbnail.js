import '../css/ProjectThumbnail.css';

function ProjectThumbnail({ projectName }) {
    return (
        <div className="ProjectThumbnail">
            <h3>{projectName}</h3>
        </div>
    );
}

export default ProjectThumbnail;
