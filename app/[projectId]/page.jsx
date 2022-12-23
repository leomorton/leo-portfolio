export default function Page({ params }) {
    return (
        <div className="mx-auto max-w-screen-xl">
            <h1 className="text-2xl md:text-5xl">name {params.projectId}</h1>
            <p>Wheres the text?</p>
        </div>
    );
}

// run at build time
export async function generateStaticParams() {
    const posts = await getPosts(); // request to an API or CMS

    return posts.map((post) => ({ slug: post.slug }));
}
