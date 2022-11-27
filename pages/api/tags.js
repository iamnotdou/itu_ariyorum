import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const tags = await notion.databases
    .retrieve({
      database_id: process.env.NOTION_DB_KEY,
    })
    .then((el) => {
      return el.properties["Multi-select"].multi_select.options;
    });

  res.send(tags);
}
