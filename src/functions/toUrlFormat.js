/**
 * Copyright (c) 2020 James George
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const toUrlFormat = (item, type) => {
  let url;
  if (typeof item === "object") {
    switch (type.toLowerCase()) {
      case "issue_open":
      case "issue_close":
        url = `<a href="${item.payload.issue.html_url}"><b>#${item.payload.issue.number}</b></a>`;
        break;
      case "issue_comment":
        url = `<a href="${item.payload.comment.html_url}"><b>#${item.payload.issue.number}</b></a>`;
        break;
      case "commit_comment":
        url = `<a href="${item.payload.comment.html_url}"><b>commit</b></a>`;
        break;
      case "pr_review_comment":
        url = `<a href="${item.payload.comment.html_url}"><b>#${item.payload.pull_request.number}</b></a>`;
        break;
      case "pr_open":
      case "pr_close":
      case "pr_merge":
        url = `<a href="${item.payload.pull_request.html_url}"><b>#${item.payload.pull_request.number}</b></a>`;
        break;
      case "pr_review":
        url = `<a href="${item.payload.review.html_url}"><b>#${item.payload.pull_request.number}</b></a>`;
        break;
      case "fork":
        url = `<a href="${item.payload.forkee.html_url}"><b>${item.payload.forkee.full_name}</b></a>`;
        break;
      case "wiki":
        url = `<a href="${item.html_url}"><b>${item.page_name}</b></a>`;
        break;
      case "release":
        url = `<a href="${item.payload.release.html_url}"><b>${item.payload.release.name}</b></a>`;
        break;
      default:
        url = "";
        break;
    }
    return url;
  }
  return `<a href="${process.env.GITHUB_SERVER_URL}/${item}"><b>${item}</b></a>`;
};

module.exports = toUrlFormat;
