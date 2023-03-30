import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
export default function section2() {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">
                Latest post
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>


        </section>
    )

}


function Post() {
    return (
        <div className="item">
            <div className="images">
                <Image
                    src={"/images/imgs.jpg"}
                    width={500}
                    height={350}
                    className="rounded w-screen"
                />
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={'/'} legacyBehavior><a className="text-orange-600 hover:text-cyan-600">Knowlede ,Fact</a></Link>
                    <Link href={'/'} legacyBehavior><a className="text-gray-600 hover:text-cyan-600"> - March 24, 2023</a></Link>
                </div>
                <div className="title">
                    <Link href={'/'} legacyBehavior><a className="text-md font-bold text-gray-800 hover:text-gray-400">
                        For the things we have to learn before we can do them, we learn by doing them.
                    </a></Link>
                </div>
                <p className="text-sm md:text-md text-gray-500 py-3">
                    It is often understood as awareness of facts or as practical skills,
                    and may also mean familiarity with objects or situations. Knowledge of facts,
                    also called propositional knowledge, is often defined as true belief that is distinct
                    from opinion or guesswork by virtue of justification.
                </p>
                <Author></Author>
            </div>

        </div>
    )
}