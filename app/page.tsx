
import Blogs from "./components/Blogs";
import BookingSteps from "./components/BookingSteps";
import EventTimeline from "./components/Events";
import Faqs from "./components/FAQ";
import Hero from "./components/Hero/Hero"
import Marinas from "./components/Marinas/Marinas";
import Services from "./components/Services";
import { getEvents } from "@/lib/db/events";
import { mapPrismaEventToEvent } from "@/lib/mappers/event.mapper";
import { getBlogs } from "@/lib/db/blogs";
import { mapPrismaBlogToBlog } from "@/lib/mappers/blog.mapper";


export default async function Home() {
  const [prismaEvents, prismaBlogs] = await Promise.all([
    getEvents(),
    getBlogs(),
  ]);
  
  const events = prismaEvents.map((event) =>
    mapPrismaEventToEvent(event)
  );
  
  const blogs = prismaBlogs.map((blog) =>
    mapPrismaBlogToBlog(blog)
  );

  return (
    <>
    <Hero />
    <BookingSteps />
    <Marinas />
    <EventTimeline events={events} />
    <Services /> 
    <Blogs blogs={blogs} />
     <Faqs /> 
    </>
  );
}
