import { Pump } from "basehub/react-pump";

import { draftMode } from "next/headers";

export async function BaseHubTest() {
  const queries = [
    {
      elementone: { test: true },
    },
  ];

  const render = async ([data]: [any]) => {
    "use server";

    return (
      <>
        <div>{data.elementone.test}</div>
        <p>this now </p>
      </>
    );
  };
  return (
    <div className="p-8 border border-dashed border-gray-300 rounded-lg">
      <h2 className="text-xl font-bold mb-4">BaseHub Connection Tests</h2>

      {/*} <Pump
        draft={(await draftMode()).isEnabled} 
        queries={{
          siteSettings: {
            title: true,
            description: true,
            author: {
              name: true,
              email: true,
            },
          },
          projects: {
            items: {
              _sys: { id: true, slug: true },
              title: true,
              category: true,
              featured: true,
            },
          },
        }}>
        {async ([{ siteSettings, projects }]) => (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Site Settings:</h3>
              <p>Title: {siteSettings?.title || "Not set"}</p>
              <p>Author: {siteSettings?.author?.name || "Not set"}</p>
            </div>

            <div>
              <h3 className="font-semibold">
                Projects ({projects?.items?.length || 0}):
              </h3>
              <ul className="list-disc list-inside">
                {projects?.items?.map((project) => (
                  <li key={project._sys.id}>
                    {project.title} ({project.category}){project.featured && " ⭐"}
                  </li>
                ))}
              </ul>
            </div> 
          </div>
        )} */}
      {/* <Pump
        queries={queries}
        next={{ revalidate: 0 }}
        draft={(await draftMode()).isEnabled}>
        {render}
      </Pump> */}
      <div>test 13 ok</div>
    </div>
  );
}
