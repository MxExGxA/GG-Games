const carouselQuery = () => {
  return `fields name,summary,
cover.url,keywords.name,
websites.url, category,
platforms.name, platforms.*,
release_dates.y, involved_companies.company.name,
rating, themes, videos.*; sort rating desc;
where cover != null & platforms != null & themes = 21 & themes != (42) &
videos != n &
release_dates.y >= 2015 & category = 0 & websites.category = 13;
limit 10;`;
};

const multiQueryTemplate = (name, id) => {
  return `
  query games "${name} games" {
  fields name, themes, websites.url, websites.category, platforms.name,
  rating,cover.url, involved_companies.company.name, 
  involved_companies.developer, release_dates.y, videos; 
  where themes = ${id} & themes != 42 &
  cover != n & websites.category = 13 & 
  involved_companies.developer = true &
  videos != n &
  release_dates.y >= 2022;
  sort rating desc;
  limit 10;
  };
  `;
};

const trendsQuery = (limit) => {
  return `
fields name,cover.url, game_modes.*, involved_companies.company.name, involved_companies.developer, platforms.name;
where game_modes.name = "Battle Royale" & themes != (42) &
cover != n & involved_companies != n &
involved_companies.developer = true &
videos != n;
limit ${limit};`;
};

const filterBuilder = (filter, years, rates, limit) => {
  let ids = [];
  let temp = {};
  let bracs = "[]";
  let strBuilder =
    "fields name,cover.url, involved_companies.company.name, involved_companies.developer, platforms.name; ";
  filter.map((f) => {
    f.values.map((v) => {
      if (v.checked) {
        ids.push(v.id);
        temp[f.field] = [...ids];
      }
    });
    ids = [];
  });

  if (Object.keys(temp).length > 0) {
    Object.keys(temp).forEach((field, index) => {
      if (index === 0) {
        strBuilder += "where ";
      }

      strBuilder += ` ${field} = ${bracs[0]}${temp[field]}${bracs[1]}
       & `;
    });
  }

  if (!strBuilder.includes("where")) {
    strBuilder += "where ";
  }

  strBuilder += `release_dates.date >= ${
    new Date(years[0].toString()).getTime() / 1000
  } & release_dates.date <= ${
    new Date(years[1].toString()).getTime() / 1000
  } &  rating >= ${rates[0]} & rating <= ${rates[1]} &
  themes != (42) & cover != n; `;

  strBuilder += `limit ${limit}; `;

  return strBuilder;
};

const gameInfoQuery = (id) => {
  return `fields name,videos.*,similar_games.name,
  screenshots.url,cover.url,
  platforms.name,
  involved_companies.company.name,
  involved_companies.developer,created_at,
  summary,game_modes.name,genres.name,themes.name,
  age_ratings.content_descriptions.description,
  websites.*, similar_games.cover.*, similar_games.platforms.name,
  similar_games.involved_companies.company.name, similar_games.involved_companies.developer,
  multiplayer_modes.*,player_perspectives.name, keywords.name,
  language_supports.language_support_type.* ,language_supports.language.*;
  where id = ${id} & cover != n & themes != (42);`;
};

const gameSearchQuery = (search) => {
  return `fields name, cover.*; search "${search}";where themes != (42) & cover != n;`;
};

export {
  multiQueryTemplate,
  carouselQuery,
  trendsQuery,
  filterBuilder,
  gameInfoQuery,
  gameSearchQuery,
};
