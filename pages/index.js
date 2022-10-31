import Head from 'next/head';
import Image from 'next/image';
import TitleBar from '../components/TitleBar';
import ProjectSection from '../components/ProjectSection';

const professionalProjects = [
    { key: 1, name: 'PROJECT-1', client: 'client1', imagesrc: '/../public/projects/project1_thumb.png', description: "it's the first project", year: '2020' },
    { key: 2, name: 'PROJECT-2', client: 'client2', imagesrc: '/../public/projects/project2_thumb.png', description: "it's the second project", year: '2020' },
    { key: 3, name: 'PROJECT-3', client: 'client3', imagesrc: '/../public/projects/project3_thumb.png', description: "it's the third project", year: '2020' },
    { key: 4, name: 'PROJECT-4', client: 'client4', imagesrc: '/../public/projects/project4_thumb.png', description: "it's the fourth project", year: '2020' },
];

const personalProjects = [
    { key: 1, name: 'Project P 1', imagesrc: '', description: "it's the first personal project" },
    { key: 2, name: 'Project P 2', imagesrc: '', description: "it's the second personal project" },
    { key: 3, name: 'Project P 3', imagesrc: '', description: "it's the third personal project" },
    { key: 4, name: 'Project P 4', imagesrc: '', description: "it's the fourth personal project" },
    { key: 5, name: 'Project P 5', imagesrc: '', description: "it's the fifth personal project" },
    { key: 6, name: 'Project P 6', imagesrc: '', description: "it's the sixth personal project" },
];

export default function Home() {
    return (
        <div className="text-white">
            <Head>
                <title>Leo Morton</title>
                <meta name="description" content="Leo Morton's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="mx-auto max-w-screen-xl px-10">
                    <TitleBar />
                    <ProjectSection sectionTitle={'Professional Projects'} projects={professionalProjects} />
                    {/* <ProjectSection sectionTitle={'Personal Projects'} projects={personalProjects} /> */}
                </div>
            </main>
        </div>
    );
}
