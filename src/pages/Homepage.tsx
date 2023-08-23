import Card from "../components/BlogCard"

const Homepage = () =>{
    return(
        <section id="home">
            <h1>Welcome to Wheels With Mamicha</h1>
            <img src="src\assets\car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.avif" alt="" />
            <h2 style={{ color: 'white'}}>Articles</h2>
                <div className="container">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
        </section>
    )
}

export default Homepage