'use server';

const getProjects = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/projects`;

    console.log("FETCH URL:", url);

    const res = await fetch(url, {
      cache: 'no-store',
    });

    console.log("STATUS:", res.status);

    const text = await res.text();

    console.log("RAW RESPONSE:", text);

    if (!res.ok) {
      console.error(
        `Failed to fetch projects: ${res.status} ${res.statusText}`
      );
      return [];
    }

    const projects = JSON.parse(text);

    console.log("PROJECTS DATA:", projects);

    return projects || [];

  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export default getProjects;