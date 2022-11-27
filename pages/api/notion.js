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

  const etkinliks = database.results.filter((pages) => {
    return pages.properties.Status.status.name == "Etkinlikler";
  });
  var months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const data = {
    posts: database.results.map((el) => {
      return {
        id: el.id,
        title: el.properties.Name?.title[0]?.plain_text,
        date:
          months[
            new Date(
              el.properties.Date.date ? el.properties.Date?.date?.start : ""
            ).getMonth()
          ] +
          " " +
          new Date(el.properties.Date.date.start).getDate(),
        cover: el.cover
          ? el.cover[el.cover.type].url
          : "https://media.discordapp.net/attachments/1034832959376728065/1043528559454605382/1888831_10152272186944297_1684436254_o.jpg?width=719&height=479",
        description: el.properties.Description.rich_text[0]?.text.content,
        mainTag: el.properties.Select?.select?.name,
        tags: el.properties["Multi-select"][el.properties["Multi-select"].type],
        status: el.properties.Status[el.properties.Status.type].name,
      };
    }),
    etkinlikler: etkinliks.map((etkinlik) => {
      return {
        id: etkinlik.id,
        title: etkinlik.properties.Name.title[0].plain_text,
        cover: etkinlik.cover[etkinlik.cover.type].url,
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
    }),
  };

  res.send(data);
}
