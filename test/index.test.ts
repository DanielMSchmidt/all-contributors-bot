const { Application } = require("probot");

// You can import your modules
import index from "../src/index";

describe("All-Contributors-Bot", () => {
  let app, github;

  beforeEach(() => {
    app = new Application();

    app.load(index);

    github = {};
    // Passes the mocked out GitHub API into out app instance
    app.auth = () => Promise.resolve(github);
  });

  describe("config", () => {
    it.skip("loads a config");
  });

  describe("modes", () => {
    describe("issue", () => {
      it.skip(
        "creates an issue if a committer is not in the list contributor list"
      );
      it.skip(
        "creates no issue if all committer are in the list contributor list"
      );

      it.skip("ignores blacklisted names");
    });

    describe("commit", () => {
      it.skip(
        "creates and pushes a commit if a committer is not in the list contributor list"
      );
      it.skip(
        "creates no commit if all committer are in the list contributor list"
      );

      it.skip("ignores blacklisted names");
    });
  });
});
