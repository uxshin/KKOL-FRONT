import React from "react";
import BuildRow from "@/components/buildRow";

const PostInfo = ({ post }) => {
  const {
    teams,
    construction,
    photographer,
    area,
    location,
    branding,
    client,
    type,
  } = post;
  console.log(teams);

  const teamsText = teams.map((team) => team.name).join(", ");
  const brandText = branding.map((brand) => brand.name).join(", ");
  const photoText = photographer.map((photo) => photo.name).join(", ");
  const areaText = area + "㎡";
  return (
    <div className="flex flex-col mb-[285px]">
      <BuildRow
        title="Design Team"
        content={teamsText}
        secondTitle="Client"
        secondContent={client}
      />
      <BuildRow
        title="Construction"
        content={construction}
        secondTitle="Type"
        secondContent={type.name}
      />
      <BuildRow
        title="Branding"
        content={brandText}
        secondTitle="Area"
        secondContent={areaText}
      />
      <BuildRow
        title="Photograph"
        content={photoText}
        secondTitle="Location"
        secondContent={location.name}
      />
    </div>
  );
};

export default PostInfo;
