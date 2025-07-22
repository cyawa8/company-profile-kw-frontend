"use client"

import Container from "@/app//_components/Container";
import H1 from "@/app//_components/H1";
import AboutStory from "@/app/_components/AboutStory";
import { AnimatedDiv } from "@/app/_components/AnimatedDiv";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import PeopleTabSelector from "@/app/_components/TabSelector";

export default function People(){
    return(
      <Container>
        <Breadcrumbs/>
        <PeopleTabSelector />
        
          <AnimatedDiv delay={0}>
            <H1>Cerita Rekan Kami</H1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <h2>
                Banyak teman-teman yang pernah magang bersama kami kini telah sukses meniti karier yang membanggakan. Di sisi lain, para senior kami juga sudah bertahun-tahun setia berkontribusi di Pepper. Ada begitu banyak kisah seru dan inspiratif di sini—dan kami selalu senang berbagi cerita itu bersama Anda.
              </h2>
            </div>
          </AnimatedDiv>
        <AboutStory />
      </Container>
    );
}