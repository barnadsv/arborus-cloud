// describe("Sapper template app", () => {
//     beforeEach(() => {
//         cy.visit("/");
//     });
//     it("has the correct heading", () => {
//         // https://testing-library.com/docs/guide-which-query
//         cy.findByRole("heading").should("contain", "Great success!");
//     });
// });

describe("Blog posts", () => {
  before(() => {
    cy.visit("/").then((contentWindow) => {
      const firebaseAppOptions = contentWindow.firebase.app().options;
      cy.task("addBlogPost", {
        firebaseAppOptions,
        slug: "test-post",
        post: {
          content: "A test blog post",
          title: "Test post",
        },
      });
    });
    cy.visit("/blog");
  });
  // beforeEach(() => {
  //     cy.visit("/blog");
  // });
  it("has the correct <h1>", () => {
    cy.contains("h1", "Recent posts");
  });
  it("displays the test blog post", () => {
    // cy.get("[data-cy=blog-posts-list] li").should("not.have.length", 0);
    cy.contains("[data-cy=blog-posts-list] a", "Test post");
  });
  // posts.forEach((post) => {
  //     it(`lists the "${post.title}" blog post`, () => {
  //         cy.contains("[data-cy=blog-posts-list] li a", post.title).should(
  //             "have.attr",
  //             "href",
  //             `blog/${post.slug}`
  //         );
  //     });
  // });
});

// Criar teste que:
// - Insere um post
// - Carrega a pagina de blog pra validar se ela existe
// - Clica no post pra validar se a pagina de detalhe existe
