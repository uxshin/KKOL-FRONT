import React from "react";
import BuildRow from "@/components/BuildRow";

const PostInfo = ({ post }) => {
  const {
    designers,
    construction,
    photographs,
    area,
    location,
    brandings,
    client,
  } = post;
  const type = "cafe";
  const teamsText = designers.map((team) => team.name).join(", ");

  const brandText = brandings.map((brand) => brand.name).join(", ");
  const photoText = photographs.map((photo) => photo.name).join(", ");
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
        secondContent={type}
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
        secondContent={location}
      />
    </div>
  );
};

export default PostInfo;
