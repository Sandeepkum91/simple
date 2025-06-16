"use client";
import { Badge } from "@/src/skillbox";

export  const SkillBoxCard = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {/* Variants */}
     
      <div className="flex gap-4 flex-wrap">
        <Badge label="HTML" variant="primary" />
        <Badge label="CSS" variant="secondary" />
        <Badge label="JavaScript" variant="success" />
        <Badge label="Typescript" variant="warning" />
        <Badge label="React JS" variant="success" />
      </div>

      <div className="flex gap-4 flex-wrap">
        <Badge label="Next JS" />
       
        <Badge
          label="React Native (Android)"
          variant="warning"
        />
         <Badge
          label="Node Js"
          variant="success"
        />
        <Badge label="SQL" variant="secondary" />

        <Badge
          label="MySQL"
          variant="primary"
        />
      </div>
  

      {/* Appearances */}
      <div className="flex gap-4 flex-wrap">
        <Badge label="Git" appearance="solid" />
        <Badge label="GitHub" appearance="outline" />
        <Badge label="Jira" appearance="subtle" />
        <Badge label="NestJs" appearance="solid" />
      </div>

      {/* With Icons */}
      <div className="flex gap-4 flex-wrap">
        <Badge label="Figma"  />
        <Badge
          label="Canva"
          variant="success"
        />
        <Badge
          label="MUI"
          variant="warning"
    
        />
        <Badge label=" Tailwind CSS" variant="error"  />
        <Badge
          label="AWS"
          variant="primary"
        />
      </div>

      {/* Interactive */}
      <div className="flex gap-4 flex-wrap">
        <Badge label="Docker"/>
        <Badge label="DBeaver" variant="warning" />
        <Badge label="AWS"/>
      </div>

      {/* Combined Features */}
     
      {/* Loading */}
      {/* <Badge label="Loading" isLoading /> */}
    </div>
  );
};

