const { Client } = require("@notionhq/client");

export default async function handler(req, res) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const pageId = req.query.post;
  const response = await notion.pages.retrieve({ page_id: pageId });
  const blocks = await notion.blocks.children.list({ block_id: pageId });

  const data = {
    id: response.id,
    cover: response.cover
      ? response.cover[response.cover.type].url
      : "https://media.discordapp.net/attachments/1034832959376728065/1043528559454605382/1888831_10152272186944297_1684436254_o.jpg?width=719&height=479",
    title:
      response.properties.Name[response.properties.Name.type][0].text.content,
    date: response.last_edited_time.split("T")[0],
    description:
      response.properties.Description?.rich_text[0]?.text.content || "",
    blocks: blocks.results,
    tags: response.properties["Multi-select"].multi_select,
    author: response.properties.Author?.rich_text[0]?.plain_text,
  };
  res.send(data);
}
