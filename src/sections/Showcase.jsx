import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  const projects = [
    project1Ref.current,
    project2Ref.current,
    project3Ref.current,
  ];

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }),
    [];

  projects.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3 * (index + 1),
        scrollTrigger: {
          trigger: card,
          start: "top bottom=100",
        },
      }
    );
  });

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/vidlink.png" alt="vidlink project" />
            </div>
            <div className="text-content">
              <a
                href="https://nextjs-video-conferencing-app.vercel.app/"
                target="_blank"
              >
                <h2>VidLink - Video Conferencing</h2>
              </a>

              <p className="text-white-50 md:text-xl italic">
                Built a real-time video conferencing platform with instant
                meetings, personal rooms, and recording playback. Implemented
                secure authentication using Clerk and optimized performance for
                scalability with Vercel.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#fef0e0]">
                <img
                  src="/images/docshare.png"
                  alt="Library Management Platform"
                />
              </div>
              <a
                target="_blank"
                href="https://assignment-rho-seven.vercel.app/"
              >
                <h2>DocShare - Collaborative Docs </h2>
              </a>

              <p className="text-white-50 md:text-sm italic">
                Developed a real-time document collaboration tool with live
                multi-user editing, role-based access control (RBAC), document
                search, notifications, and organization-based authentication.
              </p>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/skillsync.png" alt="YC Directory App" />
              </div>
              <h2>SkillSync - AI Tutor</h2>
             <p className="text-white-50 md:text-sm italic">Built an LMS SaaS app from scratch featuring user authentication, subscriptions, and payments using Next.js, Supabase & Stripe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
