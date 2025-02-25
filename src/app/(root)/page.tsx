import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query
    const posts = [
        {
            _createdAt: new Date(),
            _id: 1,
            views: 55,
            author: { _id: 1, name: "Mateusz" },
            description: "This is a description.",
            image: "https://images.unsplash.com/photo-1739609579483-00b49437cc45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
            category: "Robots",
            title: "We are Robots"
        }
    ]

  return (
    <>
        <section className="pink_container">
            <h1 className="heading">Pitch your startup, <br /> Connect With Entrepreneurs</h1>

            <p className="sub-heading !max-w-3xl">
                Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions
            </p>

            <SearchForm query={query} />
        </section>

        <section className="section_container">
            <p className="text-30-semibold">
                {query ? `Search results for "${query}"` : "All Startups"}
            </p>

            <ul className="mt-7 card_grid">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <StartupCard key={post._id} post={post} />
                    ))
                ) : (
                    <p className="no-result">No Results</p>
                )}
            </ul>
        </section>
    </>
  );
}
