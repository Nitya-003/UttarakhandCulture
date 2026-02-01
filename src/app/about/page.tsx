"use client";

import Section from "@/components/Section";
import {Globe, Heart, Mountain, Users} from "lucide-react";
import Link from "next/link";
import { Ghost } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-background" >

            {/* Hero Header */}
            <section className="pt-32 pb-20 px-6 bg-primary text-white relative overflow-hidden z-20" >
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"/>
                <div className="max-w-4xl mx-auto text-center relative z-10" >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6" >Our Mission</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed" >
                        To preserve the fading echoes of the Himalayas and amplify them for the world to hear.
                    </p>
                </div>
            </section>

            <Section centered className={"-mb-50 -mt-15"}>
                <div className="max-w-3xl mx-auto">
                    <p className="border-l-4 border-secondary pl-3 text-xl" >
                        Every year, more villages in Uttarakhand fall silent. As we move to the cities, we don&apos;t just leave our homes—we leave our language, our rituals, and our identity behind.
                    </p>
                </div>
            </Section>

            {/* The Story */}
            <Section centered>
                <div className="max-w-3xl mx-auto">
                    <span className="font-hand text-3xl text-secondary block mb-4">Why we exist</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary">Bridging the Generational Gap</h2>
                    <div className="prose prose-lg text-muted-foreground">
                        <p className="mb-6">
                            Uttarakhand, the &#39;Devbhoomi&#39; (Land of Gods), is home to a rich tapestry of culture,
                            language and traditions that date back millennia. However, as modernization sweeps through
                            the hills, many of these stories are being lost.
                        </p>
                        <p className="mb-6">
                            Young people are moving to cities, dialects are fading and the intricate details of our
                            rituals are being forgotten.
                            <strong className="text-primary"> Uttarakhand Culture</strong> was born out of a desire to
                            stop
                            this erosion.
                        </p>
                        <p className="mb-8">
                            We solve the problem of <span className="italic">accessibility</span>. Cultural knowledge
                            shouldn&#39;t be hidden in dusty books or fading memories; it should be vibrant, digital
                            and easy to explore. We are creating a living archive that connects the youth to their roots
                            in a language they understand—digital, visual and immersive.
                        </p>
                        <p className="mb-8">We aren&apos;t building a museum to look at the past. We are building a toolkit for the future. By making our culture digital, open-source, and accessible, we are giving the next generation a reason to stay connected, no matter how far they roam.</p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mt-20">
                    <span className="font-hand text-3xl text-secondary block mb-4">The Silent Crisis</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary">The &#34;Ghost Village&#34; Phenomenon</h2>
                    <div className="prose prose-lg text-muted-foreground">
                        <p className="mb-8">
                            Fact: There are over <span className="font-bold text-red-600">3,000 ghost villages</span> in Uttarakhand.
                            When a village dies, a dialect dies with it. The folk songs of the Jaunsar or the
                            architectural genius of Koti Banal aren&apos;t just &#34;old&#34;—they are dying technologies of living.
                        </p>
                        <p className="border-l-4 border-secondary pl-6 italic">
                            &quot;We are the last generation that will hear these stories firsthand.
                            After us, there is only silence.&quot;
                        </p>
                    </div>
                    <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200 mt-8">
                        <div className="flex items-center  gap-4 mb-6">
                            <div className="p-3 bg-red-100 text-red-600 rounded-xl"><Ghost /></div>
                            <h3 className="text-xl font-bold font-serif">What we lose first:</h3>
                        </div>
                        <ul className="space-y-4 text-slate-600">
                            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-secondary rounded-full"/> Oral traditions not found in books</li>
                            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-secondary rounded-full"/> Local biodiversity and farming wisdom</li>
                            <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-secondary rounded-full"/> The linguistic nuances of Garhwali & Kumaoni</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mt-20">
                    <div className="prose prose-lg text-muted-foreground">

                        <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
                            <h3 className="text-xl font-bold font-serif text-primary mb-2">Open Source Project</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                This project is open-source because culture belongs to everyone. We believe in
                                community-driven preservation.
                                Developers can contribute code, fix bugs, or build new features.
                            </p>
                            <Link href="https://github.com/ajaynegi45/Uttarakhand-Culture" target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-secondary font-bold hover:underline">
                                View on GitHub <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>




            {/* Values Grid */}
            <Section className="bg-muted/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Heart,
                            title: "Preservation",
                            desc: "Documenting oral histories, folk songs, and art forms before they disappear."
                        },
                        {
                            icon: Users,
                            title: "Community",
                            desc: "A platform built by the people, for the people. Every story is a contribution."
                        },
                        {
                            icon: Globe,
                            title: "Modernity",
                            desc: "Presenting ancient wisdom through modern design and technology."
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 text-center">
                            <div
                                className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                                <item.icon className="w-8 h-8 text-secondary"/>
                            </div>
                            <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Team/Contact Teaser */}
            <Section centered>
                <div className="bg-primary rounded-3xl p-12 text-white text-center relative overflow-hidden">
                    <Mountain className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-70 text-white/5 pointer-events-none"/>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-6">Join the Movement</h2>
                        <p className="max-w-xl mx-auto text-white/80 mb-8">
                            Are you a writer, photographer or just someone who loves Uttarakhand? We need your help to
                            grow this archive.
                        </p>
                        {/*<button onClick={() => router.push("/about/contribute")}*/}
                        {/*        className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors shadow-lg cursor-pointer">*/}
                        {/*   */}
                        {/*</button>*/}

                        <Link href={"/about/contribute"} className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors shadow-lg cursor-pointer">
                            Get Involved</Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
