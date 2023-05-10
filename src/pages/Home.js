import React, { useEffect } from "react"
import Page from "../containers/Page"
import Hero from "../components/Hero"
import FeatureBar from "../components/FeatureBar"
import Grid from "../containers/Grid"
import Section from "../containers/Section"
import TrialContent from "../components/TrialContent"
import TrialForm from "../components/TrialForm"
import WhyItem from "../components/WhyItem"
import Achiever from "../components/Achiever"
import featureData from "../fixture/featureData.json"
import Professors from "../components/Professors"
import Review from "../components/Review"
import Aos from "aos"
import "aos/dist/aos.css"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

// import required modules
import { EffectFade, Pagination } from "swiper"

const Home = () => {
  return (
    <Page title="Home" noBread>
      <Hero />
      <FeatureBar />
      <Why />
      <Trial />
      <MonthlyAchivers />
      <MeetProfessor />
      <Testimonial />
    </Page>
  )
}

const Trial = () => {
  return (
    <Section bg="#F9FAFC">
      <Grid.Row>
        <TrialContent />
        <TrialForm />
      </Grid.Row>
    </Section>
  )
}

const Why = () => {
  return (
    <Section title="Why Us" subtitle="-">
      <div style={{ padding: "20px 40px", display: "flex", flexDirection: "column", gap: "24px" }}>
        <Grid.Row>
          {featureData &&
            // eslint-disable-next-line
            featureData.map((item, index) => {
              if (index < 3) {
                return <WhyItem key={index} icon={item.icon} title={item.title} disc={item.disc} />
              }
              // eslint-disable-next-line
            })}
        </Grid.Row>
        <Grid.Row>
          {featureData &&
            // eslint-disable-next-line
            featureData.map((item, index) => {
              if (index > 2) {
                return <WhyItem key={index} icon={item.icon} title={item.title} disc={item.disc} />
              }
              // eslint-disable-next-line
            })}
        </Grid.Row>
      </div>
    </Section>
  )
}

const MonthlyAchivers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Section title="Monthly Achievers" subtitle="Topper of the month">
      <Section.Achivers>
        <Achiever
          data-aos="fade-left"
          userAvatar="https://res.cloudinary.com/user-avatars/image/upload/v1647924847/user-photos/uxqb2pw1jtk45bobxiou.jpg"
          rank={2}
          name="Vijay Gaikwad"
          course={"12th"}
          branch={"Vivek Nagar"}
          mark="98"
          total={"100"}
        />
        <Achiever
          // data-aos="fade-left"
          userAvatar="https://res.cloudinary.com/user-avatars/image/upload/v1647888506/user-photos/n3onzksrg35mmbgdauga.jpg"
          rank={1}
          name="Vinay Bhadre"
          course={"12th"}
          branch={"Vivek Nagar"}
          mark="99"
          total={"100"}
        />
        <Achiever
          data-aos="fade-right"
          userAvatar="https://res.cloudinary.com/user-avatars/image/upload/v1648012613/user-photos/yzugaym59ncvoty87t0w.jpg"
          rank={3}
          name="Sumedh Gadkari"
          course={"12th"}
          branch={"Sambhaji Nagar"}
          mark="96"
          total={"100"}
        />
      </Section.Achivers>
    </Section>
  )
}

const MeetProfessor = () => {
  return (
    <Section
      // bg='rgba(0, 0, 0, 0) url("./assets/meetbg.png") repeat scroll 0% 0%'
      bg="#F9FAFC"
      title="Meet Our Professor"
      subtitle="The founder and master behind this class."
      disc="Our institute is proud to have a team of highly qualified and experienced professors who are
    dedicated to providing the best education to our students. Get to know them and their
    teaching philosophy in this section. From their educational background to their teaching
    experience, you can find everything here. We believe that a good teacher-student relationship
    is essential for effective learning, and our professors are always ready to guide and mentor
    our students."
    >
      <Professors />
    </Section>
  )
}

const Testimonial = () => {
  return (
    <Section
      title="What Our Student Say"
      subtitle="About us"
      bg={"url('./assets/testimonial.png'), repeat scroll #EFF6FF"}
    >
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="testimonial-swiper"
      >
        <SwiperSlide>
          <Review
            photo="https://i.pravatar.cc/150?img=13"
            name="John Doe"
            role="Parent"
            text="I enrolled my daughter in this coaching center for her NEET preparation, and I am extremely satisfied with the results. The teachers are highly knowledgeable and provided personal attention to my daughter's needs. The weekly assessments helped us track her progress, and the foundation course was a great help in clearing her concepts. I highly recommend this coaching center for anyone looking for quality education."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            photo="https://randomuser.me/api/portraits/women/63.jpg"
            name="Sayli shah"
            role="Student"
            text="The foundation course offered by this coaching institute was a game-changer for me. By clearing the concepts of 11th and 12th grade, I was able to build a strong foundation for my future studies. The teachers are knowledgeable and supportive, and the regular assessments helped me track my progress and stay on top of my studies."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Review
            photo="https://res.cloudinary.com/user-avatars/image/upload/v1647924847/user-photos/uxqb2pw1jtk45bobxiou.jpg"
            name="Vijay Gaikwad"
            role="Student"
            text="I had struggled with Biology for years until I joined this coaching institute. The personalized attention and problem-solving sessions helped me overcome my weaknesses and ace my exams. I highly recommend this institute to any student looking to excel in their studies."
          />
        </SwiperSlide>
      </Swiper>
    </Section>
  )
}

export default Home
