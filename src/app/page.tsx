"use client";
import { useState, useEffect } from "react";
import { skills } from "./data";
import {
  IconButton,
  LinkButton,
  IconText,
  SmallText,
  BoxWrapper,
  ContentWrapper,
  GridWrapper,
  MainWrapper,
  LargeText,
} from "./components";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { works, portfolios, social } from "./data";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Cek tema di localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    const root = window.document.documentElement;

    if (savedTheme === "dark") {
      root.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setIsDarkMode(!isDarkMode);
  };
  return (
    <MainWrapper>
      {/* Greeting */}
      <div className="max-w-[1250px] mx-auto text-end py-8 px-4">
        <button
          className="text-2xl duration-500 ease-in-out"
          onClick={toggleTheme}
        >
          {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
      {/* Skills */}
      <ContentWrapper>
        <LargeText text="SKILLS" />
        <BoxWrapper>
          <GridWrapper style="grid-cols-2 md:grid-cols-4">
            {skills.map((skill) => (
              <IconText key={skill.name} text={skill.name} icon={skill.icon} />
            ))}
          </GridWrapper>
        </BoxWrapper>
      </ContentWrapper>

      {/* Experience */}
      <ContentWrapper>
        <LargeText text="EXPERIENCE" />
        <BoxWrapper>
          {works.map((work) => (
            <GridWrapper
              key={work.position}
              style="w-full grid-cols-2 place-content-between"
            >
              <SmallText text={work.position} />
              <SmallText text={work.dateStar} style="text-right" />
              <SmallText text={work.place} />
              <SmallText text={work.dateEnd} style="text-right" />
            </GridWrapper>
          ))}
        </BoxWrapper>
      </ContentWrapper>

      {/* Portfolio */}
      <ContentWrapper>
        <LargeText text="PORTFOLIOS" />
        <GridWrapper style="grid-cols-1 md:grid-cols-3 items-stretch w-full gap-12 ">
          {portfolios.map((portfolio) => (
            <BoxWrapper key={portfolio.title}>
              <SmallText text={portfolio.title} />
              <SmallText text={portfolio.description} />

              <GridWrapper style="grid-cols-3 gap-5 my-4">
                <LinkButton text="LIVE" link={portfolio.live} />
                <LinkButton text="FE" link={portfolio.fe} />
                <LinkButton text="BE" link={portfolio.be} />
              </GridWrapper>

              <GridWrapper style="grid-cols-8 gap-5 my-4">
                {portfolio.tags.map((tag) => (
                  <div key={tag.id} className="text-xl">
                    {tag.component}
                  </div>
                ))}
              </GridWrapper>
            </BoxWrapper>
          ))}
        </GridWrapper>
      </ContentWrapper>

      {/* Footer */}
      <ContentWrapper>
        <LargeText text="SOCIAL MEDIA" />
        <GridWrapper style="grid-cols-2 gap-12 w-fit mx-auto place-content-center">
          {social.map((s) => (
            <IconButton key={s.id} text={s.title} icon={s.icon} link={s.link} />
          ))}
        </GridWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}
