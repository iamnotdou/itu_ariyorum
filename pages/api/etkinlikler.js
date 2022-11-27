import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  console.log(req.query.type);
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DB_KEY,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  function getRemain(d1) {
    var date1 = new Date();
    var date2 = new Date(d1);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    return Difference_In_Time / (1000 * 3600 * 24);
  }
  const etkinliks = database.results.filter((pages) => {
    return pages.properties.Status.status.name == "Etkinlikler";
  });
  res.send(
    etkinliks.map((etkinlik) => {
      return {
        id: etkinlik.id,
        title: etkinlik.properties.Name.title[0].plain_text,
        cover: etkinlik.cover[etkinlik.cover.type].url,
        isEnd: new Date() > new Date(etkinlik.properties.Date.date.end),
        remain: getRemain(etkinlik.properties.Date.date.start),
        date: {
          start: etkinlik.properties.Date.date.start,
          end: etkinlik.properties.Date.date.end,
        },
        description:
          etkinlik.properties.Description[
            etkinlik.properties.Description.type
          ][0].plain_text,
        location:
          etkinlik.properties.Location[etkinlik.properties.Location.type][0]
            .plain_text,
      };
    })
  );
}
