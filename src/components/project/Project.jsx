import CardProject from "../../data/project/CardProject";
import dataProject from "../../data/project/dataProject";

const Project = () => {
  const limitedData = dataProject.slice(0, 3); // Ambil hanya 3 data pertama

  return (
    <>
      {limitedData.map((data, index) => (
        <CardProject
          key={index}
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          image={data.image}
          link={data.link}
        />
      ))}
    </>
  );
};

export default Project;
