import React from "react";
import img from "../../assets/img.png";
import { ServicesData, portfolioAboutData } from "../../data/data";
import { IoIosArrowForward } from "react-icons/io";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
} from "../../assets/about/AboutIcons";

const About = () => {
  return (
    <div className="about ">
      <div className="max-w-[1200px] w-full mx-auto px-5">
        <div className="pt-[110px]  h-[400px] flex items-center justify-center">
          <img src={img} alt="" className="w-[50%]" />
        </div>
        <div className="pt-[50px]">
          <h3 className="text-[22px] pb-[14px] font-semibold text-[#fff]">
            About UIC
          </h3>
          <p className="text-[#fff] text-[18px]">
            “United IT Company” was founded on October 8, 2020. According to the
            director of the company Murodkhuja Muratov, the philosophy of the
            company is to create a team that meets international standards in
            the IT field of Uzbekistan, to open up the opportunity for young
            programmers to work on themselves and at the same time be officially
            employed, to bring the company to a prominent place in the world
            arena IT.
          </p>
          <p className="text-[#fff] pt-[10px] text-[18px] ">
            At the time the company was founded, the team consisted of only 10
            people, and now the team has +100 specialists. These people believed
            in the philosophy of the company and sought to contribute to the
            development of the project. To this day, these people remain loyal
            to the company and develop their teams within the company in
            different directions (Backend, Frontend, QA, Mobile, Analytics,
            Marketing Team, etc.).
          </p>
        </div>
        <div className=""></div>
        <div className="pt-[30px]">
          <h2 className="mb-4 text-[28px] font-semibold text-[#fff]  md:mb-8 lg:mb-10 ">
            Currently, our company offers its IT solutions in 9 main areas:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {ServicesData.map((service, index) => (
              <div className="rounded-xl py-5 px-6 h-[180px] bg-[#252527]">
                <h2 className="text-[13px] md:text-[16px] lg:text-[24px] text-[#fff] font-bold leading-[120%] mb-3">
                  {service.title}
                </h2>
                <p className="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-xl mt-[40px] text-[#fff] bg-[#252527] p-6 ">
            <p className="text-[18px] pb-3">
              "UIC Group" is the address of projects that have their own values
              and do not pass without quality control. Every opportunity and
              demand in our company serves to meet the needs of our customers
              with maximum efficiency. Our company is ready to serve customers
              not just as customers, but as partners for life with the best
              offers!
            </p>
            {portfolioAboutData.map((item) => (
              <div className="flex gap-5 flex-col sm:flex-row py-4">
                <img
                  src={item.img}
                  className="flex-[.1] w-[100%] object-contain"
                  alt={item.title}
                />
                <p className="border-b-[1px] flex-[.9] text-[20px] border-b-[#333] pb-4">
                  {item.title}
                </p>
              </div>
            ))}
            <div className="flex items-center justify-center mt-[10px]">
              <button className="flex items-center gap-3 border py-2 px-3 rounded-xl">
                Portfolio
                <IoIosArrowForward className="bg-[#676768] w-[15px] h-[15px] rounded-full p-[2px]" />
              </button>
            </div>
          </div>
          <p className="text-[18px] py-[40px] text-[#fff]">
            The presence of our SaaS systems (these are the majority of services
            on the Internet: email, CRM systems, task schedulers, web designers
            for creating sites, blogging platforms. That is, all cloud programs
            that allow you to solve specific tasks) and PaaS (management system
            databases, machine learning environments or big data processing) in
            addition to core services.
          </p>
          <div className="">
            <h2 className="flex gap-5 flex-col sm:flex-row py-4 text-[#fff]">
              The company offered solutions for the education system of the
              Republic of Uzbekistan in projects:{" "}
            </h2>
            <span className="flex gap-5 flex-col sm:flex-row py-4 text-[#fff]">
              <Icon1 />
              <p className=" flex-[.9] pt-4 text-[18px]  pb-4">
                Co-Learning Academy is a social project for teaching IT
                professions. This project includes training in such areas as
                Advanced Front-end, Basic Front-end, Python Back-end, PHP
                Back-end, Graphic Design and Mobile Development. Training to
                take place on a phased study of video lessons directly from
                specialists.
              </p>
            </span>
            <span className="flex gap-5 flex-col sm:flex-row py-4 text-[#fff]">
              <Icon2 />
              <p className=" flex-[.9] text-[18px]  pb-4">
                Mental arithmetic - automated multifunctional platform! As a
                modern platform for teachers teaching in this field, we have
                created a homework system in the form of a website and mobile
                application for children, they are specially designed in the
                style of exciting games. The platform is currently among the
                largest startups in the B2B direction
              </p>
            </span>
            <span className="flex gap-5 flex-col sm:flex-row py-4 text-[#fff]">
              <Icon3 />
              <p className=" flex-[.9] text-[18px]  pb-4">
                iMaktab — aims to provide all schools, regardless of their size
                or the resources they have, with the systems they need to
                provide effective learning, teaching and school management.
                iMaktab is developed with Python, Django, VueJS, PostgreSQL and
                other software development tools.
              </p>
            </span>
          </div>

          <div className="py-5">
            <h2 className="text-[27px] font-semibold text-[#fff]">
              In the field of state administration
            </h2>
            <span className="flex gap-5 flex-col sm:flex-row py-4 text-[#fff]">
              <Icon4 />
              <p className=" flex-[.9] text-[18px]  pb-4">
                Yosh saylovchi is an information website has been prepared to
                attract the attention of young voters and use their
                constitutional rights in the elections of the President of the
                Republic of Uzbekistan in 2021. On the site, visitors have the
                opportunity to see where polling stations are located by
                entering their data.
              </p>
            </span>
            <span className="flex gap-5 flex-col sm:flex-row py-4 text-[#fff]">
              <Icon5 />
              <p className=" flex-[.9] text-[18px]  pb-4">
                Meningkonstitutsiyam.uz is a web portal that allows expanding
                the opportunities for the participation of citizens of our
                country in the implementation of constitutional reforms,
                obtaining prompt and reliable information about the activities
                of the Constitutional Commission, familiarizing with the
                positions of representatives of the general public, specialists
                and experts on issues put forward for public discussion.
              </p>
            </span>
            <span className="flex gap-5 flex-col sm:flex-row py-4 text-[#fff]">
              <Icon7 />
              <p className=" flex-[.9] text-[18px]  pb-4">
                The project of the Notary Chamber provides many opportunities by
                integrating all electronic services of the Notary Chamber of the
                Republic of Uzbekistan. The site serves to bring together all
                notary services across the country and make their information
                easily accessible to users.
              </p>
            </span>
            <span className="flex gap-5 flex-col sm:flex-row py-4 text-[#fff]">
              <Icon8 />
              <p className=" flex-[.9] text-[18px]  pb-4">
                Sergelihokimiyati.uz - the official page of the district
                khokimiyat has been qualitatively enriched with the help of our
                services. The ability to manage vacancies from admin panels, a
                system for automatically generating resumes by applicants and a
                high-speed website - all this is dynamic and interactive on the
                khokimiyat website.
              </p>
            </span>
          </div>
        </div>

        <div className="">
          <span>
            <h2 className="text-[22px]  font-semibold text-[#fff]">Health</h2>
            <p className="text-[#fff] pt-[10px] text-[18px] ">
              UIC Group offers its solutions in all aspects of the IT world of
              any complexity in Uzbekistan. "UIC Group" is the address of
              projects that have their own values ​​and where quality control
              comes first. The company's activity is aimed at meeting the demand
              of our customers at the highest level. Our company is ready to
              serve customers not just as customers, but as partners
            </p>
          </span>
          <span className="py-[20px]">
            <h2 className="text-[22px] pt-[30px]  font-semibold text-[#fff]">
              UIC values
            </h2>
            <p className="text-[#fff] py-[10px] text-[18px] ">
              UIC Group offers its solutions in all aspects of the IT world of
              any complexity in Uzbekistan. "UIC Group" is the address of
              projects that have their own values ​​and where quality control
              comes first. The company's activity is aimed at meeting the demand
              of our customers at the highest level. Our company is ready to
              serve customers not just as customers, but as partners
            </p>{" "}
            <p className="text-[#fff] py-[10px] text-[18px] ">
              The company differs from classical companies in its focus and
              system. What matters is not the income, but the result and
              experience. We are engaged in robotics, digital marketing, game
              development, maintenance of various software systems.
            </p>{" "}
            <p className="text-[#fff] pt-[10px] text-[18px] ">
              The United IT Company team puts quality ahead of financial gain.
              More precisely, we work with people, not with computers. Feedback
              from our clients also confirms that UIC takes a responsible
              approach to the assigned tasks and responsibilities, and maintains
              a well-coordinated team process.
            </p>
            <p className="text-[#fff] pt-[10px] text-[18px] ">
              After all, we strive to become a leading team in the field of IT,
              conducting activities based on international standards. Feedback
              from our clients also confirms that UIC takes a responsible
              approach to the assigned tasks and responsibilities, and maintains
              a well-coordinated team process.
            </p>
          </span>
          <span className="">
            <h2 className="text-[22px] pt-[30px]  font-semibold text-[#fff]">
              Corporate Code of the company
            </h2>
            <p className="text-[#fff] pt-[10px] text-[18px] ">
              Ensuring high standards of corporate governance in practice is
              very difficult. Therefore, the adoption of a code that summarizes
              the rules of corporate etiquette is a way to ensure information
              openness and publicity of the company's activities, with the help
              of which the company can use it as a means of increasing its
              corporate attractiveness in the market of its activities.
            </p>{" "}
            <p className="text-[#fff] py-[10px] text-[18px] ">
              The corporate code is valid for each employee of the company, from
              the degree of obligation to the function of a specific company
              constitution.
            </p>{" "}
            <p className="text-[#fff] pt-[10px] text-[18px] ">
              The corporate code is valid for each employee of the company, from
              the degree of obligation to the function of a specific company
              constitution. This code regulates the activities of the company
              not only by etiquette, but also by general laws. In particular,
              employees of the company must not take actions that are contrary
              to or not in the interests of the company, regardless of their
              position. That is, an employee with a higher competence should not
              have a negative impact on the opinion of employees whose position
              is lower than him, force him to perform work that is beyond his
              competence or contrary to his competence. Administration
              employees, as well as all employees of the company, use the
              company's property in the interests of third parties or for
              personal interests, disclose limited (confidential) information,
              etc. they do not have the right to pursue (directly or indirectly)
              any material and / or moral interest.
            </p>
          </span>
        </div>
        <div className="pt-[30px]">
          <h2 className="text-[27px] font-semibold text-[#fff]">
            About management at UIC
          </h2>
          <div className="">
            <div className="flex gap-5 py-4 items-center">
              <span className="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"></span>
              <p className="border-b-[1px] flex-[.9] text-[20px] text-[#fff] border-b-[#333] pb-4">
                The main project management tool is Atlassian's products based
                on the Platinum partnership with UIC Group, Jira is a commercial
                error tracking system designed to organize interaction with
                users, although in some cases it is also used for project
                management. Agile methodology is also used in project
                management.{" "}
              </p>
            </div>{" "}
            <div className="flex gap-5 items-center py-4">
              <span className="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"></span>
              <p className="border-b-[1px] flex-[.9] text-[20px] text-[#fff] border-b-[#333] pb-4">
                When implementing each new project, automated code analysis is
                carried out, which helps to find vulnerabilities in the code and
                timely suppress errors.
              </p>
            </div>{" "}
            <div className="flex gap-5 items-center py-4">
              <span className="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"></span>
              <p className="border-b-[1px] flex-[.9] text-[20px] text-[#fff] border-b-[#333] pb-4">
                When implementing projects, we use our own project life cycle,
                which was developed by our team and has huge advantages in terms
                of time and quality of product creation.{" "}
              </p>
            </div>{" "}
            <div className="flex gap-5 items-center py-4">
              <span className="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"></span>
              <p className="border-b-[1px] flex-[.9] text-[20px] text-[#fff] border-b-[#333] pb-4">
                The presence of qualified specialists in the QA testing team,
                the team is interested in making any product user-friendly, both
                in terms of functionality and design. To do this, they
                constantly interact with all members of the development team and
                constantly compare the result with the given requirements.{" "}
              </p>
            </div>{" "}
            <div className="flex gap-5 items-center py-4">
              <span className="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"></span>
              <p className="border-b-[1px] flex-[.9] text-[20px] text-[#fff] border-b-[#333] pb-4">
                Well-established work with checklists, all these recommendations
                are difficult to take into account and implement at the
                checklist design stage. We pay much attention to this mechanism,
                the better it works and the more benefits it brings to our
                business. We have been automating work with checklists for many
                years and have accumulated our own large database of templates
                that can become the basis for your own checklist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
